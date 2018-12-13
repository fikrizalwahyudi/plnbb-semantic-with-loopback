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
import { FormBlockComponent } from './commons/form-block/form-block.component';
import { TableBlockComponent } from './commons/table-block/table-block.component';
import { TableActionDeleteComponent } from './commons/table-action-delete.component';
import { TableActionEditComponent } from './commons/table-action-edit.component';
import { TableActionViewComponent } from './commons/table-action-view.component';
import { MultiDropdownDirective } from './directives/multi-dropdown.directive';
import { MultiInputComponent } from './directives/multi-input.component';
import { FormsModule } from '@angular/forms';
import { SearchDropdownDirective } from './directives/search-dropdown.directive';
import { KeyValuePipe } from './directives/keyvalue.pipe';
import { CheckboxDirective } from './directives/checkbox.directive';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    FormsModule
  ],

  exports: [
    DropdownDirective, 
    CalendarDirective, 
    PopupDirective, 
    TimeDirective, 
    HeaderComponent, 
    FooterComponent, 
    FormBlockComponent, 
    TableBlockComponent, 
    TableActionDeleteComponent, 
    TableActionEditComponent, 
    TableActionViewComponent,
    MultiDropdownDirective,
    MultiInputComponent,
    SearchDropdownDirective,
    KeyValuePipe,
    CheckboxDirective
  ],

  declarations: [
    DropdownDirective, 
    CalendarDirective, 
    PopupDirective, 
    TimeDirective, 
    HeaderComponent, 
    FooterComponent, 
    FormBlockComponent, 
    TableBlockComponent, 
    TableActionDeleteComponent, 
    TableActionEditComponent, 
    TableActionViewComponent,
    MultiDropdownDirective,
    MultiInputComponent,
    SearchDropdownDirective,
    KeyValuePipe,
    CheckboxDirective
  ],

  providers: [
    CacheService, 
    AuthenticatedGuard, 
    MenuService
  ]
})
export class SharedModule { }
