import { PersistedDao, PersistedModel } from 'loopback-typescript-core/dist/models/persisted.model';
import { injectable,inject } from 'inversify';
import { CommonModel, Property, Relation, Remote } from 'loopback-typescript-core/dist/models/decorators';

@injectable()
export class PlnRencanaDao extends PersistedDao
{
	static tableName = 'pln_rencana'
	static modelName = 'PlnRencana'

	ModelClass = PlnRencanaModel

	@Remote({
		accepts: [
			{ arg: 'params', type: 'array', http: { source: 'body' } }
		],
		returns: [{type: 'any', root: true}],
		http: { path: '/lock', verb: 'post' }
	})
	async lock(params) {
		/*let entries = await this.find({where: {id: {inq: params}}})

		for(let i=0; i<entries.length; i++) {
			let entry = entries[i] as any

			await entry.updateAttributes({lock: true})
		}*/

		await this.updateAll({id: {inq: params}}, {lock: true})

		//console.log(entries)

		return params.map(p => {
			return {
				id: p,
				lock: true
			}
		})
	}
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

	@Property('boolean')
	lock

	@Relation("belongsTo", "Pltu", "tujuanPltuId")
	tujuanPltu

	@Relation('hasMany', 'PlnRencanaPasokan', 'rencanaId')
	pasokan
}