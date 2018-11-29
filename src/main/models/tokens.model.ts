import { PersistedDao, PersistedModel } from 'loopback-typescript-core/dist/models/persisted.model';
import { injectable,inject } from 'inversify';
import { CommonModel, Property, Relation, Remote } from 'loopback-typescript-core/dist/models/decorators';

@injectable()
export class TokensDao extends PersistedDao
{
	static tableName = 'tokens'
	static modelName = 'Tokens'

	ModelClass = TokensModel
}

@injectable()
@CommonModel({
	name: TokensDao.modelName,
	dao: TokensDao,
	dataSource: 'plnbbmongodb',
	settings: {
		plural: 'tokens',
		postgresql: {
			schema: "plnbbdb",
			table: TokensDao.tableName
		},
		idInjection:true,
		forceId:false,
		mixins: {}
	}
})
export class TokensModel extends PersistedModel
{	

	id:any

	@Property('string')
	token:string

	@Property('string')
	userId:string

}