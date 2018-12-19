import { PersistedDao, PersistedModel } from 'loopback-typescript-core/dist/models/persisted.model';
import { injectable, inject } from 'inversify';
import { CommonModel, Property, Relation, Remote } from 'loopback-typescript-core/dist/models/decorators';

@injectable()
export class ReferensiKontrakJettyDao extends PersistedDao {
	static tableName = 'referensi_kontrak_jetty'
	static modelName = 'ReferensiKontrakJetty'

	ModelClass = ReferensiKontrakJettyModel
}

@injectable()
@CommonModel({
	name: ReferensiKontrakJettyDao.modelName,
	dao: ReferensiKontrakJettyDao,
	dataSource: 'plnbbmongodb',
	settings: {
		plural: 'referensi_kontrak_jetty',
		postgresql: {
			schema: "plnbbdb",
			table: ReferensiKontrakJettyDao.tableName
		},
		idInjection: true,
		forceId: false,
		mixins: {
			ObjectidType: {
				properties: ["jettyId", "referensiKontrakId"]
			}
		}
	}
})
export class ReferensiKontrakJettyModel extends PersistedModel {

	id: any

	@Property('string')
	referensiKontrakId: string

	@Property('string')
	jettyId: string

	@Relation("belongsTo", "Jetty", "jettyId")
	jetty

	@Relation("belongsTo", "ReferensiKontrak", "referensiKontrakId")
	referensiKontrak

}

