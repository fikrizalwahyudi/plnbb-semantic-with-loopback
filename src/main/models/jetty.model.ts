import { PersistedDao, PersistedModel } from 'loopback-typescript-core/dist/models/persisted.model';
import { injectable, inject } from 'inversify';
import { CommonModel, Property, Relation, Remote } from 'loopback-typescript-core/dist/models/decorators';

@injectable()
export class JettyDao extends PersistedDao {
  static tableName = 'jetty'
  static modelName = 'Jetty'

  ModelClass = JettyModel
}

@injectable()
@CommonModel({
  name: JettyDao.modelName,
  dao: JettyDao,
  dataSource: 'plnbbmongodb',
  settings: {
    plural: 'jetty',
    postgresql: {
      schema: "plnbbdb",
      table: JettyDao.tableName
    },
    idInjection: true,
    forceId: false,
    mixins: {}
  }
})
export class JettyModel extends PersistedModel {

  id: any

  @Property('string')
  namaPelabuhan: string

  @Property('string')
  kode: string

  @Property('string')
  provinsi: string

  @Property('string')
  kota: string

  @Property('string')
  koordinat: string
}