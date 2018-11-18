import { PersistedDao, PersistedModel } from 'loopback-typescript-core/dist/models/persisted.model';
import { injectable,inject } from 'inversify';
import { CommonModel, Property, Relation, Remote } from 'loopback-typescript-core/dist/models/decorators';

@injectable()
export class RencanaPasokanDao extends PersistedDao
{
	static tableName = 'rencana_pasokan'
	static modelName = 'RencanaPasokan'

	ModelClass = RencanaPasokanModel
}

@injectable()
@CommonModel({
	name: RencanaPasokanDao.modelName,
	dao: RencanaPasokanDao,
	dataSource: 'mypostgresdb',
	settings: {
		plural: 'rencana_pasokan',
		postgresql: {
			schema: "plnbbdb",
			table: RencanaPasokanDao.tableName
		},
		idInjection:true,
		forceId:false,
		mixins: {}
	}
})
export class RencanaPasokanModel extends PersistedModel
{	

	@Property('Number')
	id:Number

	@Property('String')
	no_kontrak:String

	@Property('Number')
	tahun:Number

	@Property('Number')
	bulan:Number

	@Property('Date')
	tanggal_kirim:Date

	@Property('Number')
	pltu_id:Number

	@Property('Number')
	tipe_id:Number

	@Property('Number')
	mode_id:Number

	@Property('Number')
	tonnase:Number

	@Property('Number')
	user_id:Number

	@Property('Number')
	status:Number

}