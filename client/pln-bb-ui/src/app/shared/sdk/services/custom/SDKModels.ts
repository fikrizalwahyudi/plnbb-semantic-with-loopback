/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { RoleMapping } from '../../models/RoleMapping';
import { Role } from '../../models/Role';
import { Mitra } from '../../models/Mitra';
import { Pltu } from '../../models/Pltu';
import { LoadingRealisasiKirim } from '../../models/LoadingRealisasiKirim';
import { Locations } from '../../models/Locations';
import { Tambang } from '../../models/Tambang';
import { ReferensiKontrak } from '../../models/ReferensiKontrak';
import { ReferensiKontrakMitra } from '../../models/ReferensiKontrakMitra';
import { ReferensiKontrakPltu } from '../../models/ReferensiKontrakPltu';
import { ReferensiKontrakTambang } from '../../models/ReferensiKontrakTambang';
import { MitraKesanggupan } from '../../models/MitraKesanggupan';
import { MitraKesanggupanTambang } from '../../models/MitraKesanggupanTambang';
import { PlnRealisasi } from '../../models/PlnRealisasi';
import { Jetty } from '../../models/Jetty';
import { ReferensiKontrakJetty } from '../../models/ReferensiKontrakJetty';
import { PlnRencana } from '../../models/PlnRencana';
import { PlnRencanaPasokan } from '../../models/PlnRencanaPasokan';
import { MitraShippingOrder } from '../../models/MitraShippingOrder';
import { MitraShippingInstructionRequest } from '../../models/MitraShippingInstructionRequest';
import { ShippingInstruction } from '../../models/ShippingInstruction';
import { ShippingInstructionRevision } from '../../models/ShippingInstructionRevision';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    User: User,
    RoleMapping: RoleMapping,
    Role: Role,
    Mitra: Mitra,
    Pltu: Pltu,
    LoadingRealisasiKirim: LoadingRealisasiKirim,
    Locations: Locations,
    Tambang: Tambang,
    ReferensiKontrak: ReferensiKontrak,
    ReferensiKontrakMitra: ReferensiKontrakMitra,
    ReferensiKontrakPltu: ReferensiKontrakPltu,
    ReferensiKontrakTambang: ReferensiKontrakTambang,
    MitraKesanggupan: MitraKesanggupan,
    MitraKesanggupanTambang: MitraKesanggupanTambang,
    PlnRealisasi: PlnRealisasi,
    Jetty: Jetty,
    ReferensiKontrakJetty: ReferensiKontrakJetty,
    PlnRencana: PlnRencana,
    PlnRencanaPasokan: PlnRencanaPasokan,
    MitraShippingOrder: MitraShippingOrder,
    MitraShippingInstructionRequest: MitraShippingInstructionRequest,
    ShippingInstruction: ShippingInstruction,
    ShippingInstructionRevision: ShippingInstructionRevision,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
