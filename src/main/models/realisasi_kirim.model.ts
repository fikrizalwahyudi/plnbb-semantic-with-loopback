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

	@Property('Number')
	id:Number
	
	@Property('String')
	rencana_pasokan_id:String

	@Property('Date')
	tanggal_dikirim:Date

	@Property('Number')
	realisasi:Number

	@Property('String')
	user_id:String

	@Property('Number')
	status:Number

}