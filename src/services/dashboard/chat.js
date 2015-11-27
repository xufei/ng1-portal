export default class ChatService {
	constructor($http, $q) {
		this.$http = $http;
		this.$q = $q;
		
		this.chatList = [];
	}
	
	getChatList() {
		this.chatList = [{
			from: "Tom",
			content: "asfsdfds fsdfdsfds",
			date: new Date(2015, 7, 1)
		}, {
			from: "Jerry",
			content: "asfsdfds fsdfdsfds",
			date: new Date(new Date().valueOf() - 3600000)
		}, {
			from: "Donald",
			content: "asfsdfds fsdfdsfds",
			date: new Date(new Date().valueOf() - 1500)
		}, {
			from: "Droppy",
			content: "asfsdfds fsdfdsfds",
			date: new Date(new Date().valueOf() - 1500)
		}];
		
		let defer = this.$q.defer();
		defer.resolve(this.chatList);
		return defer.promise;
	}
	
	sendMessage(message) {
		this.chatList.push({
			from: "Sun Wukong",
			content: message,
			date: new Date()
		});
	}
}

ChatService.$inject = ["$http", "$q"];