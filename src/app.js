import modules from "./modules/index";
import services from "./services/index";
import filters from "./filters/index";

angular.module("ng.admin", ["ui.router", "sn.components", services, filters, modules])
	.config(($stateProvider, $urlRouterProvider) => {
		$urlRouterProvider.otherwise("/dashboard");
		
		$stateProvider
			.state("Dashboard", {
				url: "/dashboard",
				template: "<sn-dashboard></sn-dashboard>"
			})
			.state("Messages", {
				url: "/messages",
				template: "<sn-message-list></sn-message-list>"
			})
			/*
			.state('state2.list', {
				url: "/list",
				templateUrl: "partials/state2.list.html",
				controller: function ($scope) {
					$scope.things = ["A", "Set", "Of", "Things"];
				}
			})*/;
	});