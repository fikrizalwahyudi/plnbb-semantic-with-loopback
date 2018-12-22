import { PersistedDao, PersistedModel } from 'loopback-typescript-core/dist/models/persisted.model';
import { injectable,inject } from 'inversify';
import { CommonModel, Property, Relation, Remote } from 'loopback-typescript-core/dist/models/decorators';

@injectable()
export class MitraShippingOrderDao extends PersistedDao
{
	static tableName = 'mitra_shipping_order'
	static modelName = 'MitraShippingOrder'

	ModelClass = MitraShippingOrderModel
}

@injectable()
@CommonModel({
	name: MitraShippingOrderDao.modelName,
	dao: MitraShippingOrderDao,
	dataSource: 'plnbbmongodb',
	settings: {
		plural: 'mitra_shipping_order',
		idInjection:true,
		forceId:false,
		mixins: {
			ObjectidType: {
				properties: ["mitraKesanggupanId", "rencanaPasokanId"]
			}
		}
	}
})
export class MitraShippingOrderModel extends PersistedModel
{	
	id:any

	@Property('date')
	tglOrder:Date

	@Property('any')
	mitraKesanggupanId:any

	@Property('any')
	rencanaPasokanId:any

	@Property('any')
	mitraId:any

	@Relation("belongsTo", "MitraKesanggupan", "mitraKesanggupanId")
	mitraKesanggupan

	@Relation("belongsTo", "PlnRencanaPasokan", "rencanaPasokanId")
	rencanaPasokan

	@Relation("belongsTo", "Mitra", "mitraId")
	mitra
}