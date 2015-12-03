export default class RouterService {
	constructor($state) {
		this.$state = $state;
	}

	go(state) {
		this.$state.go(state);
	}
}

RouterService.$inject = ["$state"];