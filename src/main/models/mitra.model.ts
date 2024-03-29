import { PersistedDao, PersistedModel } from 'loopback-typescript-core/dist/models/persisted.model';
import { injectable,inject } from 'inversify';
import { CommonModel, Property, Relation, Remote } from 'loopback-typescript-core/dist/models/decorators';

@injectable()
export class MitraDao extends PersistedDao {
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
		idInjection:true,
		forceId:false,
		mixins: {
			ObjectidType: {
				properties: ["userId"]
			}
		}
	}
})
export class MitraModel extends PersistedModel
{	

	id:any

	@Property('string')
	code:string

	@Property('string')
	name:string

	@Property('string')
	address:string

	@Property('string')
	npwp:string

	@Property('number')
	status:number

	@Property('string')
	userId:string

	@Relation("belongsTo", "User", "userId")
	user
}