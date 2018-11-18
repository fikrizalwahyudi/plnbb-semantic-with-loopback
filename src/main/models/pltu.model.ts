import { PersistedDao, PersistedModel } from 'loopback-typescript-core/dist/models/persisted.model';
import { injectable,inject } from 'inversify';
import { CommonModel, Property, Relation, Remote } from 'loopback-typescript-core/dist/models/decorators';

@injectable()
export class PltuDao extends PersistedDao
{
	static tableName = 'pltu'
	static modelName = 'Pltu'

	ModelClass = PltuModel
}

@injectable()
@CommonModel({
	name: PltuDao.modelName,
	dao: PltuDao,
	dataSource: 'mypostgresdb',
	settings: {
		plural: 'pltu',
		postgresql: {
			schema: "plnbbdb",
			table: PltuDao.tableName
		},
		idInjection:true,
		forceId:false,
		mixins: {}
	}
})
export class PltuModel extends PersistedModel
{	

	@Property('Number')
	id:Number

	@Property('String')
	code:String

	@Property('String')
	name:String

	@Property('String')
	address:String

	@Property('String')
	npwp:String

	@Property('Number')
	status:Number

}