import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibComponent } from './lib.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        LibComponent,
    ],
    exports: [
        LibComponent,
    ],
})
export class LibModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: LibModule,
        };
    }
}