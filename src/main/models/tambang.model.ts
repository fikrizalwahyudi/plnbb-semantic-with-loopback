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
	@Property('Number')
	id:Number

	@Property('string')
	name:string

	@Property('string')
	sertifikat:string

	@Property('String')
	jenis_tambang_id:String

	@Property('String')
	location_id:String

	@Property('Date')
	tanggal_berlaku:Date

	
	@Property('Date')
	tanggal_habis:Date

}