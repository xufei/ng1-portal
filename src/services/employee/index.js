import EmployeeService from "./employee";

export default angular.module("services.employee", [])
	.service("EmployeeService", EmployeeService)
	.name;