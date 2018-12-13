import { PersistedDao, PersistedModel } from 'loopback-typescript-core/dist/models/persisted.model';
import { injectable,inject } from 'inversify';
import { CommonModel, Property, Relation, Remote } from 'loopback-typescript-core/dist/models/decorators';

@injectable()
export class PlnRencanaDao extends PersistedDao
{
	static tableName = 'pln_rencana'
	static modelName = 'PlnRencana'

	ModelClass = PlnRencanaModel
}

@injectable()
@CommonModel({
	name: PlnRencanaDao.modelName,
	dao: PlnRencanaDao,
	dataSource: 'plnbbmongodb',
	settings: {
		plural: 'pln_rencana',
		postgresql: {
			schema: "plnbbdb",
			table: PlnRencanaDao.tableName
		},
		idInjection:true,
		forceId:false,
		mixins: {
			ObjectidType: {
				properties: ["tujuanPltuId"]
			}
		}
	}
})
export class PlnRencanaModel extends PersistedModel
{	
	id:any

	myass = 'hooh'

	@Property('string')
	code

	@Property('number')
	tahun

	@Property('number')
	bulan

	@Property('number')
	totalKebutuhan

	@Property('any')
	tujuanPltuId

	@Relation("belongsTo", "Pltu", "tujuanPltuId")
	tujuanPltu

	@Relation('hasMany', 'PlnRencanaPasokan', 'rencanaId')
	pasokan
}