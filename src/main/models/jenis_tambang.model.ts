import { PersistedDao, PersistedModel } from 'loopback-typescript-core/dist/models/persisted.model';
import { injectable,inject } from 'inversify';
import { CommonModel, Property, Relation } from 'loopback-typescript-core/dist/models/decorators';

@injectable()
export class JenisTambangDao extends PersistedDao
{
	static tableName = 'jenis_tambang'
	static modelName = 'JenisTambang'

	ModelClass = JenisTambangModel

}

@injectable()
@CommonModel({
	name: JenisTambangDao.modelName,
	dao: JenisTambangDao,
	dataSource: 'plnbbmongodb',
	settings: {
		plural: 'jenis_tambang',
		postgresql: {
			schema: "public",
			table: JenisTambangDao.tableName
		},

		mixins: {}
	}
})
export class JenisTambangModel extends PersistedModel
{
	id:any

	@Property('string')
	name:string

	@Property('number')
	status:number

}