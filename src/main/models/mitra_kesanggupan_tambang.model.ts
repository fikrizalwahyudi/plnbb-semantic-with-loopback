import { PersistedDao, PersistedModel } from 'loopback-typescript-core/dist/models/persisted.model';
import { injectable,inject } from 'inversify';
import { CommonModel, Property, Relation, Remote } from 'loopback-typescript-core/dist/models/decorators';

@injectable()
export class MitraKesanggupanTambangDao extends PersistedDao
{
	static tableName = 'mitra_kesanggupan_tambang'
	static modelName = 'MitraKesanggupanTambang'

	ModelClass = MitraKesanggupanTambangModel
}

@injectable()
@CommonModel({
	name: MitraKesanggupanTambangDao.modelName,
	dao: MitraKesanggupanTambangDao,
	dataSource: 'plnbbmongodb',
	settings: {
		plural: 'mitra_kesanggupan_tambang',
		postgresql: {
			schema: "plnbbdb",
			table: MitraKesanggupanTambangDao.tableName
		},
		idInjection:true,
		forceId:false,
		mixins: {
			ObjectidType: {
				properties: ["mitraKesanggupanId", "tambangId"]
			}
		}
	}
})
export class MitraKesanggupanTambangModel extends PersistedModel
{	

	id:any

	@Property('any')
	mitraKesanggupanId:any

	@Property('any')
	tambangId:any

	@Property('number')
	jumlah:number

	@Relation("belongsTo", "MitraKesanggupan", "mitraKesanggupanId")
	mitraKesanggupan

	@Relation("belongsTo", "Tambang", "tambangId")
	tambang
}