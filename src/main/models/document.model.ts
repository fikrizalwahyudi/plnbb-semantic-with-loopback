import { PersistedDao, PersistedModel } from 'loopback-typescript-core/dist/models/persisted.model';
import { injectable,inject } from 'inversify';
import { CommonModel, Property, Relation, Remote } from 'loopback-typescript-core/dist/models/decorators';
import { JettyDao, JettyModel } from './jetty.model';

@injectable()
export class DocumentDao extends PersistedDao
{
	static tableName = 'document'
	static modelName = 'Document'

	ModelClass = DocumentModel
}

@injectable()
@CommonModel({
	name: DocumentDao.modelName,
	base: 'Model',
	dao: DocumentDao,
	dataSource: 'plnbbfile',
	settings: {
		plural: 'documents',
		idInjection:true,
		forceId:false,
		mixins: {}
	}
})
export class DocumentModel extends PersistedModel
{	
	
}