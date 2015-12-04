import newDialogTpl from "../templates/new-employee-dialog.html";

export default class EmployeeListController {
	constructor(EmployeeService, DialogService) {
		this.EmployeeService = EmployeeService;
		this.DialogService = DialogService;

		this.employeeList = [];
		this.total = 0;
	}

	init() {
		this.getEmployeeList(0);
	}
	
	getEmployeeList(index) {
		this.EmployeeService.getEmployeeList(index, 10).then(result => {
			this.employeeList = result.employeeList;
			this.total = result.total;
		});
	}
	
	newEmployee() {
		this.DialogService.modal(newDialogTpl, null, result => this.employeeList.push(result));
	}
}

EmployeeListController.$inject = ["EmployeeService", "DialogService"];