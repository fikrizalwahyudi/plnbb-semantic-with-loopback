import { PersistedDao, PersistedModel } from 'loopback-typescript-core/dist/models/persisted.model';
import { injectable,inject } from 'inversify';
import { CommonModel, Property, Relation, Remote } from 'loopback-typescript-core/dist/models/decorators';
import { UsersModel } from './users.model';

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
	base: 'Role',
	dataSource: 'plnbbmongodb',
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

	@Property('string', true)
	name: string;	

	@Property('string')
	description: string;

	@Property('boolean')
	enabled: boolean;

	@Relation('hasMany', 'Account', 'roleId', '', 'eRoleMapping')
	users: UsersModel[];
}