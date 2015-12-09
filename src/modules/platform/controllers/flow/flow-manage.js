export default class FlowManageController {
	constructor(FlowService) {
		this.FlowService = FlowService;
	}
	
	init() {
		this.FlowService.getFlow().then(result => this.flow = result);
	}
}

FlowManageController.$inject = ["FlowService"];