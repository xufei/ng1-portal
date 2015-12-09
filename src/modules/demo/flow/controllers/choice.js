export default class ChoiceController {
	constructor(FlowService) {
		this.FlowService = FlowService;
	}
	
	init() {
		let data = {
			name: "Choice",
			activities: [
				{id: "a00", type:"start", action: "this.step=0"},
				{id: "a01", type:"normal", action: "var temp=this.a%this.b; this.a=this.b; this.b=temp;"},
				{id: "a02", type: "finish", action: "this.result=this.b;"}
			],
			transitions: [
				{id: "b00", from: "a00", to: "a01", condition: "return true"},
				{id: "b01", from: "a01", to: "a01", condition: "return this.a%this.b!=0"},
				{id: "b02", from: "a01", to: "a02", condition: "return this.a%this.b==0"}
			]
		};
		
		this.FlowService.getFlow(data).then(result => {
			this.flow = result;
			this.flow.executeStep();
		});
	}
}

ChoiceController.$inject = ["FlowService"];