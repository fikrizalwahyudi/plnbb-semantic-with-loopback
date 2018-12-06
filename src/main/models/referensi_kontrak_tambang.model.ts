import { PersistedDao, PersistedModel } from 'loopback-typescript-core/dist/models/persisted.model';
import { injectable, inject } from 'inversify';
import { CommonModel, Property, Relation, Remote } from 'loopback-typescript-core/dist/models/decorators';

@injectable()
export class ReferensiKontrakTambangDao extends PersistedDao {
	static tableName = 'referensi_kontrak_tambang'
	static modelName = 'ReferensiKontrakTambang'

	ModelClass = ReferensiKontrakTambangModel
}

@injectable()
@CommonModel({
	name: ReferensiKontrakTambangDao.modelName,
	dao: ReferensiKontrakTambangDao,
	dataSource: 'plnbbmongodb',
	settings: {
		plural: 'referensi_kontrak_tambang',
		postgresql: {
			schema: "plnbbdb",
			table: ReferensiKontrakTambangDao.tableName
		},
		idInjection: true,
		forceId: false,
		mixins: {
			ObjectidType: {
				properties: ["tambangId", "referensiKontrakId"]
			}
		}
	}
})
export class ReferensiKontrakTambangModel extends PersistedModel {

	id: any

	@Property('string')
	referensiKontrakId: string

	@Property('string')
	tambangId: string

}

