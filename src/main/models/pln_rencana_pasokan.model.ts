import { PersistedDao, PersistedModel } from 'loopback-typescript-core/dist/models/persisted.model';
import { injectable,inject } from 'inversify';
import { CommonModel, Property, Relation, Remote } from 'loopback-typescript-core/dist/models/decorators';

@injectable()
export class PlnRencanaPasokanDao extends PersistedDao
{
	static tableName = 'pln_rencana_pasokan'
	static modelName = 'PlnRencanaPasokan'

	ModelClass = PlnRencanaPasokanModel
}

@injectable()
@CommonModel({
	name: PlnRencanaPasokanDao.modelName,
	dao: PlnRencanaPasokanDao,
	dataSource: 'plnbbmongodb',
	settings: {
		plural: 'pln_rencana_pasokan',
		postgresql: {
			schema: "plnbbdb",
			table: PlnRencanaPasokanDao.tableName
		},
		idInjection:true,
		forceId:false,
		mixins: {
			ObjectidType: {
				properties: ["mitraKesanggupanId", "rencanaId"]
			}
		}
	}
})
export class PlnRencanaPasokanModel extends PersistedModel
{	

	id:any

	bodoamat = 'dfdfdfd'

	@Property('any')
	rencanaId:any

	@Property('any')
	mitraKesanggupanId:any

	@Property('any')
	tglPengiriman:any

	@Relation("belongsTo", "MitraKesanggupan", "mitraKesanggupanId")
	mitraKesanggupan

	@Relation("belongsTo", "PlnRencana", "rencanaId")
	rencana
}