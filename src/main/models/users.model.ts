import { PersistedDao, PersistedModel } from 'loopback-typescript-core/dist/models/persisted.model';
import { injectable,inject } from 'inversify';
import { CommonModel, Property, Relation, Remote } from 'loopback-typescript-core/dist/models/decorators';

@injectable()
export class UsersDao extends PersistedDao
{
	static tableName = 'users'
	static modelName = 'Users'

	ModelClass = UsersModel
}

@injectable()
@CommonModel({
	name: UsersDao.modelName,
	dao: UsersDao,
	// base: 'User',
	dataSource: 'plnbbmongodb',
	settings: {
		plural: 'users',
		postgresql: {
			schema: "plnbbdb",
			table: UsersDao.tableName
		},
		idInjection:true,
		forceId:false,
		mixins: {}
	}
})
export class UsersModel extends PersistedModel
{	
	id:Number
	email:String
	username:string
	password:string

	@Property('string')
	name:string

	@Property('number')
	role_id:number

	@Property('number')
	status:number

	@Relation("belongsTo", "Roles", "role_id")
	role
}