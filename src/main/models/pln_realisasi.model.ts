import { PersistedDao, PersistedModel } from 'loopback-typescript-core/dist/models/persisted.model';
import { injectable,inject } from 'inversify';
import { CommonModel, Property, Relation, Remote } from 'loopback-typescript-core/dist/models/decorators';

@injectable()
export class PlnRealisasiDao extends PersistedDao
{
	static tableName = 'pln_realisasi'
	static modelName = 'PlnRealisasi'

	ModelClass = PlnRealisasiModel
}

@injectable()
@CommonModel({
	name: PlnRealisasiDao.modelName,
	dao: PlnRealisasiDao,
	dataSource: 'plnbbmongodb',
	settings: {
		plural: 'pln_realisasi',
		postgresql: {
			schema: "plnbbdb",
			table: PlnRealisasiDao.tableName
		},
		idInjection:true,
		forceId:false,
		mixins: {
			ObjectidType: {
				properties: ["plnRencanaId", "siId"]
			}
		}
	}
})
export class PlnRealisasiModel extends PersistedModel
{	

	id:any

	@Property('any')
	plnRencanaId:any

	@Property('any')
	siId:any

	@Relation("belongsTo", "PlnRencana", "plnRencanaId")
	plnRencana

	@Relation("belongsTo", "ShippingInstruction", "siId")
	si
}