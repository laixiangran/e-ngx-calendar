import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ENgxCalendarModule } from '../../src/e-ngx-calendar.module';

@NgModule({
	imports: [
		BrowserModule,
		ENgxCalendarModule
	],
	declarations: [
		AppComponent
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
