export default class EmployeeListController {
	constructor(EmployeeService) {
		this.EmployeeService = EmployeeService;

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
}

EmployeeListController.$inject = ["EmployeeService"];