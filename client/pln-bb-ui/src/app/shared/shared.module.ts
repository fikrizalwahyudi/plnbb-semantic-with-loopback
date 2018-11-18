import { NgModule } from '@angular/core';
import { HeaderComponent } from './ui/header/header.component';
import { RouterModule } from '@angular/router';
import { DropdownDirective } from './ui/dropdown.directive';
import { CommonModule } from '@angular/common';
import { CalendarDirective } from './calendar.directive';
import { PopupDirective } from './ui/popup.directive';
import { TimeDirective } from './time.directive';
import { CacheService } from './services/cache.service';
import { AuthenticatedGuard } from './guards/authenticated.guard';

@NgModule({
  imports: [
    RouterModule,
    CommonModule
	],
  exports: [HeaderComponent, DropdownDirective, CalendarDirective, PopupDirective, TimeDirective],
  declarations: [HeaderComponent, DropdownDirective, CalendarDirective, PopupDirective, TimeDirective],
  providers: [CacheService, AuthenticatedGuard]
})
export class SharedModule { }
