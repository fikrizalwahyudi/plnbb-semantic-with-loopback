import { PersistedDao, PersistedModel } from 'loopback-typescript-core/dist/models/persisted.model';
import { injectable,inject } from 'inversify';
import { CommonModel, Property, Relation, Remote } from 'loopback-typescript-core/dist/models/decorators';

@injectable()
export class TypesDao extends PersistedDao
{
	static tableName = 'types'
	static modelName = 'Types'

	ModelClass = TypesModel
}

@injectable()
@CommonModel({
	name: TypesDao.modelName,
	dao: TypesDao,
	dataSource: 'plnbbmongodb',
	settings: {
		plural: 'types',
		postgresql: {
			schema: "plnbbdb",
			table: TypesDao.tableName
		},
		idInjection:true,
		forceId:false,
		mixins: {}
	}
})
export class TypesModel extends PersistedModel
{	

	@Property('Number')
	id:Number

	@Property('String')
	name:String

	@Property('Number')
	status:Number

}