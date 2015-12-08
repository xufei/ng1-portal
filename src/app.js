import modules from "./modules/index";
import services from "./services/index";
import filters from "./filters/index";

angular.module("ng.admin", ["ui.router", "sn.components", services, filters, modules])
	.config(["$stateProvider", "$urlRouterProvider", ($stateProvider, $urlRouterProvider) => {
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
			
			.state("Platform", {
				url: "/platform",
				template: "<h1>Platform</h1>"
			})
			.state("Entity", {
				url: "/entity",
				template: "<sn-entity-manage></sn-entity-manage>"
			})
			.state("Flow", {
				url: "/flow",
				template: "<sn-flow></sn-flow>"
			})
			
			
			.state("Employees", {
				url: "/employee-list",
				template: "<sn-employee-list></sn-employee-list>"
			})
			.state("UI Elements", {
				url: "/ui-elements",
				template: "<h1>UI Elements</h1>"
			})
			.state("Multi-Level Dropdown", {
				url: "/multi-level",
				template: "<h1>Multi-Level Dropdown</h1>"
			})
			.state("Sample Pages", {
				url: "/sample-pages",
				template: "<h1>Sample Pages</h1>"
			})
			/*
			.state('state2.list', {
				url: "/list",
				templateUrl: "partials/state2.list.html",
				controller: function ($scope) {
					$scope.things = ["A", "Set", "Of", "Things"];
				}
			})*/;
	}]);