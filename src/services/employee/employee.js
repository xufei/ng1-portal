export default class EmployeeService {
	constructor($http, $q) {
		this.$http = $http;
		this.$q = $q;
		
		this.employeeList = Array.from(Array(188), (v, k) => Object.create({
			name: "Employee " + k,
			age: 18 +  Math.floor(Math.random() * 20),
			gender: Math.round(Math.random())
		}));
	}
	
	getEmployeeList(startIndex, pageSize) {
		let employeeList = this.employeeList.slice(startIndex, pageSize);
		
		let defer = this.$q.defer();
		defer.resolve({
			total: this.employeeList.length,
			employeeList: employeeList
		});
		return defer.promise;
	}
	
	addEmployee(employee) {
		this.employeeList.push(employee);
		
		let defer = this.$q.defer();
		defer.resolve(employee);
		return defer.promise;
	}
}

EmployeeService.$inject = ["$http", "$q"];