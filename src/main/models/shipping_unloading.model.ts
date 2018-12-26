import { PersistedDao, PersistedModel } from 'loopback-typescript-core/dist/models/persisted.model';
import { injectable, inject } from 'inversify';
import { CommonModel, Property, Relation, Remote } from 'loopback-typescript-core/dist/models/decorators';

@injectable()
export class ShippingUnloadingDao extends PersistedDao 
{
	static tableName = 'shipping_unloading'
	static modelName = 'ShippingUnloading'

	ModelClass = ShippingUnloadingModel
}

@injectable()
@CommonModel({
	name: ShippingUnloadingDao.modelName,
	dao: ShippingUnloadingDao,
	dataSource: 'plnbbmongodb',
	settings: {
		plural: 'shipping_unloading',
		idInjection: true,
		forceId: false,
		mixins: {
		}
	}
})
export class ShippingUnloadingModel extends PersistedModel {
	
	id: any

	@Property('number')
	gcv: number

    @Property('number')
    ash: number
    
    @Property('number')
    hgi: number
    
    @Property('number')
    tm: number

    @Property('number')
    ts: number
    
    @Property('number')
    idt: number
    
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
    commenceUnloading: Date
    
    @Property('date')
    completeUnloading: Date
    
    @Property('string')
	timesheets: string

    @Property('number')
	status: number // 0: Rejected, 1: Mitra Input, 2: PLN Input, 3: Valid

	@Property('any')
	shippingId: any

	@Relation('belongsTo', 'Shipping', 'shippingId')
	shipping

}