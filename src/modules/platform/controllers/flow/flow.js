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
	
	step() {
		this.flow.executeStep();
	}
}

FlowController.$inject = ["FlowService"];