import EmployeeListDirective from "./directives/employee-list";

export default angular.module("modules.employee", [])
	.directive("snEmployeeList", () => new EmployeeListDirective())
	.name;