import { PersistedDao, PersistedModel } from 'loopback-typescript-core/dist/models/persisted.model';
import { injectable, inject } from 'inversify';
import { CommonModel, Property, Relation } from 'loopback-typescript-core/dist/models/decorators';

@injectable()
export class LocationsDao extends PersistedDao {
	static tableName = 'locations'
	static modelName = 'Locations'

	ModelClass = LocationsModel
}

@injectable()
@CommonModel({
	name: LocationsDao.modelName,
	dao: LocationsDao,

	dataSource: 'plnbbmongodb',
	settings: {
		plural: 'locations',
		idInjection: true,
		forceId: true,
		options: {
			validateUpsert: true
		},
		mixins: {}
	}
})
export class LocationsModel extends PersistedModel {
	id: any

	@Property('string')
	name: string

	@Property('number')
	status: number

}