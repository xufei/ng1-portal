export default class NotificationService {
	constructor($http, $q) {
		this.$http = $http;
		this.$q = $q;
		
		this.notifications = [];
	}
	
	getNotifications() {
		this.notifications = [{
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
		defer.resolve(this.notifications);
		return defer.promise;
	}
}

NotificationService.$inject = ["$http", "$q"];