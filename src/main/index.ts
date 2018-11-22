import { Writable } from 'stream';
import { Module } from 'loopback-typescript-core';
import { SampleModule } from './module';
import path from 'path';
import loopback from 'loopback';
import http from 'http';
import fs from 'fs';

process.on('unhandledRejection', (reason, promise) => {
	//console.log(promise)
	console.log('Unhandled Rejection at:', reason.stack || reason)
	// Recommended: send the information to sentry.io
	// or whatever crash reporting service you use
	process.exit()
})

export = (function(){
	console.log("masuk function")
	let argv = require('yargs').argv

	let app = loopback()
	// let configDir = path.resolve(process.cwd(), './src/resources');
	let configDir = path.resolve(process.cwd(), (argv.config ? argv.config : './src/resources'));
	console.log("masuk function2")
	Module.boot(SampleModule, {
		appRootDir: process.cwd(),
		appConfigRootDir: configDir,
		dsRootDir: configDir,
		modelsRootDir: configDir,
		middlewareRootDir: configDir,
		componentRootDir: configDir,
		mixinDirs: [
			path.resolve(__dirname, './mixins')
		]
	}, app).then((module)  => {
		console.log("masuk module boot");
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
	console.log("masuk function 3")
	return app;
})()