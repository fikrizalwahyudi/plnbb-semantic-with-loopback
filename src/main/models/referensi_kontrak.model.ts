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

	@Property('Number')
	id:Number

	@Property('String')
    nomor_kontrak:String
    
    @Property('String')
    nama_pekerjaan:String
    
    @Property('Date')
    tanggal_pekerjaan:Date
    
    @Property('Number')
    pltu_id:Number
    
    @Property('Number')
	mitra_id:Number

	@Property('Number')
	jenis:Number

	@Property('Number')
	status:Number

}