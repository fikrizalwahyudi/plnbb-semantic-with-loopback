import { PersistedDao, PersistedModel } from 'loopback-typescript-core/dist/models/persisted.model';
import { injectable,inject } from 'inversify';
import { CommonModel, Property, Relation, Remote } from 'loopback-typescript-core/dist/models/decorators';

@injectable()
export class PlnRencanaDao extends PersistedDao
{
	static tableName = 'pln_rencana'
	static modelName = 'PlnRencana'

	ModelClass = PlnRencanaModel
}

@injectable()
@CommonModel({
	name: PlnRencanaDao.modelName,
	dao: PlnRencanaDao,
	dataSource: 'plnbbmongodb',
	settings: {
		plural: 'pln_rencana',
		postgresql: {
			schema: "plnbbdb",
			table: PlnRencanaDao.tableName
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
export class PlnRencanaModel extends PersistedModel
{	

	id:any

	@Property('any')
	mitraKesanggupanId:any

	@Property('any')
	tglPengiriman:any

	@Relation("belongsTo", "MitraKesanggupan", "mitraKesanggupanId")
	mitraKesanggupan
}