/* tslint:disable */
import { Injectable } from '@angular/core';
import { Sample } from '../../models/Sample';
import { Users } from '../../models/Users';
import { Mitra } from '../../models/Mitra';
import { Modes } from '../../models/Modes';
import { PhoneContacts } from '../../models/PhoneContacts';
import { Pltu } from '../../models/Pltu';
import { RealisasiKirim } from '../../models/RealisasiKirim';
import { RencanaPasokan } from '../../models/RencanaPasokan';
import { RequestShipping } from '../../models/RequestShipping';
import { Roles } from '../../models/Roles';
import { Tokens } from '../../models/Tokens';
import { Types } from '../../models/Types';
import { UserMitra } from '../../models/UserMitra';
import { JenisTambang } from '../../models/JenisTambang';
import { LoadingRealisasiKirim } from '../../models/LoadingRealisasiKirim';
import { Locations } from '../../models/Locations';
import { SumberTambang } from '../../models/SumberTambang';
import { Tambang } from '../../models/Tambang';
import { UnloadingRealisasiKirim } from '../../models/UnloadingRealisasiKirim';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    Sample: Sample,
    Users: Users,
    Mitra: Mitra,
    Modes: Modes,
    PhoneContacts: PhoneContacts,
    Pltu: Pltu,
    RealisasiKirim: RealisasiKirim,
    RencanaPasokan: RencanaPasokan,
    RequestShipping: RequestShipping,
    Roles: Roles,
    Tokens: Tokens,
    Types: Types,
    UserMitra: UserMitra,
    JenisTambang: JenisTambang,
    LoadingRealisasiKirim: LoadingRealisasiKirim,
    Locations: Locations,
    SumberTambang: SumberTambang,
    Tambang: Tambang,
    UnloadingRealisasiKirim: UnloadingRealisasiKirim,
    
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
