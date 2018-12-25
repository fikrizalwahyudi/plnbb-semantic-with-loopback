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
    
    @Property('date')
    timeArrival: Date
    
    @Property('date')
    berthing: Date
    
    @Property('date')
    commenceUnloading: Date
    
    @Property('date')
    completeUnloading: Date
    
    @Property('any')
    shippingId:any

    @Property('number')
    status: number

}