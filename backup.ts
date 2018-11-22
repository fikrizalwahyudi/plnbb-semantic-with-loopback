module.getContext().emit('module booted', module);

import { Module } from 'loopback-typescript-core';
import { MainModule } from './main.module';
import path from 'path';
import http from 'http';
import https from 'https';
import express from 'express';
import useragent from 'express-useragent';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import RedisStore from 'connect-redis';
import flash from 'express-flash';
import mailer from 'express-mailer';
import loopback from 'loopback';
import { logger } from './util/logger';
import { logErrors, clientErrorHandler, errorHandler } from './util/error';
import { Util } from '../../../iam-common/src/main/util/util';
import requestIp = require('request-ip');
import fs from 'fs';

const log = Util.logger('Iam System')

const privateKey = fs.readFileSync(path.join(__dirname, '../resources/key.pem')).toString();
const certificate = fs.readFileSync(path.join(__dirname, '../resources/cert.pem')).toString();

process.on('unhandledRejection', (reason, promise) => {
	//console.log(promise)
	log.error('Unhandled Rejection at:', reason.stack || reason)
	// Recommended: send the information to sentry.io
	// or whatever crash reporting service you use
	process.exit()
})

export = (function() {
	let argv = require('yargs').argv
	let configDir = path.resolve(process.cwd(), (argv.config ? argv.config : './src/resources'))

	let app = loopback()
	app.log = log

	Module.boot(MainModule, {
		appRootDir: process.cwd(),
		appConfigRootDir: configDir,
		dsRootDir: configDir,
		modelsRootDir: configDir,
		middlewareRootDir: configDir,
		componentRootDir: configDir,
		mixinDirs: [
			path.resolve(process.cwd(), './node_modules/loopback-objectid-mixin'),
			path.resolve(__dirname, './mixins')
		]
	}, app).then((module)  => {
		// setup middleware
		const CookieStore = RedisStore(session)

		module.getContext().registerMiddleware('initial', useragent.express())
		module.getContext().registerMiddleware('initial', requestIp.mw())
		module.getContext().registerMiddleware('initial:after', logger)

		// setup view template
		/*module.getContext().getParentContext().use('/assets', express.static(path.resolve(__dirname, './shared/template/assets')))
		module.getContext().getParentContext().set('view engine', 'ejs');
		module.getContext().getParentContext().set('views', [
			path.resolve(__dirname, './shared/template'),
			path.resolve(__dirname, './oidc-middleware/template')
		]);*/

		/*module.getContext().registerMiddleware('routes:before', '/auth/login', (req, res, next) => {
			console.log('before routes')
			next()
		})*/

		// setup mailer
		mailer.extend(module.getContext().getParentContext(), {
			from: module.getContext().get('mail').from,
			host: module.getContext().get('mail').host, // hostname 
			secureConnection: true, // use SSL 
			port: 465, // port for secure SMTP 
			transportMethod: 'SMTP', // default is SMTP. Accepts anything that nodemailer accepts 
			auth: {
				user: module.getContext().get('mail').user,
				pass: module.getContext().get('mail').pass
			}
		})

		module.getContext().registerMiddleware('initial:after', bodyParser.json())
		module.getContext().registerMiddleware('initial:after', bodyParser.urlencoded({ extended: false }))

		module.getContext().set('trust proxy', true)
		module.getContext().registerMiddleware('initial', cookieParser(module.getContext().get('cookieSecret')))
		module.getContext().registerMiddleware('initial', session({
			store: new CookieStore({
				//client: app.datasources.redisDb.connectedClient,
				host: module.getContext().get('redisHost'),
				ttl: parseInt(module.getContext().get('sessionTtl')) * 60,
				prefix: 'oidc:pln:ExpressSession:'
			}),
			secret: module.getContext().get('cookieSecret'),
			resave: false, 
			saveUninitialized: true,
			cookie: { 
				secure: false,
				sameSite: true,
				//maxAge: 3600000
				//domain: '.pln.co.id',
				maxAge: parseInt(module.getContext().get('sessionTtl'))  60  1000
			},
			name: 'iampln'
		}))

		module.getContext().registerMiddleware('initial:after', flash())
		module.getContext().getParentContext().get('/serverstats', module.getContext().getParentContext().loopback.status())

		module.getContext().registerMiddleware('final', logErrors)
		module.getContext().registerMiddleware('final', clientErrorHandler)
		module.getContext().registerMiddleware('final', errorHandler)

		module.getContext().enableAuth({model: "eAccessToken"})

		module.getContext().emit('module booted', module);

		if(!argv.server)
			return module.getContext().getParentContext()

		// start the web server
		let port = module.getContext().getConfig('port')
		let sslPort = module.getContext().getConfig('sslPort')

		let server = http.createServer(module.getContext().getParentContext())
		let sslServer = https.createServer({key: privateKey, cert: certificate, passphrase: 'PLNYES'}, module.getContext().getParentContext())

		let handleOnStart = (startedPort) => {
			var baseUrl = 'http://' + module.getContext().getConfig('host') + ':' + startedPort;
			//module.getContext().emit('started', baseUrl);
			//var baseUrl = app.get('url').replace(/\/$/, '');
			log.info('Web server listening at: %s', baseUrl);
			log.info('Browse your REST API at %s%s', baseUrl, '/explorer');
		}

		server.listen(port, () => {handleOnStart(port)})
		sslServer.listen(sslPort, () => {handleOnStart(sslPort)})

		/*let server
		let port
		if(argv.https) {
			var options = {
				key: privateKey,
				cert: certificate,
				passphrase: 'PLNYES'
			};

			server = https.createServer(options, module.getContext().getParentContext());
			port = module.getContext().getConfig('sslPort')
		} else {
			server = http.createServer(module.getContext().getParentContext())
			port = module.getContext().getConfig('port')
		}

		//console.log('booted')
		//console.log(app.handler('rest').adapter.getClasses())
		if(!argv.server)
			return module.getContext().getParentContext()

		return server.listen(port, function() {
			var baseUrl = 'http://' + module.getContext().getConfig('host') + ':' + port;
			module.getContext().emit('started', baseUrl);
			//var baseUrl = app.get('url').replace(/\/$/, '');
			log.info('Web server listening at: %s', baseUrl);
			log.info('Browse your REST API at %s%s', baseUrl, '/explorer');
		});*/
	}).catch(err => console.log(err.stack))

	return app
})()