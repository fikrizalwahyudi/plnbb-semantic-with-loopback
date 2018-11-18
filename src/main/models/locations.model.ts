import { PersistedDao, PersistedModel } from 'loopback-typescript-core/dist/models/persisted.model';
import { injectable,inject } from 'inversify';
import { CommonModel, Property, Relation } from 'loopback-typescript-core/dist/models/decorators';

@injectable()
export class LocationsDao extends PersistedDao
{
	static tableName = 'locations'
	static modelName = 'Locations'

	ModelClass = LocationsModel

	greet() {
		return `greeting...`
	}
}

@injectable()
@CommonModel({
	name: LocationsDao.modelName,
	dao: LocationsDao,
	
	dataSource: 'mypostgresdb',
	settings: {
		plural: 'locations',
		postgresql: {
			schema: "plnbbdb",
			table: LocationsDao.tableName,
			
		},
	 
			idInjection: true,
			forceId: true,
			options: {
				validateUpsert: true
			  },
		
		 
		mixins: {}
	}
})
export class LocationsModel extends PersistedModel
{
	@Property('Number')
  	id:Number

	@Property('string')
	name:string

	@Property('Number')
	status:Number

}