import { PersistedDao, PersistedModel } from 'loopback-typescript-core/dist/models/persisted.model';
import { injectable,inject } from 'inversify';
import { CommonModel, Property, Relation, Remote } from 'loopback-typescript-core/dist/models/decorators';

@injectable()
export class RequestShippingDao extends PersistedDao
{
	static tableName = 'request_shipping'
	static modelName = 'RequestShipping'

	ModelClass = RequestShippingModel
}

@injectable()
@CommonModel({
	name: RequestShippingDao.modelName,
	dao: RequestShippingDao,
	dataSource: 'plnbbmongodb',
	settings: {
		plural: 'request_shipping',
		postgresql: {
			schema: "plnbbdb",
			table: RequestShippingDao.tableName
		},
		idInjection:true,
		forceId:false,
		mixins: {}
	}
})
export class RequestShippingModel extends PersistedModel
{	

	id:any

	@Property('string')
	realisasiKirimId:string

	@Property('string')
	mitraId:string

	@Property('string')
	noSi:string

	@Property('string')
	laycan:string

	@Property('string')
	jetty:string

	@Property('string')
	namaKapal:string

	@Property('number')
	status:number

}