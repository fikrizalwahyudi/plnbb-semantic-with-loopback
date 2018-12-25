/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { RoleMapping } from '../../models/RoleMapping';
import { Role } from '../../models/Role';
import { Pltu } from '../../models/Pltu';
import { Mitra } from '../../models/Mitra';
import { LoadingRealisasiKirim } from '../../models/LoadingRealisasiKirim';
import { Locations } from '../../models/Locations';
import { Tambang } from '../../models/Tambang';
import { ReferensiKontrakJetty } from '../../models/ReferensiKontrakJetty';
import { ReferensiKontrakMitra } from '../../models/ReferensiKontrakMitra';
import { ReferensiKontrakPltu } from '../../models/ReferensiKontrakPltu';
import { ReferensiKontrakTambang } from '../../models/ReferensiKontrakTambang';
import { ReferensiKontrak } from '../../models/ReferensiKontrak';
import { MitraKesanggupanTambang } from '../../models/MitraKesanggupanTambang';
import { MitraKesanggupan } from '../../models/MitraKesanggupan';
import { PlnRealisasi } from '../../models/PlnRealisasi';
import { Jetty } from '../../models/Jetty';
import { PlnRencana } from '../../models/PlnRencana';
import { PlnRencanaPasokan } from '../../models/PlnRencanaPasokan';
import { MitraShippingOrder } from '../../models/MitraShippingOrder';
import { MitraShippingInstructionRequest } from '../../models/MitraShippingInstructionRequest';
import { ShippingInstruction } from '../../models/ShippingInstruction';
import { ShippingInstructionRevision } from '../../models/ShippingInstructionRevision';
import { Shipping } from '../../models/Shipping';
import { ShippingLoading } from '../../models/ShippingLoading';
import { Document } from '../../models/Document';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    User: User,
    RoleMapping: RoleMapping,
    Role: Role,
    Pltu: Pltu,
    Mitra: Mitra,
    LoadingRealisasiKirim: LoadingRealisasiKirim,
    Locations: Locations,
    Tambang: Tambang,
    ReferensiKontrakJetty: ReferensiKontrakJetty,
    ReferensiKontrakMitra: ReferensiKontrakMitra,
    ReferensiKontrakPltu: ReferensiKontrakPltu,
    ReferensiKontrakTambang: ReferensiKontrakTambang,
    ReferensiKontrak: ReferensiKontrak,
    MitraKesanggupanTambang: MitraKesanggupanTambang,
    MitraKesanggupan: MitraKesanggupan,
    PlnRealisasi: PlnRealisasi,
    Jetty: Jetty,
    PlnRencana: PlnRencana,
    PlnRencanaPasokan: PlnRencanaPasokan,
    MitraShippingOrder: MitraShippingOrder,
    MitraShippingInstructionRequest: MitraShippingInstructionRequest,
    ShippingInstruction: ShippingInstruction,
    ShippingInstructionRevision: ShippingInstructionRevision,
    Shipping: Shipping,
    ShippingLoading: ShippingLoading,
    Document: Document,
    
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
