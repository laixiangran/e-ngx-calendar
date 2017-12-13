/**
 * Created by laixiangran on 2016/11/29.
 * homepage：http://www.laixiangran.cn.
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ENgxCalendarComponent } from './e-ngx-calendar.component';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		ENgxCalendarComponent
	],
	exports: [
		ENgxCalendarComponent
	]
})
export class ENgxCalendarModule {
}
