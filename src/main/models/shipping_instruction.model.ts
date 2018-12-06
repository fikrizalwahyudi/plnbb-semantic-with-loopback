import { PersistedDao, PersistedModel } from 'loopback-typescript-core/dist/models/persisted.model';
import { injectable,inject } from 'inversify';
import { CommonModel, Property, Relation, Remote } from 'loopback-typescript-core/dist/models/decorators';

@injectable()
export class ShippingInstructionDao extends PersistedDao
{
	static tableName = 'shipping_instruction'
	static modelName = 'ShippingInstruction'

	ModelClass = ShippingInstructionModel
}

@injectable()
@CommonModel({
	name: ShippingInstructionDao.modelName,
	dao: ShippingInstructionDao,
	dataSource: 'plnbbmongodb',
	settings: {
		plural: 'shipping_instruction',
		postgresql: {
			schema: "plnbbdb",
			table: ShippingInstructionDao.tableName
		},
		idInjection:true,
		forceId:false,
		mixins: {
			ObjectidType: {
				properties: ["mitraKesanggupanId"]
			}
		}
	}
})
export class ShippingInstructionModel extends PersistedModel
{	
	id:any

	@Property('string')
	no:string

	@Property('date')
	tgl:Date

	@Property('any')
	plnRencanaId:any

	@Property('any')
	transportId:any

	@Property('string')
	namaTransport:string

	@Property('string')
	jetty:string

	@Property('string')
	laycan:string

	@Relation("belongsTo", "PlnRencana", "plnRencanaId")
	plnRencana

	@Relation("belongsTo", "Mitra", "transportId")
	transport
}