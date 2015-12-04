export default class NewEmployeeDialogController {
	constructor(EmployeeService, DialogService) {
		this.EmployeeService = EmployeeService;
		this.DialogService = DialogService;
	}
	
	ok() {
		this.EmployeeService.addEmployee({
			name: this.name,
			age: this.age,
			gender: this.gender
		}).then(result => this.DialogService.accept("sn.portal.employee.NewEmployeeDialog", result));
	}
	
	cancel() {
		this.DialogService.dismiss("sn.portal.employee.NewEmployeeDialog");
	}
	
	close() {
		this.DialogService.dismiss("sn.portal.employee.NewEmployeeDialog");
	}
}

NewEmployeeDialogController.$inject = ["EmployeeService", "DialogService"];