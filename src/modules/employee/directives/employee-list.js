import template from "../templates/employee-list.html";

import EmployeeListController from "../controllers/employee-list";

export default class EmployeeListDirective {
	constructor() {
		this.template = template;
		this.restrict = "E";
		this.replace = true;
		this.controller = EmployeeListController;
		this.controllerAs = "employeeListCtrl";
	}
	
	link(scope, element, attrs) {
		scope.$watch("employeeListCtrl.currentPage", page => {
			if (page) {
				scope.employeeListCtrl.getEmployeeList(page.index);
			}
		});
	}
}