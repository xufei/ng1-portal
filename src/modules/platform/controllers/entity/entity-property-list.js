export default class EntityPropertyListController {
	constructor(EntityService) {
		this.EntityService = EntityService;
	}
	
	init() {
	}
	
	getPropertiesByEntity(entity) {
		this.EntityService.getPropertiesByEntity(entity).then(result => this.propertyList = result);
	}
}

EntityPropertyListController.$inject = ["EntityService"];