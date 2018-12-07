import { PersistedDao, PersistedModel } from 'loopback-typescript-core/dist/models/persisted.model';
import { injectable,inject } from 'inversify';
import { CommonModel, Property, Relation, Remote } from 'loopback-typescript-core/dist/models/decorators';
import { ReferensiKontrakPltuDao } from './referensi_kontrak_pltu.model';
import { ReferensiKontrakTambangDao } from './referensi_kontrak_tambang.model';

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
		mixins: {
			ObjectidType: {
				properties: ["mitraId"]
			}
		}
	}
})
export class ReferensiKontrakModel extends PersistedModel
{	
	@inject(ReferensiKontrakPltuDao)
	pltuDao:ReferensiKontrakPltuDao

	@inject(ReferensiKontrakTambangDao)
	tambangDao:ReferensiKontrakTambangDao

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

	@Property('any')
	mitraId:any

	@Property('string')
	tipe:string

	@Property('number')
	harga:number

	@Relation("belongsTo", "Mitra", "mitraId")
	mitra

	@Relation("hasMany", "ReferensiKontrakPltu", "referensiKontrakId")
	pltuPrincipals

	@Relation("hasMany", "ReferensiKontrakTambang", "referensiKontrakId")
	tambangPrincipals

	@Remote({
		accepts: [
			{ arg: 'params', type: 'array', http: { source: 'body' } }
		],
		returns: [{type: 'any', root: true}],
		http: { path: '/patchPltu', verb: 'post' }
	})
	async patchPltu(params) {
		await this.pltuDao.destroyAll({referensiKontrakId:this.id})

		return await this.pltuDao.create(params)
	}

	@Remote({
		accepts: [
			{ arg: 'params', type: 'array', http: { source: 'body' } }
		],
		returns: [{type: 'any', root: true}],
		http: { path: '/patchTambang', verb: 'post' }
	})
	async patchTambang(params) {
		await this.tambangDao.destroyAll({referensiKontrakId:this.id})

		return await this.tambangDao.create(params)
	}
}