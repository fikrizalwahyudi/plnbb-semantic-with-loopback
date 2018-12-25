import { PersistedDao, PersistedModel } from 'loopback-typescript-core/dist/models/persisted.model';
import { injectable, inject } from 'inversify';
import { CommonModel, Property, Relation, Remote } from 'loopback-typescript-core/dist/models/decorators';

@injectable()
export class ShippingLoadingDao extends PersistedDao 
{
	static tableName = 'shipping_loading'
	static modelName = 'ShippingLoading'

	ModelClass = ShippingLoadingModel
}

@injectable()
@CommonModel({
	name: ShippingLoadingDao.modelName,
	dao: ShippingLoadingDao,
	dataSource: 'plnbbmongodb',
	settings: {
		plural: 'shipping_loading',
		idInjection: true,
		forceId: false,
		mixins: {
			ObjectidType: {
				properties: ["shippingId"]
			}
		}
	}
})
export class ShippingLoadingModel extends PersistedModel {
	
	id: any

	@Property('number')
	gcv: number

	@Property('number')
	hgi: number
	
	@Property('number')
	idt: number

	@Property('number')
	ash: number

	@Property('number')
	tm: number

	@Property('number')
	ts: number

	@Property('number')
	size1: number

	@Property('number')
	size2: number

	@Property('string')
	coaCow: string

	@Property('date')
	ta: Date

	@Property('date')
	berthing: Date

	@Property('date')
	commenceLoading: Date

	@Property('date')
	completeLoading: Date

	@Property('string')
	timesheets: string

	@Property('number')
	status: number // 0: Rejected, 1: Mitra Input, 2: PLN Input, 3: Valid

	@Property('any')
	shippingId: any

	@Relation('belongsTo', 'Shipping', 'shippingId')
	shipping
}