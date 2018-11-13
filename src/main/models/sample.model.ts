import { PersistedDao, PersistedModel } from 'loopback-typescript-core/dist/models/persisted.model';
<<<<<<< HEAD
import { injectable } from 'inversify';
=======
import { injectable,inject } from 'inversify';
>>>>>>> master
import { CommonModel, Property, Relation } from 'loopback-typescript-core/dist/models/decorators';

@injectable()
export class SampleDao extends PersistedDao
{
	static tableName = 'sample'
	static modelName = 'Sample'

	ModelClass = SampleModel
<<<<<<< HEAD
=======

	greet() {
		return `greeting...`
	}
>>>>>>> master
}

@injectable()
@CommonModel({
	name: SampleDao.modelName,
	dao: SampleDao,
<<<<<<< HEAD
	dataSource: 'db',
	settings: {
		plural: 'samples',
		mongodb: {
			collection: SampleDao.tableName
=======
	dataSource: 'mypostgresdb',
	settings: {
		plural: 'samples',
		postgresql: {
			schema: "public",
			table: "account"
>>>>>>> master
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
<<<<<<< HEAD
    description:Date
=======
	description:Date

>>>>>>> master
}