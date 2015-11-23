import TopNavDirective from "./directives/top-nav";

export default angular.module("modules.portal", [])
	.directive("snTopNav", () => new TopNavDirective())
	.name;