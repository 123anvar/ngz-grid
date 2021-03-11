import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContribNgNoHostModule } from "@angular-contrib/common";

import { NgzGridContainerComponent } from "./components/ngz-grid-container/ngz-grid-container.component";
import { NgzGridDataRowComponent } from './components/ngz-grid-data-row/ngz-grid-data-row.component';
import { NgzGridCellComponent } from './components/ngz-grid-cell/ngz-grid-cell.component';
import { NgzGridCheckBoxComponent } from './components/ngz-grid-check-box/ngz-grid-check-box.component';
import { NgzGridCustomTemplateComponent } from './components/ngz-grid-custom-template/ngz-grid-custom-template.component';
import { NgzGridDatePickerComponent } from './components/ngz-grid-date-picker/ngz-grid-date-picker.component';
import { NgzGridLabelComponent } from './components/ngz-grid-label/ngz-grid-label.component';
import { NgzGridNumericTextBoxComponent } from './components/ngz-grid-numeric-text-box/ngz-grid-numeric-text-box.component';
import { NgzGridRadioButtonComponent } from './components/ngz-grid-radio-button/ngz-grid-radio-button.component';
import { NgzGridSelectComponent } from './components/ngz-grid-select/ngz-grid-select.component';
import { NgzGridTextBoxComponent } from './components/ngz-grid-text-box/ngz-grid-text-box.component';

@NgModule({
    declarations: [
        NgzGridContainerComponent,
        NgzGridDataRowComponent,
        NgzGridCellComponent,
        NgzGridCheckBoxComponent,
        NgzGridCustomTemplateComponent,
        NgzGridDatePickerComponent,
        NgzGridLabelComponent,
        NgzGridNumericTextBoxComponent,
        NgzGridRadioButtonComponent,
        NgzGridSelectComponent,
        NgzGridTextBoxComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        ContribNgNoHostModule
    ],
    exports: [
        NgzGridContainerComponent
    ],
    providers: []
})
export class NgzGridModule { }