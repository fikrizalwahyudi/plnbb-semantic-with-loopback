import { PersistedDao, PersistedModel } from 'loopback-typescript-core/dist/models/persisted.model';
import { injectable, inject } from 'inversify';
import { CommonModel, Property, Relation, Remote } from 'loopback-typescript-core/dist/models/decorators';

@injectable()
export class ShippingInstructionRevisionDao extends PersistedDao 
{
	static tableName = 'shipping_instruction_revision'
	static modelName = 'ShippingInstructionRevision'

	ModelClass = ShippingInstructionRevisionModel
}

@injectable()
@CommonModel({
	name: ShippingInstructionRevisionDao.modelName,
	dao: ShippingInstructionRevisionDao,
	dataSource: 'plnbbmongodb',
	settings: {
		plural: 'shipping_instruction_revision',
		mongodb: {
      allowExtendedOperators: true
    },
		idInjection: true,
		forceId: false,
		mixins: {
			ObjectidType: {
				properties: ["siId"]
			}
		}
	}
})
export class ShippingInstructionRevisionModel extends PersistedModel {
	
	id: any

	@Property('string')
	keterangan: string

	@Property('number')
	noRevisi: number

	@Property('date')
	tglRevisi: Date

	@Property('any')
	siId: any

	@Relation("belongsTo", "ShippingInstruction", "siId")
	si
}