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
    idInjection: true,
    forceId: false,
    mixins: {}
  }
})
export class JettyModel extends PersistedModel {

  id: any

  @Property('string')
  name: string

  @Property('string')
  code: string

  @Property('string')
  address: string

  @Property('string')
  province: string

  @Property('string')
  city: string

  @Property('string')
  latitude: string

  @Property('string')
  longitude: string
}