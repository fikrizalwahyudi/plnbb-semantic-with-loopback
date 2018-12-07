/* tslint:disable */
/**
* @module SDKModule
* @author Jonathan Casarrubias <t:@johncasarrubias> <gh:jonathan-casarrubias>
* @license MIT 2016 Jonathan Casarrubias
* @version 2.1.0
* @description
* The SDKModule is a generated Software Development Kit automatically built by
* the LoopBack SDK Builder open source module.
*
* The SDKModule provides Angular 2 >= RC.5 support, which means that NgModules
* can import this Software Development Kit as follows:
*
*
* APP Route Module Context
* ============================================================================
* import { NgModule }       from '@angular/core';
* import { BrowserModule }  from '@angular/platform-browser';
* // App Root 
* import { AppComponent }   from './app.component';
* // Feature Modules
* import { SDK[Browser|Node|Native]Module } from './shared/sdk/sdk.module';
* // Import Routing
* import { routing }        from './app.routing';
* @NgModule({
*  imports: [
*    BrowserModule,
*    routing,
*    SDK[Browser|Node|Native]Module.forRoot()
*  ],
*  declarations: [ AppComponent ],
*  bootstrap:    [ AppComponent ]
* })
* export class AppModule { }
*
**/
import { ErrorHandler } from './services/core/error.service';
import { LoopBackAuth } from './services/core/auth.service';
import { LoggerService } from './services/custom/logger.service';
import { SDKModels } from './services/custom/SDKModels';
import { InternalStorage, SDKStorage } from './storage/storage.swaps';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CookieBrowser } from './storage/cookie.browser';
import { StorageBrowser } from './storage/storage.browser';
import { SocketBrowser } from './sockets/socket.browser';
import { SocketDriver } from './sockets/socket.driver';
import { SocketConnection } from './sockets/socket.connections';
import { RealTime } from './services/core/real.time';
import { UserApi } from './services/custom/User';
import { RoleMappingApi } from './services/custom/RoleMapping';
import { RoleApi } from './services/custom/Role';
import { SampleApi } from './services/custom/Sample';
import { UsersApi } from './services/custom/Users';
import { MitraApi } from './services/custom/Mitra';
import { ModesApi } from './services/custom/Modes';
import { PhoneContactsApi } from './services/custom/PhoneContacts';
import { PltuApi } from './services/custom/Pltu';
import { RealisasiKirimApi } from './services/custom/RealisasiKirim';
import { RencanaPasokanApi } from './services/custom/RencanaPasokan';
import { RequestShippingApi } from './services/custom/RequestShipping';
import { TokensApi } from './services/custom/Tokens';
import { TypesApi } from './services/custom/Types';
import { UserMitraApi } from './services/custom/UserMitra';
import { LoadingRealisasiKirimApi } from './services/custom/LoadingRealisasiKirim';
import { LocationsApi } from './services/custom/Locations';
import { SumberTambangApi } from './services/custom/SumberTambang';
import { TambangApi } from './services/custom/Tambang';
import { UnloadingRealisasiKirimApi } from './services/custom/UnloadingRealisasiKirim';
import { ReferensiKontrakApi } from './services/custom/ReferensiKontrak';
import { ReferensiKontrakMitraApi } from './services/custom/ReferensiKontrakMitra';
import { ReferensiKontrakPltuApi } from './services/custom/ReferensiKontrakPltu';
import { ReferensiKontrakTambangApi } from './services/custom/ReferensiKontrakTambang';
import { MitraKesanggupanApi } from './services/custom/MitraKesanggupan';
import { MitraKesanggupanTambangApi } from './services/custom/MitraKesanggupanTambang';
import { PlnRencanaApi } from './services/custom/PlnRencana';
import { PlnRealisasiApi } from './services/custom/PlnRealisasi';
import { ShippingInstructionApi } from './services/custom/ShippingInstruction';
/**
* @module SDKBrowserModule
* @description
* This module should be imported when building a Web Application in the following scenarios:
*
*  1.- Regular web application
*  2.- Angular universal application (Browser Portion)
*  3.- Progressive applications (Angular Mobile, Ionic, WebViews, etc)
**/
@NgModule({
  imports:      [ CommonModule, HttpClientModule ],
  declarations: [ ],
  exports:      [ ],
  providers:    [
    ErrorHandler,
    SocketConnection
  ]
})
export class SDKBrowserModule {
  static forRoot(internalStorageProvider: any = {
    provide: InternalStorage,
    useClass: CookieBrowser
  }): ModuleWithProviders {
    return {
      ngModule  : SDKBrowserModule,
      providers : [
        LoopBackAuth,
        LoggerService,
        SDKModels,
        RealTime,
        UserApi,
        RoleMappingApi,
        RoleApi,
        SampleApi,
        UsersApi,
        MitraApi,
        ModesApi,
        PhoneContactsApi,
        PltuApi,
        RealisasiKirimApi,
        RencanaPasokanApi,
        RequestShippingApi,
        TokensApi,
        TypesApi,
        UserMitraApi,
        LoadingRealisasiKirimApi,
        LocationsApi,
        SumberTambangApi,
        TambangApi,
        UnloadingRealisasiKirimApi,
        ReferensiKontrakApi,
        ReferensiKontrakMitraApi,
        ReferensiKontrakPltuApi,
        ReferensiKontrakTambangApi,
        MitraKesanggupanApi,
        MitraKesanggupanTambangApi,
        PlnRencanaApi,
        PlnRealisasiApi,
        ShippingInstructionApi,
        internalStorageProvider,
        { provide: SDKStorage, useClass: StorageBrowser },
        { provide: SocketDriver, useClass: SocketBrowser }
      ]
    };
  }
}
/**
* Have Fun!!!
* - Jon
**/
export * from './models/index';
export * from './services/index';
export * from './lb.config';
export * from './storage/storage.swaps';
export { CookieBrowser } from './storage/cookie.browser';
export { StorageBrowser } from './storage/storage.browser';

