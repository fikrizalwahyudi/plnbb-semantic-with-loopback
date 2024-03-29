import { injectable } from "inversify";
import { Module, CommonModule } from 'loopback-typescript-core';
import { MitraModel } from './models/mitra.model';
import { PltuModel } from './models/pltu.model';
import { LoadingRealisasiKirimModel } from './models/loading_realisasi_kirim.model';
import { LocationsModel } from './models/locations.model';
import { TambangModel } from './models/tambang.model';
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
import { PrintPdfMiddleware } from './middleware/print-pdf.middleware';
import { PlnRencanaPasokanModel } from "./models/pln_rencana_pasokan.model";
import { MitraShippingOrderModel } from './models/mitra_shipping_order.model';
import { ReferensiKontrakJettyModel } from './models/referensi_kontrak_jetty.model';
import { MitraShippingInstructionRequestModel } from './models/mitra_shipping_instruction_request.model';
import { ShippingInstructionRevisionModel } from './models/shipping_instruction_revision.model';
import { SignPdfMiddleware } from "./middleware/sign-pdf.middleware";
import { DownloadPdfMiddleware } from './middleware/download-pdf.middleware';
import { ShippingModel } from "./models/shipping.model";
import { DocumentModel } from "./models/document.model";
import { ShippingLoadingModel } from './models/shipping_loading.model';
import { ShippingUnloadingModel } from './models/shipping_unloading.model';

@injectable()
@CommonModule({
	
	middleware: [
		CreateRoleMiddleware,
		DeleteRoleMiddleware,
		PatchRoleMiddleware,
		PrintPdfMiddleware,
		SignPdfMiddleware,
		DownloadPdfMiddleware
	],

	models: [
		PlnRencanaModel,
		ShippingModel,
		ShippingInstructionModel,
		PltuModel,
		MitraModel,
		LoadingRealisasiKirimModel,
		LocationsModel,
		TambangModel,
		ReferensiKontrakJettyModel,
		ReferensiKontrakMitraModel,
		ReferensiKontrakPltuModel,
		ReferensiKontrakTambangModel,
		ReferensiKontrakModel,
		MitraKesanggupanTambangModel,
		MitraKesanggupanModel,
		PlnRealisasiModel,
		JettyModel,
		// PlnRencanaModel,
		PlnRencanaPasokanModel,
		MitraShippingOrderModel,
		MitraShippingInstructionRequestModel,
		// ShippingInstructionModel,
		ShippingInstructionRevisionModel,
		// ShippingModel,
		ShippingLoadingModel,
		DocumentModel,
		ShippingUnloadingModel
	]
})
export class MainModule extends Module {

}