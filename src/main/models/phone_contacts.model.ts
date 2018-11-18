import { PersistedDao, PersistedModel } from 'loopback-typescript-core/dist/models/persisted.model';
import { injectable,inject } from 'inversify';
import { CommonModel, Property, Relation, Remote } from 'loopback-typescript-core/dist/models/decorators';

@injectable()
export class PhoneContactsDao extends PersistedDao
{
	static tableName = 'phone_contacts'
	static modelName = 'PhoneContacts'

	ModelClass = PhoneContactsModel
}

@injectable()
@CommonModel({
	name: PhoneContactsDao.modelName,
	dao: PhoneContactsDao,
	dataSource: 'mypostgresdb',
	settings: {
		plural: 'phone_contacts',
		postgresql: {
			schema: "plnbbdb",
			table: PhoneContactsDao.tableName
		},
		idInjection:true,
		forceId:false,
		mixins: {}
	}
})
export class PhoneContactsModel extends PersistedModel
{	

	@Property('Number')
	id:Number

	@Property('Number')
	owner_id:Number

	@Property('String')
	owner_name:String

	@Property('Number')
	phone_number:Number

}