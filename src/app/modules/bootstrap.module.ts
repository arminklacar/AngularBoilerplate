import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; //This imports all components, if needed it can be removed and imported one my one

@NgModule({
    imports: [NgbModule],
    exports: [NgbModule],
})
export class BootstrapModule { }