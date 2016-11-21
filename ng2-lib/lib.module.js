import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibComponent } from './lib.component';
export var LibModule = (function () {
    function LibModule() {
    }
    LibModule.forRoot = function () {
        return {
            ngModule: LibModule,
        };
    };
    LibModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                    ],
                    declarations: [
                        LibComponent,
                    ],
                    exports: [
                        LibComponent,
                    ],
                },] },
    ];
    /** @nocollapse */
    LibModule.ctorParameters = [];
    return LibModule;
}());
//# sourceMappingURL=lib.module.js.map