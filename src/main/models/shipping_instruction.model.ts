import { PersistedDao, PersistedModel } from 'loopback-typescript-core/dist/models/persisted.model';
import { injectable, inject } from 'inversify';
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
		idInjection: true,
		forceId: false,
		mixins: {
			ObjectidType: {
				properties: ["siRequestId", "transportId", "jettyId"]
			}
		}
	}
})
export class ShippingInstructionModel extends PersistedModel {
	
	id: any

	@Property('number')
	no: number

	@Property('string')
	noRedaksi: string

	@Property('number')
	noTahun: number

	@Property('date')
	tglSurat: Date

	@Property('any')
	siRequestId: any

	@Property('any')
	transportId: any

	@Property('any')
	jettyId: any

	@Property('string')
	namaTransport: string

	@Property('date')
	laycanStartDate: Date

	@Property('date')
	laycanEndDate: Date

	@Property('number')
	status: number // 0: New Request, 1: Need Approval, 2: Rejected, 3: Approved

	@Relation("belongsTo", "MitraShippingInstructionRequest", "siRequestId")
	siRequest

	@Relation("belongsTo", "Mitra", "transportId")
	transport

	@Relation("belongsTo", "Jetty", "jettyId")
	jetty

	@Relation("hasMany", "ShippingInstructionRevision", "siId")
	revisions

	@Relation("hasMany", "Shipping", "siId")
	shipping
}