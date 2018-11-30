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
	dataSource: 'plnbbmongodb',
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

	id:any

	@Property('string')
	noKontrak:string

	@Property('number')
	tahun:number

	@Property('number')
	bulan:number

	@Property('date')
	tanggalKirim:Date

	@Property('string')
	pltuId:string

	@Property('string')
	tipeid:string

	@Property('string')
	modeId:string

	@Property('number')
	tonnase:number

	@Property('string')
	userId:string

	@Property('number')
	status:number

}