import { PersistedDao, PersistedModel } from 'loopback-typescript-core/dist/models/persisted.model';
import { injectable,inject } from 'inversify';
import { CommonModel, Property, Relation } from 'loopback-typescript-core/dist/models/decorators';

@injectable()
export class TambangDao extends PersistedDao
{
	static tableName = 'tambang'
	static modelName = 'Tambang'

	ModelClass = TambangModel

}

@injectable()
@CommonModel({
	name: TambangDao.modelName,
	dao: TambangDao,
	dataSource: 'plnbbmongodb',
	settings: {
		plural: 'tambang',
		postgresql: {
			schema: "public",
			table: TambangDao.tableName
		},

		mixins: {}
	}
})
export class TambangModel extends PersistedModel
{

	id:any

	@Property('string')
	name:string

	@Property('string')
	sertifikat:string

	@Property('string')
	jenisTambangId:string

	@Property('string')
	locationId:string

	@Property('date')
	tanggalBerlaku:Date

	
	@Property('date')
	tanggalHabis:Date

}