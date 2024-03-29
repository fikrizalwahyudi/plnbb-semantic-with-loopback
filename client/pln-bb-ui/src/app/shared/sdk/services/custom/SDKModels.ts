/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { RoleMapping } from '../../models/RoleMapping';
import { Role } from '../../models/Role';
import { PlnRencana } from '../../models/PlnRencana';
import { Shipping } from '../../models/Shipping';
import { ShippingInstruction } from '../../models/ShippingInstruction';
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
import { PlnRencanaPasokan } from '../../models/PlnRencanaPasokan';
import { MitraShippingOrder } from '../../models/MitraShippingOrder';
import { MitraShippingInstructionRequest } from '../../models/MitraShippingInstructionRequest';
import { ShippingInstructionRevision } from '../../models/ShippingInstructionRevision';
import { ShippingLoading } from '../../models/ShippingLoading';
import { Document } from '../../models/Document';
import { ShippingUnloading } from '../../models/ShippingUnloading';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    User: User,
    RoleMapping: RoleMapping,
    Role: Role,
    PlnRencana: PlnRencana,
    Shipping: Shipping,
    ShippingInstruction: ShippingInstruction,
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
    PlnRencanaPasokan: PlnRencanaPasokan,
    MitraShippingOrder: MitraShippingOrder,
    MitraShippingInstructionRequest: MitraShippingInstructionRequest,
    ShippingInstructionRevision: ShippingInstructionRevision,
    ShippingLoading: ShippingLoading,
    Document: Document,
    ShippingUnloading: ShippingUnloading,
    
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
