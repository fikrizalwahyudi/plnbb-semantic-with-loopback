import { PersistedDao, PersistedModel } from 'loopback-typescript-core/dist/models/persisted.model';
import { injectable,inject } from 'inversify';
import { CommonModel, Property, Relation, Remote } from 'loopback-typescript-core/dist/models/decorators';

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
		postgresql: {
			schema: "plnbbdb",
			table: MitraKesanggupanDao.tableName
		},
		idInjection:true,
		forceId:false,
		mixins: {
			ObjectidType: {
				properties: ["referensiKontrakId", "tujuanPltuId", "userId"]
			}
		}
	}
})
export class MitraKesanggupanModel extends PersistedModel
{	
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
	keterangan:string

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

	@Relation("belongsTo", "ReferensiKontrak", "referensiKontrakId")
	referensiKontrak

	@Relation("belongsTo", "Pltu", "tujuanPltuId")
	tujuanPltu

	@Relation("hasMany", "MitraKesanggupanTambang", "mitraKesanggupanId")
	sumberTambang
}