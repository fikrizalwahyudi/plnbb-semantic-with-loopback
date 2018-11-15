import { PersistedDao, PersistedModel } from 'loopback-typescript-core/dist/models/persisted.model';
import { injectable,inject } from 'inversify';
import { CommonModel, Property, Relation, Remote } from 'loopback-typescript-core/dist/models/decorators';

@injectable()
export class SampleDao extends PersistedDao
{
	static tableName = 'sample'
	static modelName = 'Sample'

	ModelClass = SampleModel

	
	@Remote({
		accepts: [{arg: 'msg', type: 'string'}],
		returns: [{arg: 'greeting', type: 'string'}]
	})
	async greetDao(msg) {
		return `greeting... ${msg}`
	}
	
}

@injectable()
@CommonModel({
	name: SampleDao.modelName,
	dao: SampleDao,
	dataSource: 'mypostgresdb',
	settings: {
		plural: 'samples',
		postgresql: {
			schema: "public",
			table: "account"
		},

		mixins: {}
	}
})
export class SampleModel extends PersistedModel
{
	@Property('string')
	name:string

	@Property('string')
	address:string

	@Property('date')
	description:Date

	@Remote({
		accepts: [{arg: 'msg', type: 'string'}],
		returns: [{arg: 'greeting', type: 'string'}]
	})
	async greet(msg) {
		return `greeting... ${msg}`
	}

}