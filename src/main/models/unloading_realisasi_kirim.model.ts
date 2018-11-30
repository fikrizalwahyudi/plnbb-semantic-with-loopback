import { PersistedDao, PersistedModel } from 'loopback-typescript-core/dist/models/persisted.model';
import { injectable,inject } from 'inversify';
import { CommonModel, Property, Relation } from 'loopback-typescript-core/dist/models/decorators';

@injectable()
export class UnloadingRealisasiKirimDao extends PersistedDao
{
	static tableName = 'unloading_realisasi_kirim'
	static modelName = 'UnloadingRealisasiKirim'

	ModelClass = UnloadingRealisasiKirimModel

}

@injectable()
@CommonModel({
	name: UnloadingRealisasiKirimDao.modelName,
	dao: UnloadingRealisasiKirimDao,
	dataSource: 'plnbbmongodb',
	settings: {
		plural: 'unloading_realisasi_kirim',
		postgresql: {
			schema: "public",
			table: UnloadingRealisasiKirimDao.tableName
		},

		mixins: {}
	}
})
export class UnloadingRealisasiKirimModel extends PersistedModel
{
	
	id:any

	@Property('string')
	realisasiKirimId:string

	@Property('string')
	bl:string

	@Property('string')
	ash:string

	@Property('string')
	idt:string

	@Property('string')
	gcv:string

	@Property('string')
	ts:string

	@Property('string')
	"720mm":string

	@Property('string')
	tm:string

	@Property('string')
	hgi:string

	@Property('string')
	"238mm":string

	@Property('date')
	timeArrival:Date

	@Property('date')
	berthing:Date

	@Property('date')
	commenceUnloading:Date

	@Property('date')
	completeUnloading:Date

}