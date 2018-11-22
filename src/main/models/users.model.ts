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
	base: 'User',
	dataSource: 'mypostgresdb',
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

}