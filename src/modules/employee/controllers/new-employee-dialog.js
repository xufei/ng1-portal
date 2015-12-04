export default class NewEmployeeDialogController {
	constructor(EmployeeService) {
		this.EmployeeService = EmployeeService;
	}
	
	ok() {
		this.EmployeeService.addEmployee({
			name: this.name,
			age: this.age,
			gender: this.gender
		}).then(result => this.dialog.onOk(result));
	}
}

NewEmployeeDialogController.$inject = ["EmployeeService"];