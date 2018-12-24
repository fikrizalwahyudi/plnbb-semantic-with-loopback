import { PersistedDao, PersistedModel } from 'loopback-typescript-core/dist/models/persisted.model';
import { injectable,inject } from 'inversify';
import { CommonModel, Property, Relation, Remote } from 'loopback-typescript-core/dist/models/decorators';
import { JettyDao, JettyModel } from './jetty.model';

@injectable()
export class PltuDao extends PersistedDao
{
	static tableName = 'pltu'
	static modelName = 'Pltu'

	ModelClass = PltuModel
}

@injectable()
@CommonModel({
	name: PltuDao.modelName,
	dao: PltuDao,
	dataSource: 'plnbbmongodb',
	settings: {
		plural: 'pltu',
		idInjection:true,
		forceId:false,
		mixins: {}
	}
})
export class PltuModel extends PersistedModel
{	
	@inject(JettyDao)
	jettyDao:JettyDao

	@Remote({
		accepts: [
			{ arg: 'params', type: 'array', http: { source: 'body' } }
		],
		returns: [{type: 'any', root: true}],
		http: { path: '/hello', verb: 'post' }
	})
	async hello(name) {
		let jettyInstance = await this.jettyDao.findOne<JettyModel>({})

		this.parseDate()
	}

	parseDate() {

	}

	id:any

	@Property('string')
	code:string

	@Property('string')
	name:string

	@Property('string')
	address:string

	@Property('string')
	npwp:string

	@Property('number')
	status:number

	@Property('string')
	province: string

	@Property('string')
	city: string

	@Property('string')
	latitude: string

	@Property('string')
	longitude: string

}