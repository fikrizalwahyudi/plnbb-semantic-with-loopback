import { PersistedDao, PersistedModel } from 'loopback-typescript-core/dist/models/persisted.model';
import { injectable,inject } from 'inversify';
import { CommonModel, Property, Relation } from 'loopback-typescript-core/dist/models/decorators';

@injectable()
export class SumberTambangDao extends PersistedDao
{
	static tableName = 'sumber_tambang'
	static modelName = 'SumberTambang'

	ModelClass = SumberTambangModel

}

@injectable()
@CommonModel({
	name: SumberTambangDao.modelName,
	dao: SumberTambangDao,
	dataSource: 'mypostgresdb',
	settings: {
		plural: 'sumber_tambang',
		postgresql: {
			schema: "public",
			table: SumberTambangDao.tableName
		},

		mixins: {}
	}
})
export class SumberTambangModel extends PersistedModel
{
	@Property('Number')
	id:Number

	@Property('number')
	realisasi_kirim_id:number

	@Property('number')
	tambang_id:number

	@Property('number')
	ammount:number

	 

}