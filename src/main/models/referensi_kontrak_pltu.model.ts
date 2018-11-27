import { PersistedDao, PersistedModel } from 'loopback-typescript-core/dist/models/persisted.model';
import { injectable,inject } from 'inversify';
import { CommonModel, Property, Relation, Remote } from 'loopback-typescript-core/dist/models/decorators';

@injectable()
export class ReferensiKontrakPltuDao extends PersistedDao
{
	static tableName = 'referensi_kontrak_pltu'
	static modelName = 'ReferensiKontrakPltu'

	ModelClass = ReferensiKontrakPltuModel
}

@injectable()
@CommonModel({
	name: ReferensiKontrakPltuDao.modelName,
	dao: ReferensiKontrakPltuDao,
	dataSource: 'plnbbmongodb',
	settings: {
		plural: 'referensi_kontrak_pltu',
		postgresql: {
			schema: "plnbbdb",
			table: ReferensiKontrakPltuDao.tableName
		},
		idInjection:true,
		forceId:false,
		mixins: {}
	}
})
export class ReferensiKontrakPltuModel extends PersistedModel
{	

	@Property('Number')
    id:Number
    
	@Property('String')
	referensi_kontrak_id:String

    @Property('String')
    pltu_id:String
    
   

}

