export default class PortalService {
	constructor($http, $q) {
		this.$http = $http;
		this.$q = $q;

		this.messageList = [];
		this.taskList = [];
		this.alertList = [];
		this.menuList = [];
	}

	getMessageList() {
		this.messageList = [{
			title: "Message 1",
			content: "asfsdfds fsdfdsfds",
			date: new Date(2015, 7, 1)
		}, {
				title: "Message 2",
				content: "asfsdfds fsdfdsfds",
				date: new Date(new Date().valueOf() - 3600000)
			}, {
				title: "Message 3",
				content: "asfsdfds fsdfdsfds",
				date: new Date(new Date().valueOf() - 1500)
			}];

		let defer = this.$q.defer();
		defer.resolve(this.messageList);
		return defer.promise;
	}

	getTaskList() {
		this.taskList = [{
			name: "Task 1",
			percentage: 40
		}, {
				name: "Task 2",
				percentage: 100
			}, {
				name: "Task 3",
				percentage: 60
			}, {
				name: "Task 4",
				percentage: 20
			}, {
				name: "Task 5",
				percentage: 80
			}];

		let defer = this.$q.defer();
		defer.resolve(this.taskList);
		return defer.promise;
	}

	getAlertList() {
		this.alertList = [{
			type: "comment",
			content: "asfsdfds fsdfdsfds",
			date: new Date(2015, 7, 1)
		}, {
				type: "twitter",
				content: "asfsdfds fsdfdsfds",
				date: new Date(new Date().valueOf() - 3600000)
			}, {
				type: "envelope",
				content: "asfsdfds fsdfdsfds",
				date: new Date(new Date().valueOf() - 15000)
			}, {
				type: "tasks",
				content: "asfsdfds fsdfdsfds",
				date: new Date(new Date().valueOf() - 150000)
			}, {
				type: "upload",
				content: "asfsdfds fsdfdsfds",
				date: new Date(new Date().valueOf() - 500000)
			}];

		let defer = this.$q.defer();
		defer.resolve(this.alertList);
		return defer.promise;
	}

	getMenuList() {
		this.menuList = [
			{ code: "0", name: "Dashboard", icon: "fa-dashboard", state: "Dashboard" },
			{ code: "1", name: "Platform", icon: "fa-bar-chart-o", state: "Platform" },
			{ code: "2", name: "Messages", icon: "fa-table", state: "Messages" },
			{ code: "3", name: "Employees", icon: "fa-user", state: "Employees" },
			{ code: "4", name: "UI Elements", icon: "fa-wrench", state: "UI Elements" },
			{ code: "5", name: "Demos", icon: "fa-sitemap", state: "Demos" },
			{ code: "6", name: "Sample Pages", icon: "fa-files-o", state: "Sample Pages" },

			{ code: "10", parent: "1", name: "Entity Management", state: "Entity" },
			{ code: "11", parent: "1", name: "Rule Management" },
			{ code: "12", parent: "1", name: "Workflow Management", state: "Flow" },
			{ code: "13", parent: "1", name: "UI Builder" },
			{ code: "40", parent: "4", name: "Panels and Wells" },
			{ code: "41", parent: "4", name: "Buttons" },
			{ code: "42", parent: "4", name: "Notifications" },
			{ code: "43", parent: "4", name: "Typography" },
			{ code: "44", parent: "4", name: "Icons" },
			{ code: "45", parent: "4", name: "Grid" },
			{ code: "50", parent: "5", name: "Demo1" },
			{ code: "51", parent: "5", name: "Demo2" },
			{ code: "52", parent: "5", name: "Workflow Demo" },
			{ code: "60", parent: "6", name: "Blank Page" },
			{ code: "61", parent: "6", name: "Login Page" },

			{ code: "520", parent: "52", name: "Euclid", state: "Euclid" },
			{ code: "521", parent: "52", name: "Choice", state: "Choice" },
			{ code: "522", parent: "52", name: "Third Level Item" },
			{ code: "523", parent: "52", name: "Third Level Item" }
		];

		let defer = this.$q.defer();
		defer.resolve(this.menuList);
		return defer.promise;
	}
}

PortalService.$inject = ["$http", "$q"];