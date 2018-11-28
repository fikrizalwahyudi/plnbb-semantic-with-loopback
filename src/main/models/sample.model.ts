import { PersistedDao, PersistedModel } from 'loopback-typescript-core/dist/models/persisted.model';
import { injectable, inject } from 'inversify';
import { CommonModel, Property, Relation } from 'loopback-typescript-core/dist/models/decorators';

@injectable()
export class SampleDao extends PersistedDao
{
	static tableName = 'sample'
	static modelName = 'Sample'

	ModelClass = SampleModel
	greet() {
		return `greeting...`
	}
	
}

@injectable()
@CommonModel({
	name: SampleDao.modelName,
	dao: SampleDao,
	dataSource: 'plnbbmongodb',
	settings: {
		plural: 'samples',
		postgresql: {
			schema: "plnbbdb",
			table: "account"
		},

		mixins: {}
	}
})
export class SampleModel extends PersistedModel
{
	@Property('string')
	name:string

	@Property('string')
	address:string

	@Property('date')
    description:Date
}