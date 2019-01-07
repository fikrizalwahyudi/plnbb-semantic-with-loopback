import { PersistedDao, PersistedModel } from 'loopback-typescript-core/dist/models/persisted.model';
import { injectable, inject } from 'inversify';
import { CommonModel, Property, Relation, Remote } from 'loopback-typescript-core/dist/models/decorators';

@injectable()
export class ShippingDao extends PersistedDao 
{
	static tableName = 'shipping'
	static modelName = 'Shipping'

	ModelClass = ShippingModel
}

@injectable()
@CommonModel({
	name: ShippingDao.modelName,
	dao: ShippingDao,
	dataSource: 'plnbbmongodb',
	settings: {
		plural: 'shipping',
		idInjection: true,
		forceId: false,
		mixins: {
			ObjectidType: {
				properties: ['mitraId', 'transportId', 'referensiKontrakId', 'tujuanPltuId', 'jettyId', 'siId']
			}
		}
	}
})
export class ShippingModel extends PersistedModel {
	
	id: any

	@Property('any')
	mitraId: any

	@Property('any')
	transportId: any

	@Property('any')
	referensiKontrakId: any

	@Property('any')
	tujuanPltuId: any

	@Property('any')
	jettyId: any

	@Property('any')
	siId: any

	@Property('date')
	laycanStartDate: Date

	@Property('date')
	laycanEndDate: Date

	@Property('number')
	jumlah: number

	@Property('number')
	harga: number

	@Property('string')
	moda: string

	@Property('string')
	tipe: string

	@Property('string')
	jenis: string

	@Property('number')
	status: number

	@Relation('belongsTo', 'Mitra', 'mitraId')
	mitra

	@Relation('belongsTo', 'Mitra', 'transportId')
	transport

	@Relation('belongsTo', 'ReferensiKontrak', 'referensiKontrakId')
	referensiKontrak

	@Relation('belongsTo', 'Pltu', 'tujuanPltuId')
	tujuanPltu

	@Relation('belongsTo', 'Jetty', 'jettyId')
	jetty

	@Relation('belongsTo', 'ShippingInstruction', 'siId')
	si

	@Relation('hasOne', 'ShippingLoading', 'shippingId')
	loading

	@Relation('hasOne', 'ShippingUnloading', 'shippingId')
	unloading
}