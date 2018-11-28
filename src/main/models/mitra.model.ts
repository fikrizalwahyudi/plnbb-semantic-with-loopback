import { PersistedDao, PersistedModel } from 'loopback-typescript-core/dist/models/persisted.model';
import { injectable,inject } from 'inversify';
import { CommonModel, Property, Relation, Remote } from 'loopback-typescript-core/dist/models/decorators';

@injectable()
export class MitraDao extends PersistedDao
{
	static tableName = 'mitra'
	static modelName = 'Mitra'

	ModelClass = MitraModel
}

@injectable()
@CommonModel({
	name: MitraDao.modelName,
	dao: MitraDao,
	dataSource: 'plnbbmongodb',
	settings: {
		plural: 'mitra',
		postgresql: {
			schema: "plnbbdb",
			table: MitraDao.tableName
		},
		idInjection:true,
		forceId:false,
		mixins: {}
	}
})
export class MitraModel extends PersistedModel
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