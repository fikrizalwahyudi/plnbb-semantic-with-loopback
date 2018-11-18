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
	dataSource: 'mypostgresdb',
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

	@Property('Number')
	id:Number

	@Property('Number')
	realisasi_kirim_id:Number

	@Property('Number')
	mitra_id:Number

	@Property('String')
	no_si:String

	@Property('String')
	laycan:String

	@Property('String')
	jetty:String

	@Property('String')
	nama_kapal:String

	@Property('Number')
	status:Number

}