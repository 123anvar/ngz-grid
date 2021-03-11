import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgzGridContainerComponent } from "./components/ngz-grid-container/ngz-grid-container.component";

@NgModule({
    declarations: [
        NgzGridContainerComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        NgzGridContainerComponent
    ],
    providers: []
})
export class NgzGridModule { }