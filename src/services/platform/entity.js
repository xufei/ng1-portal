export default class EntityService {
	constructor($http, $q) {
		this.$http = $http;
		this.$q = $q;

		this.entityList = [
			{name:"Order"},
			{name:"User"}
		];
	}

	getEntityList() {
		let defer = this.$q.defer();
		defer.resolve(this.entityList);
		return defer.promise;
	}

	addEntity(entity) {
		this.entityList.push(entity);

		let defer = this.$q.defer();
		defer.resolve(entity);
		return defer.promise;
	}

	deleteEntity(entity) {
		this.entityList = this.entityList.filter(it => it != entity);

		let defer = this.$q.defer();
		defer.resolve();
		return defer.promise;
	}
	
	getPropertiesByEntity(entity) {
		let properties = [
			{name: "id", type: "uuid", required: true, isPrimaryKey: true},
			{name: "name", type: "string", required: true, isPrimaryKey: false},
			{name: "gender", type: "int", required: true, isPrimaryKey: false},
			{name: "age", type: "int", required: true, isPrimaryKey: false}
		];
		
		let defer = this.$q.defer();
		defer.resolve(properties);
		return defer.promise;
	}
	
	addProperty(entity, property) {
		
	}
	
	modifyProperty(property) {
		
	}
	
	deleteProperty(property) {
		
	}
}

EntityService.$inject = ["$http", "$q"];