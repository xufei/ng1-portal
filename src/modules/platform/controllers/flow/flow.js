export default class FlowController {
	constructor(FlowService) {
		this.FlowService = FlowService;
	}
	
	init() {
		this.FlowService.getFlow().then(result => this.flow = result);
	}
	
	start() {
		this.flow.execute();
	}
}

FlowController.$inject = ["FlowService"];