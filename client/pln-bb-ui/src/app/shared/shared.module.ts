import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CalendarDirective } from './directives/calendar.directive';
import { DropdownDirective } from './directives/dropdown.dirctive';
import { PopupDirective } from './directives/popup.directive';
import { TimeDirective } from './directives/time.directive';
import { CacheService } from './services/cache.service';
import { AuthenticatedGuard } from './guards/authenticated.guard';

@NgModule({
  imports: [
    RouterModule,
    CommonModule
	],
  exports: [DropdownDirective, CalendarDirective, PopupDirective, TimeDirective],
  declarations: [DropdownDirective, CalendarDirective, PopupDirective, TimeDirective],
  providers: [CacheService, AuthenticatedGuard]
})
export class SharedModule { }
