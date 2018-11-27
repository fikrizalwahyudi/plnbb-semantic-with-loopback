import { PersistedDao, PersistedModel } from 'loopback-typescript-core/dist/models/persisted.model';
import { injectable,inject } from 'inversify';
import { CommonModel, Property, Relation, Remote } from 'loopback-typescript-core/dist/models/decorators';

@injectable()
export class UserMitraDao extends PersistedDao
{
	static tableName = 'user_mitra'
	static modelName = 'UserMitra'

	ModelClass = UserMitraModel
}

@injectable()
@CommonModel({
	name: UserMitraDao.modelName,
	dao: UserMitraDao,
	dataSource: 'plnbbmongodb',
	settings: {
		plural: 'user_mitra',
		postgresql: {
			schema: "plnbbdb",
			table: UserMitraDao.tableName
		},
		idInjection:true,
		forceId:false,
		mixins: {}
	}
})
export class UserMitraModel extends PersistedModel
{	

	@Property('Number')
	id:Number

	@Property('Number')
	user_id:Number

	@Property('Number')
	mitra_id:Number

}