export default class EntityRuleListController {
	constructor(EntityService) {
		this.EntityService = EntityService;
	}
	
	init() {
	}
	
	getRulesByEntity(entity) {
		this.EntityService.getRulesByEntity(entity).then(result => this.ruleList = result);
	}
}

EntityRuleListController.$inject = ["EntityService"];