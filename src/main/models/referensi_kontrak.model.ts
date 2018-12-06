import { PersistedDao, PersistedModel } from 'loopback-typescript-core/dist/models/persisted.model';
import { injectable,inject } from 'inversify';
import { CommonModel, Property, Relation, Remote } from 'loopback-typescript-core/dist/models/decorators';

@injectable()
export class ReferensiKontrakDao extends PersistedDao
{
	static tableName = 'referensi_kontrak'
	static modelName = 'ReferensiKontrak'

	ModelClass = ReferensiKontrakModel
}

@injectable()
@CommonModel({
	name: ReferensiKontrakDao.modelName,
	dao: ReferensiKontrakDao,
	dataSource: 'plnbbmongodb',
	settings: {
		plural: 'referensi_kontrak',
		postgresql: {
			schema: "plnbbdb",
			table: ReferensiKontrakDao.tableName
		},
		idInjection:true,
		forceId:false,
		mixins: {}
	}
})
export class ReferensiKontrakModel extends PersistedModel
{	

	id:any

	@Property('string')
	nomorKontrak:string
	
	@Property('string')
	namaPekerjaan:string
	
	@Property('date')
	tanggalPekerjaan:Date

	@Property('string')
	jenis:string

	@Property('number')
	status:number


}