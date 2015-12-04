import newDialogTpl from "../templates/new-employee-dialog.html";

export default class EmployeeListController {
	constructor(EmployeeService, DialogService, AlertService) {
		this.EmployeeService = EmployeeService;
		this.DialogService = DialogService;
		this.AlertService = AlertService;

		this.total = 0;
		this.employeeList = [];
		this.selectedEmployee = null;
	}

	init() {
		this.getEmployeeList(0);
	}
	
	getEmployeeList(index) {
		this.EmployeeService.getEmployeeList(index, 10).then(result => {
			this.employeeList = result.employeeList;
			this.total = result.total;
			this.selectedEmployee = null;
		});
	}
	
	newEmployee() {
		this.DialogService.modal(newDialogTpl, null, result => this.employeeList.push(result));
	}
	
	deleteEmployee() {
		this.AlertService.confirm({title:"Delete Employee", content:"Are you sure?"})
			.then(() => {
				this.EmployeeService.deleteEmployee(this.selectedEmployee)
					.then(() => this.employeeList = this.employeeList.filter(it => it!=this.selectedEmployee));
			});
	}
}

EmployeeListController.$inject = ["EmployeeService", "DialogService", "AlertService"];