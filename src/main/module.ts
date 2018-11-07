import { injectable } from "inversify";
import { Module, CommonModule } from 'loopback-typescript-core';
import { SampleModel } from './models/sample.model';


@injectable()
@CommonModule({
	models: [
		SampleModel
	]
})
export class SampleModule extends Module
{
	
}