export default class DashboardService {
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
			{code: "0", name: "Dashboard", icon:"fa-dashboard", state: "Dashboard"},
			{code: "1", name: "Charts", icon:"fa-bar-chart-o"},
			{code: "2", name: "Messages", icon:"fa-table", state: "Messages"},
			{code: "3", name: "Forms", icon:"fa-edit"},
			{code: "4", name: "UI Elements", icon:"fa-wrench"},
			{code: "5", name: "Multi-Level Dropdown", icon:"fa-sitemap"},
			{code: "6", name: "Sample Pages", icon:"fa-files-o"},
			
			{code: "10", parent:"1", name: "Flot Charts"},
			{code: "11", parent:"1", name: "Morris.js Charts"},
			{code: "40", parent:"4", name: "Panels and Wells"},
			{code: "41", parent:"4", name: "Buttons"},
			{code: "42", parent:"4", name: "Notifications"},
			{code: "43", parent:"4", name: "Typography"},
			{code: "44", parent:"4", name: "Icons"},
			{code: "45", parent:"4", name: "Grid"},
			{code: "50", parent:"5", name: "Second Level Item"},
			{code: "51", parent:"5", name: "Second Level Item"},
			{code: "52", parent:"5", name: "Third Level"},
			{code: "60", parent:"6", name: "Blank Page"},
			{code: "61", parent:"6", name: "Login Page"},
			
			{code: "520", parent:"52", name: "Third Level Item"},
			{code: "521", parent:"52", name: "Third Level Item"},
			{code: "522", parent:"52", name: "Third Level Item"},
			{code: "523", parent:"52", name: "Third Level Item"}
		];
		
		let defer = this.$q.defer();
		defer.resolve(this.menuList);
		return defer.promise;
	}
}

DashboardService.$inject = ["$http", "$q"];