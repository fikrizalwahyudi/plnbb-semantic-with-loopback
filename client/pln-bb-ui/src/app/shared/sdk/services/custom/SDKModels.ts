/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { RoleMapping } from '../../models/RoleMapping';
import { Role } from '../../models/Role';
import { Sample } from '../../models/Sample';
import { Users } from '../../models/Users';
import { Mitra } from '../../models/Mitra';
import { Modes } from '../../models/Modes';
import { PhoneContacts } from '../../models/PhoneContacts';
import { Pltu } from '../../models/Pltu';
import { RealisasiKirim } from '../../models/RealisasiKirim';
import { RencanaPasokan } from '../../models/RencanaPasokan';
import { RequestShipping } from '../../models/RequestShipping';
import { Tokens } from '../../models/Tokens';
import { Types } from '../../models/Types';
import { UserMitra } from '../../models/UserMitra';
import { LoadingRealisasiKirim } from '../../models/LoadingRealisasiKirim';
import { Locations } from '../../models/Locations';
import { SumberTambang } from '../../models/SumberTambang';
import { Tambang } from '../../models/Tambang';
import { UnloadingRealisasiKirim } from '../../models/UnloadingRealisasiKirim';
import { ReferensiKontrak } from '../../models/ReferensiKontrak';
import { ReferensiKontrakMitra } from '../../models/ReferensiKontrakMitra';
import { ReferensiKontrakPltu } from '../../models/ReferensiKontrakPltu';
import { ReferensiKontrakTambang } from '../../models/ReferensiKontrakTambang';
import { MitraKesanggupan } from '../../models/MitraKesanggupan';
import { MitraKesanggupanTambang } from '../../models/MitraKesanggupanTambang';
import { PlnRencana } from '../../models/PlnRencana';
import { PlnRealisasi } from '../../models/PlnRealisasi';
import { ShippingInstruction } from '../../models/ShippingInstruction';
import { Jetty } from '../../models/Jetty';
import { PlnRencanaPasokan } from '../../models/PlnRencanaPasokan';
import { MitraShippingOrder } from '../../models/MitraShippingOrder';
import { ReferensiKontrakJetty } from '../../models/ReferensiKontrakJetty';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    User: User,
    RoleMapping: RoleMapping,
    Role: Role,
    Sample: Sample,
    Users: Users,
    Mitra: Mitra,
    Modes: Modes,
    PhoneContacts: PhoneContacts,
    Pltu: Pltu,
    RealisasiKirim: RealisasiKirim,
    RencanaPasokan: RencanaPasokan,
    RequestShipping: RequestShipping,
    Tokens: Tokens,
    Types: Types,
    UserMitra: UserMitra,
    LoadingRealisasiKirim: LoadingRealisasiKirim,
    Locations: Locations,
    SumberTambang: SumberTambang,
    Tambang: Tambang,
    UnloadingRealisasiKirim: UnloadingRealisasiKirim,
    ReferensiKontrak: ReferensiKontrak,
    ReferensiKontrakMitra: ReferensiKontrakMitra,
    ReferensiKontrakPltu: ReferensiKontrakPltu,
    ReferensiKontrakTambang: ReferensiKontrakTambang,
    MitraKesanggupan: MitraKesanggupan,
    MitraKesanggupanTambang: MitraKesanggupanTambang,
    PlnRencana: PlnRencana,
    PlnRealisasi: PlnRealisasi,
    ShippingInstruction: ShippingInstruction,
    Jetty: Jetty,
    PlnRencanaPasokan: PlnRencanaPasokan,
    MitraShippingOrder: MitraShippingOrder,
    ReferensiKontrakJetty: ReferensiKontrakJetty,
    
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
