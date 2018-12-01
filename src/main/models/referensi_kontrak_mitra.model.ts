import { PersistedDao, PersistedModel } from 'loopback-typescript-core/dist/models/persisted.model';
import { injectable,inject } from 'inversify';
import { CommonModel, Property, Relation, Remote } from 'loopback-typescript-core/dist/models/decorators';

@injectable()
export class ReferensiKontrakMitraDao extends PersistedDao
{
	static tableName = 'referensi_kontrak_mitra'
	static modelName = 'ReferensiKontrakMitra'

	ModelClass = ReferensiKontrakMitraModel
}

@injectable()
@CommonModel({
	name: ReferensiKontrakMitraDao.modelName,
	dao: ReferensiKontrakMitraDao,
	dataSource: 'plnbbmongodb',
	settings: {
		plural: 'referensi_kontrak_mitra',
		postgresql: {
			schema: "plnbbdb",
			table: ReferensiKontrakMitraDao.tableName
		},
		idInjection:true,
		forceId:false,
		mixins: {}
	}
})
export class ReferensiKontrakMitraModel extends PersistedModel
{	

    id:any
    
	@Property('string')
	referensiKontrakId:string

    @Property('string')
    mitraId:string
    
   

}

