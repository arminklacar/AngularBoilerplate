import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule } from '@angular/material'; //Only an example of few imports

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule],
    exports: [MatButtonModule, MatCheckboxModule],
})
export class MaterialModule { }