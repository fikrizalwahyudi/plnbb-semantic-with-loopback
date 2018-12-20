import { Writable } from 'stream';
import { Module } from 'loopback-typescript-core';
import { MainModule } from './module';
import path from 'path';
import loopback from 'loopback';
import http from 'http';
import fs from 'fs';
import bodyParser from 'body-parser';

process.on('unhandledRejection', (reason, promise) => {
	//console.log(promise)
	console.log('Unhandled Rejection at:', reason.stack || reason)
	// Recommended: send the information to sentry.io
	// or whatever crash reporting service you use
	process.exit()
})

export = (function(){
	let argv = require('yargs').argv

	let app = loopback()

	// let configDir = path.resolve(process.cwd(), './src/resources');
	let configDir = path.resolve(process.cwd(), (argv.config ? argv.config : './src/resources'));
	
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
		module.getContext().registerMiddleware('initial:after', bodyParser.json())
		module.getContext().registerMiddleware('initial:after', bodyParser.urlencoded({ extended: false }))

		module.getContext().emit('module booted', module);
		if(!argv.server)
			return module.getContext().getParentContext()
		// start the web server
		let port = module.getContext().getConfig('port')
		let server = http.createServer(module.getContext().getParentContext())
		
		let handleOnStart = (startedPort) => {
			var baseUrl = 'http://' + module.getContext().getConfig('host') + ':' + startedPort;
			//module.getContext().emit('started', baseUrl);
			//var baseUrl = app.get('url').replace(/\/$/, '');
			console.info('Web server listening at: %s', baseUrl);
			console.info('Browse your REST API at %s%s', baseUrl, '/explorer');
		}

		server.listen(port, () => {handleOnStart(port)})
	});
	
	return new Proxy(app, {
		get: function(target, prop, receiver) {
			if(prop === 'on' || prop === 'once') {
				let original = target[prop]

				return function(...args) {
					if(args[0] === 'booted') {
						original.apply(this, ['module booted', args[1]])
					} else
						original.apply(this, args)
				}
			} else
				return target[prop]
		}
	});
})()