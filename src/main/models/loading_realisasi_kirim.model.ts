import { PersistedDao, PersistedModel } from 'loopback-typescript-core/dist/models/persisted.model';
import { injectable,inject } from 'inversify';
import { CommonModel, Property, Relation } from 'loopback-typescript-core/dist/models/decorators';

@injectable()
export class LoadingRealisasiKirimDao extends PersistedDao
{
	static tableName = 'loading_realisasi_kirim'
	static modelName = 'LoadingRealisasiKirim'

	ModelClass = LoadingRealisasiKirimModel

}

@injectable()
@CommonModel({
	name: LoadingRealisasiKirimDao.modelName,
	dao: LoadingRealisasiKirimDao,
	dataSource: 'plnbbmongodb',
	settings: {
		plural: 'loading_realisasi_kirim',
		mixins: {}
	}
})
export class LoadingRealisasiKirimModel extends PersistedModel
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

	@Property('string')
	uploadBl:string

	@Property('string')
	uploadCm:string

	@Property('string')
	uploadSkab:string
}