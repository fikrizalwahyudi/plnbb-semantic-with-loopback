import { PersistedDao, PersistedModel } from 'loopback-typescript-core/dist/models/persisted.model';
import { injectable, inject } from 'inversify';
import { CommonModel, Property, Relation, Remote } from 'loopback-typescript-core/dist/models/decorators';

@injectable()
export class ReferensiKontrakPltuDao extends PersistedDao {
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
		idInjection: true,
		forceId: false,
		mixins: {
			ObjectidType: {
				properties: ["pltuId", "referensiKontrakId"]
			}
		}
	}
})
export class ReferensiKontrakPltuModel extends PersistedModel {

	id: any

	@Property('any')
	referensiKontrakId: any

	@Property('any')
	pltuId: any

	@Relation("belongsTo", "Pltu", "pltuId")
	pltu

	@Relation("belongsTo", "ReferensiKontrak", "referensiKontrakId")
	referensiKontrak

}

