export default class TimelineService {
	constructor($http, $q) {
		this.$http = $http;
		this.$q = $q;
		
		this.timeline = [];
	}
	
	getTimeline() {
		this.timeline = [{
			title: "Tom",
			content: "asfsdfds fsdfdsfds",
			date: new Date(2015, 7, 1)
		}, {
			title: "Jerry",
			content: "asfsdfds fsdfdsfds",
			date: new Date(new Date().valueOf() - 3600000)
		}, {
			title: "Donald",
			content: "asfsdfds fsdfdsfds",
			date: new Date(new Date().valueOf() - 1500)
		}, {
			title: "Droppy",
			content: "asfsdfds fsdfdsfds",
			date: new Date(new Date().valueOf() - 1500)
		}];
		
		let defer = this.$q.defer();
		defer.resolve(this.timeline);
		return defer.promise;
	}
}

TimelineService.$inject = ["$http", "$q"];