import { PersistedDao, PersistedModel } from 'loopback-typescript-core/dist/models/persisted.model';
import { injectable, inject } from 'inversify';
import { CommonModel, Property, Relation, Remote } from 'loopback-typescript-core/dist/models/decorators';

@injectable()
export class MitraShippingInstructionRequestDao extends PersistedDao
{
	static tableName = 'mitra_shipping_instruction_request'
	static modelName = 'MitraShippingInstructionRequest'

	ModelClass = MitraShippingInstructionRequestModel
}

@injectable()
@CommonModel({
	name: MitraShippingInstructionRequestDao.modelName,
	dao: MitraShippingInstructionRequestDao,
	dataSource: 'plnbbmongodb',
	settings: {
		plural: 'mitra_shipping_instruction_request',
		idInjection: true,
		forceId: false,
		mixins: {
			ObjectidType: {
				properties: ["shippingOrderId"]
			}
		}
	}
})
export class MitraShippingInstructionRequestModel extends PersistedModel
{	
	id:any

	@Property('date')
	tglRequest:Date

	@Property('any')
	shippingOrderId:any

	@Property('date')
	laycanStartDate:Date

	@Property('date')
	laycanEndDate:Date

	@Property('string')
	namaTransport:string

	@Relation("belongsTo", "MitraShippingOrder", "shippingOrderId")
	shippingOrder

	@Relation('hasOne', 'ShippingInstruction', 'siRequestId')
	shippingInstruction
}