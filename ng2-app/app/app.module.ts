import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { LibModule } from 'ng2-lib';

@NgModule({
    imports: [
        BrowserModule,
        LibModule.forRoot(),
    ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ],
})
export class AppModule { }
