import { PersistedDao, PersistedModel } from 'loopback-typescript-core/dist/models/persisted.model';
import { injectable,inject } from 'inversify';
import { CommonModel, Property, Relation, Remote } from 'loopback-typescript-core/dist/models/decorators';

@injectable()
export class RolesDao extends PersistedDao
{
	static tableName = 'roles'
	static modelName = 'Roles'

	ModelClass = RolesModel
}

@injectable()
@CommonModel({
	name: RolesDao.modelName,
	dao: RolesDao,
	dataSource: 'mypostgresdb',
	settings: {
		plural: 'roles',
		postgresql: {
			schema: "plnbbdb",
			table: RolesDao.tableName
		},
		idInjection:true,
		forceId:false,
		mixins: {}
	}
})
export class RolesModel extends PersistedModel
{	

	@Property('Number')
	id:Number

	@Property('String')
	name:String

	@Property('String')
	description:String

	@Property('String')
	role_auth:String

	@Property('Number')
	status:Number

}