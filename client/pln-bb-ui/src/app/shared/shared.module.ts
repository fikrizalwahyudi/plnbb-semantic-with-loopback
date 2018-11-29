import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CalendarDirective } from './directives/calendar.directive';
import { DropdownDirective } from './directives/dropdown.dirctive';
import { PopupDirective } from './directives/popup.directive';
import { TimeDirective } from './directives/time.directive';
import { CacheService } from './services/cache.service';
import { AuthenticatedGuard } from './guards/authenticated.guard';
import { HeaderComponent } from './commons/header/header.component';
import { FooterComponent } from './commons/footer/footer.component';
import { MenuService } from './services/menu.service';

@NgModule({
  imports: [
    RouterModule,
    CommonModule
	],
  exports: [DropdownDirective, CalendarDirective, PopupDirective, TimeDirective, HeaderComponent, FooterComponent],
  declarations: [DropdownDirective, CalendarDirective, PopupDirective, TimeDirective, HeaderComponent, FooterComponent],
  providers: [CacheService, AuthenticatedGuard, MenuService]
})
export class SharedModule { }
