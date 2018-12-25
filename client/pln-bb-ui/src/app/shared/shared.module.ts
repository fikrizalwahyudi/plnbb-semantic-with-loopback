import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CalendarDirective } from './directives/calendar.directive';
import { DropdownDirective } from './directives/dropdown.directive';
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
import { LogService } from './services/log.service';
import { BreadcrumbService } from './services/breadcrumb.service';
import { BreadcrumbComponent } from './commons/breadcrumb.component';
import { ModalDirective } from './directives/modal.directive';
import { ModalBlockComponent } from './commons/modal-block/modal-block.component';
import { AsyncDropdownDirective } from './directives/async-dropdown.directive';
import { CalendarYearDirective } from './directives/calendar-year.directive';
import { CalendarRangeDirective } from './directives/calendar-range.directive';
import { DigitsMaskDirective } from './directives/digits-mask.directive';
import { PdfDirective } from './directives/pdf.directive';
import { FormBlockBasicComponent } from './commons/form-block/form-block-basic.component';
import { TimeRangeDirective } from './directives/time-range.directive';


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
    CheckboxDirective,
    BreadcrumbComponent,
    ModalDirective,
    ModalBlockComponent,
    AsyncDropdownDirective,
    CalendarYearDirective,
    CalendarRangeDirective,
    DigitsMaskDirective,
    PdfDirective,
    FormBlockBasicComponent,
    TimeRangeDirective
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
    CheckboxDirective,
    BreadcrumbComponent,
    ModalDirective,
    ModalBlockComponent,
    AsyncDropdownDirective,
    CalendarYearDirective,
    CalendarRangeDirective,
    DigitsMaskDirective,
    PdfDirective,
    FormBlockBasicComponent,
    TimeRangeDirective
  ],

  providers: [
    CacheService, 
    AuthenticatedGuard, 
    MenuService,
    LogService,
    BreadcrumbService
  ]
})
export class SharedModule { }
