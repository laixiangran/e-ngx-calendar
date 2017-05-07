import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {EssenceNg2CalendarModule} from "../../src/essence-ng2-calendar.module";

@NgModule({
    imports: [
        BrowserModule,
		EssenceNg2CalendarModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
