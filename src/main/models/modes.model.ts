import { PersistedDao, PersistedModel } from 'loopback-typescript-core/dist/models/persisted.model';
import { injectable,inject } from 'inversify';
import { CommonModel, Property, Relation, Remote } from 'loopback-typescript-core/dist/models/decorators';

@injectable()
export class ModesDao extends PersistedDao
{
	static tableName = 'modes'
	static modelName = 'Modes'

	ModelClass = ModesModel
}

@injectable()
@CommonModel({
	name: ModesDao.modelName,
	dao: ModesDao,
	dataSource: 'plnbbmongodb',
	settings: {
		plural: 'modes',
		postgresql: {
			schema: "plnbbdb",
			table: ModesDao.tableName
		},
		idInjection:true,
		forceId:false,
		mixins: {}
	}
})
export class ModesModel extends PersistedModel
{	

	@Property('Number')
	id:Number

	@Property('String')
	name:String

	@Property('Number')
	status:Number

}