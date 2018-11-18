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
	dataSource: 'mypostgresdb',
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
	@Property('Number')
	id:Number

	@Property('Number')
	realisasi_kirim_id:Number

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

	@Property('Date')
	time_arrival:Date

	@Property('Date')
	berthing:Date

	@Property('Date')
	commence_unloading:Date

	@Property('Date')
	complete_unloading:Date

}