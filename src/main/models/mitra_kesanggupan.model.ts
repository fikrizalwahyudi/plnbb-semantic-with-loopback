import { PersistedDao, PersistedModel } from 'loopback-typescript-core/dist/models/persisted.model';
import { injectable,inject } from 'inversify';
import { CommonModel, Property, Relation, Remote } from 'loopback-typescript-core/dist/models/decorators';
import { MitraKesanggupanTambangDao } from './mitra_kesanggupan_tambang.model';

@injectable()
export class MitraKesanggupanDao extends PersistedDao
{
	static tableName = 'mitra_kesanggupan'
	static modelName = 'MitraKesanggupan'

	ModelClass = MitraKesanggupanModel
}

@injectable()
@CommonModel({
	name: MitraKesanggupanDao.modelName,
	dao: MitraKesanggupanDao,
	dataSource: 'plnbbmongodb',
	settings: {
		plural: 'mitra_kesanggupan',
		idInjection:true,
		forceId:false,
		mixins: {
			ObjectidType: {
				properties: ["referensiKontrakId", "tujuanPltuId", "userId", "mitraId"]
			}
		}
	}
})
export class MitraKesanggupanModel extends PersistedModel
{	
	@inject(MitraKesanggupanTambangDao)
	mitraTambangDao:MitraKesanggupanTambangDao

	id:any

	@Property('any')
	referensiKontrakId:any

	@Property('any')
	tujuanPltuId:any

	@Property('date')
	tglPengiriman:Date

	@Property('number')
	jumlah:number

	@Property('number')
	harga:number

	@Property('string')
	mode:string

	@Property('string')
	tipe: string

	@Property('string')
	keterangan:string

	@Property('string')
	jenisKontrak:string

	@Property('string')
	jenisBatubara

	@Property('any')
	jettyId

	@Property('boolean')
	lock:boolean

	@Property('number')
	gcv:number

	@Property('number')
	tm:number

	@Property('number')
	ash:number

	@Property('number')
	ts:number

	@Property('number')
	hgi:number

	@Property('number')
	idt:number

	//70mm
	@Property('number')
	size1:number

	//2.38mm
	@Property('number')
	size2:number

	@Property('any')
	userId:any

	@Property('any')
	mitraId:any

	@Relation("belongsTo", "ReferensiKontrak", "referensiKontrakId")
	referensiKontrak

	@Relation("belongsTo", "Pltu", "tujuanPltuId")
	tujuanPltu

	@Relation("hasMany", "MitraKesanggupanTambang", "mitraKesanggupanId")
	sumberTambang
	
	@Relation("belongsTo", "Jetty", "jettyId")
	jetty

	@Remote({
		accepts: [
			{ arg: 'params', type: 'array', http: { source: 'body' } }
		],
		returns: [{type: 'any', root: true}],
		http: { path: '/patchTambang', verb: 'post' }
	})
	async patchTambang(params) {
		await this.mitraTambangDao.destroyAll({mitraKesanggupanId:this.id})

		return await this.mitraTambangDao.create(params)
	}
	
	@Relation("belongsTo", "Mitra", "mitraId")
	mitra
}