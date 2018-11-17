import { PersistedDao, PersistedModel } from 'loopback-typescript-core/dist/models/persisted.model';
import { injectable,inject } from 'inversify';
import { CommonModel, Property, Relation, Remote } from 'loopback-typescript-core/dist/models/decorators';

@injectable()
export class UsersDao extends PersistedDao
{
	static tableName = 'users'
	static modelName = 'Users'

	ModelClass = UsersModel

	
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
	name: UsersDao.modelName,
	dao: UsersDao,
	dataSource: 'mypostgresdb',
	settings: {
		plural: 'users',
		postgresql: {
			schema: "plnbbdb",
			table: "users"
		},
		idInjection:true,
		forceId:false,
		mixins: {}
	}
})
export class UsersModel extends PersistedModel
{	

	@Property('Number')
	id:Number

	@Property('String')
	email:String

	@Property('String')
	username:String

	@Property('String')
	password:String

	@Property('String')
	name:String

	@Property('Number')
	role_id:Number

	@Property('Number')
	status:Number

	@Remote({
		accepts: [{arg: 'msg', type: 'string'}],
		returns: [{arg: 'greeting', type: 'string'}]
	})
	async greet(msg) {
		return `greeting... ${msg}`
	}

}