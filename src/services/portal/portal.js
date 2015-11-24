export default class PortalService {
	constructor($http, $q) {
		this.$http = $http;
		this.$q = $q;
		
		this.messageList = [];
	}
	
	getMessageList() {
		this.messageList = [{
			title: "Test1",
			content: "asfsdfds fsdfdsfds",
			date: new Date(2015, 7, 1)
		}, {
			title: "Test2",
			content: "asfsdfds fsdfdsfds",
			date: new Date(new Date().valueOf() - 3600000)
		}, {
			title: "Test3",
			content: "asfsdfds fsdfdsfds",
			date: new Date(new Date().valueOf() - 1500)
		}];
		
		let defer = this.$q.defer();
		defer.resolve(this.messageList);
		return defer.promise;
	}
}

PortalService.$inject = ["$http", "$q"];