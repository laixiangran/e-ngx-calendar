import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

	schedules: any;

	constructor () {
		this.schedules = [
			{
				date: new Date(2017, 4, 6),
				data: [
					{
						title: '参加会议',
						address: '公司会议室',
						content: '讨论考核制度',
						info: '参会人员包括：张三、李四',
						start_time: new Date(2017, 0, 18),
						end_time: new Date(new Date(2017, 0, 18).getTime() + 3600000),
						remind_time: new Date(new Date(2017, 0, 18).getTime() - 3600000)
					},
					{
						title: '参加会议',
						address: '公司会议室',
						content: '讨论考核制度',
						info: '参会人员包括：张三、李四',
						start_time: new Date(2017, 0, 18),
						end_time: new Date(new Date(2017, 0, 18).getTime() + 3600000),
						remind_time: new Date(new Date(2017, 0, 18).getTime() - 3600000)
					}
				]
			},

			{
				date: new Date(),
				data: [
					{
						title: '参加会议参加会议参加会议',
						address: '公司会议室',
						content: '讨论考核制度',
						info: '参会人员包括：张三、李四',
						start_time: new Date(),
						end_time: new Date(new Date().getTime() + 3600000),
						remind_time: new Date(new Date().getTime() - 3600000)
					},
					{
						title: '参加会议',
						address: '公司会议室',
						content: '讨论考核制度',
						info: '参会人员包括：张三、李四',
						start_time: new Date(),
						end_time: new Date(new Date().getTime() + 3600000),
						remind_time: new Date(new Date().getTime() - 3600000)
					},
					{
						title: '参加会议',
						address: '公司会议室',
						content: '讨论考核制度',
						info: '参会人员包括：张三、李四',
						start_time: new Date(),
						end_time: new Date(new Date().getTime() + 3600000),
						remind_time: new Date(new Date().getTime() - 3600000)
					},
					{
						title: '参加会议',
						address: '公司会议室',
						content: '讨论考核制度',
						info: '参会人员包括：张三、李四',
						start_time: new Date(),
						end_time: new Date(new Date().getTime() + 3600000),
						remind_time: new Date(new Date().getTime() - 3600000)
					},
					{
						title: '参加会议',
						address: '公司会议室',
						content: '讨论考核制度',
						info: '参会人员包括：张三、李四',
						start_time: new Date(),
						end_time: new Date(new Date().getTime() + 3600000),
						remind_time: new Date(new Date().getTime() - 3600000)
					},
					{
						title: '参加会议',
						address: '公司会议室',
						content: '讨论考核制度',
						info: '参会人员包括：张三、李四',
						start_time: new Date(),
						end_time: new Date(new Date().getTime() + 3600000),
						remind_time: new Date(new Date().getTime() - 3600000)
					}
				]
			}
		]
	}

	ngOnInit () {}

	onDateChange ($event: Date) {
		// console.log($event);
	}

	onAddSchedule ($event: any) {
		// console.log($event);
	}

	onViewAllSchedule ($event: any) {
		// console.log($event);
	}

	onViewSchedule ($event: any) {
		// console.log($event);
	}
}
