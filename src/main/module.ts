import { injectable } from "inversify";
import { Module, CommonModule } from 'loopback-typescript-core';
import { SampleModel } from './models/sample.model';
import { UsersModel } from './models/users.model';


@injectable()
@CommonModule({
	models: [
		SampleModel,
		UsersModel
	]
})
export class SampleModule extends Module
{
	
}