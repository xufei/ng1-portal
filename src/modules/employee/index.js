import EmployeeListDirective from "./directives/employee-list";

import NewEmployeeDialogController from "./controllers/new-employee-dialog";

export default angular.module("modules.employee", [])
	.directive("snEmployeeList", () => new EmployeeListDirective())
	
	.controller("NewEmployeeDialogController", NewEmployeeDialogController)
	.name;