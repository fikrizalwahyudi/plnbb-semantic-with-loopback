/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { RoleMapping } from '../../models/RoleMapping';
import { Role } from '../../models/Role';
import { Sample } from '../../models/Sample';
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
import { JenisTambang } from '../../models/JenisTambang';
import { LoadingRealisasiKirim } from '../../models/LoadingRealisasiKirim';
import { Locations } from '../../models/Locations';
import { SumberTambang } from '../../models/SumberTambang';
import { Tambang } from '../../models/Tambang';
import { UnloadingRealisasiKirim } from '../../models/UnloadingRealisasiKirim';
import { ReferensiKontrak } from '../../models/ReferensiKontrak';
import { ReferensiKontrakMitra } from '../../models/ReferensiKontrakMitra';
import { ReferensiKontrakPltu } from '../../models/ReferensiKontrakPltu';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    User: User,
    RoleMapping: RoleMapping,
    Role: Role,
    Sample: Sample,
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
    JenisTambang: JenisTambang,
    LoadingRealisasiKirim: LoadingRealisasiKirim,
    Locations: Locations,
    SumberTambang: SumberTambang,
    Tambang: Tambang,
    UnloadingRealisasiKirim: UnloadingRealisasiKirim,
    ReferensiKontrak: ReferensiKontrak,
    ReferensiKontrakMitra: ReferensiKontrakMitra,
    ReferensiKontrakPltu: ReferensiKontrakPltu,
    
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
