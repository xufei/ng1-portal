export default class EntityManageController {
	constructor(EntityService) {
		this.EntityService = EntityService;
	}
	
	init() {
		
	}
}

EntityManageController.$inject = ["EntityService"];