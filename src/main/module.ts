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
import { LoadingRealisasiKirimModel } from './models/loading_realisasi_kirim.model';
import { LocationsModel } from './models/locations.model';
import { SumberTambangModel } from './models/sumber_tambang.model';
import { TambangModel } from './models/tambang.model';
import { UnloadingRealisasiKirimModel } from './models/unloading_realisasi_kirim.model';
import { ReferensiKontrakModel } from './models/referensi_kontrak.model';
import { ReferensiKontrakMitraModel } from './models/referensi_kontrak_mitra.model';
import { ReferensiKontrakPltuModel } from './models/referensi_kontrak_pltu.model';
import { DeleteRoleMiddleware } from './middleware/delete-role.middleware';
import { CreateRoleMiddleware } from './middleware/create-role.middleware';
import { PatchRoleMiddleware } from './middleware/patch-role.middleware';
import { ReferensiKontrakTambangModel } from "./models/referensi_kontrak_tambang.model";
import { MitraKesanggupanModel } from "./models/mitra_kesanggupan.model";
import { MitraKesanggupanTambangModel } from "./models/mitra_kesanggupan_tambang.model";
import { PlnRencanaModel } from './models/pln_rencana.model';
import { PlnRealisasiModel } from "./models/pln_realisasi.model";
import { ShippingInstructionModel } from './models/shipping_instruction.model';
import { JettyModel } from './models/jetty.model';
import { PlnRencanaPasokanModel } from "./models/pln_rencana_pasokan.model";
import { MitraShippingOrderModel } from './models/mitra_shipping_order.model';

@injectable()
@CommonModule({
	middleware: [
		CreateRoleMiddleware,
		DeleteRoleMiddleware,
		PatchRoleMiddleware
	],

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
		//RolesModel,
		TokensModel,
		TypesModel,
		UserMitraModel,
		LoadingRealisasiKirimModel,
		LocationsModel,
		SumberTambangModel,
		TambangModel,
		UnloadingRealisasiKirimModel,
		ReferensiKontrakModel,
		ReferensiKontrakMitraModel,
		ReferensiKontrakPltuModel,
		ReferensiKontrakTambangModel,
		MitraKesanggupanModel,
		MitraKesanggupanTambangModel,
		PlnRencanaModel,
		PlnRealisasiModel,
		ShippingInstructionModel,
		JettyModel,
		PlnRencanaPasokanModel,
		MitraShippingOrderModel
	]
})
export class SampleModule extends Module {

}