export default class EntityListController {
	constructor(EntityService) {
		this.EntityService = EntityService;
	}
	
	init() {
		this.EntityService.getEntityList().then(result => this.entityList = result);
	}
	
	selectEntity(entity) {
		this.selectedEntity = entity;
	}
}

EntityListController.$inject = ["EntityService"];