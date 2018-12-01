import { PersistedDao, PersistedModel } from 'loopback-typescript-core/dist/models/persisted.model';
import { injectable,inject } from 'inversify';
import { CommonModel, Property, Relation, Remote } from 'loopback-typescript-core/dist/models/decorators';

@injectable()
export class RealisasiKirimDao extends PersistedDao
{
	static tableName = 'realisasi_kirim'
	static modelName = 'RealisasiKirim'

	ModelClass = RealisasiKirimModel
}

@injectable()
@CommonModel({
	name: RealisasiKirimDao.modelName,
	dao: RealisasiKirimDao,
	dataSource: 'plnbbmongodb',
	settings: {
		plural: 'realisasi_kirim',
		postgresql: {
			schema: "plnbbdb",
			table: RealisasiKirimDao.tableName
		},
		idInjection:true,
		forceId:false,
		mixins: {}
	}
})
export class RealisasiKirimModel extends PersistedModel
{	

	id:any
	
	@Property('string')
	rencanaPasokanId:string

	@Property('date')
	tanggalDikirim:Date

	@Property('number')
	realisasi:number

	@Property('string')
	userId:string

	@Property('number')
	status:number

}