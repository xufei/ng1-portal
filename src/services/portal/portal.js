export default class PortalService {
	constructor($http, $q) {
		this.$http = $http;
		this.$q = $q;
		
		this.messageList = [];
		this.taskList = [];
		this.alertList = [];
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
	
	addAlert(item) {
		this.alertList.push(item);
	}
}

PortalService.$inject = ["$http", "$q"];