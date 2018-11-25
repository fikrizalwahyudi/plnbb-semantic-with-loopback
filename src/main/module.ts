import { injectable } from "inversify";
import { Module, CommonModule } from 'loopback-typescript-core';
import { SampleModel } from './models/sample.model';
import { UsersModel } from './models/users.model';
import { MitraModel } from './models/mitra.model';
import { ModesModel } from './models/modes.model';
import { PhoneContactsModel } from './models/phone_contacts.model';
import { PltuModel } from './models/pltu.model';
import { RealisasiKirimModel } from './models/realisasi_kirim.model';
import { RencanaPasokanModel } from './models/rencana_pasokan.model';
import { RequestShippingModel } from './models/request_shipping.model';
import { RolesModel } from './models/roles.model';
import { TokensModel } from './models/tokens.model';
import { TypesModel } from './models/types.model';
import { UserMitraModel } from './models/user_mitra.model';
import { JenisTambangModel } from './models/jenis_tambang.model';
import { LoadingRealisasiKirimModel } from './models/loading_realisasi_kirim.model';
import { LocationsModel } from './models/locations.model';
import { SumberTambangModel } from './models/sumber_tambang.model';
import { TambangModel } from './models/tambang.model';
import { UnloadingRealisasiKirimModel } from './models/unloading_realisasi_kirim.model';
import { ReferensiKontrakModel } from './models/referensi_kontrak.model';

@injectable()
@CommonModule({
	models: [
		SampleModel,
		UsersModel,
		MitraModel,
		ModesModel,
		PhoneContactsModel,
		PltuModel,
		RealisasiKirimModel,
		RencanaPasokanModel,
		RequestShippingModel,
		RolesModel,
		TokensModel,
		TypesModel,
		UserMitraModel,
		JenisTambangModel,
		LoadingRealisasiKirimModel,
		LocationsModel,
		SumberTambangModel,
		TambangModel,
		UnloadingRealisasiKirimModel,
		ReferensiKontrakModel
	]
})
export class SampleModule extends Module
{
	
}