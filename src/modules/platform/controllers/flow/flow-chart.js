export default class FlowChartController {
	constructor(FlowService) {
		this.FlowService = FlowService;
	
		this.flows = [];
	}

	init() {
		this.FlowService.getFlow().then(result => this.flow = result);
	}

    addFlow() {
		let workflow = WorkflowFactory.create();

		this.flows.push(workflow);
		this.selectFlow(workflow);
	}

	addActivity(flow, type) {
		flow.addActivity(type);
	}

	selectFlow(flow) {
		this.selectedFlow = flow;
	}

	prepareInsert(flow, type) {
		flow.isEditing = true;
		flow.insertionType = type;
	}

	insertActivity(flow, transition) {
		let activity = ActivityFactory.create(flow.insertionType);
		flow.insert(activity, transition);
		flow.isEditing = false;
	}

	//下面这些只给视图展示用
	nodeX(activity) {
		return WorkflowConfig.offsetX + (ActivityConfig.default.width - ActivityConfig[activity.type].width) / 2;
	}

	nodeY(activity) {
		let index = 0;
		for (let i = 0; i < activity.parent.activities.length; i++) {
			if (activity.parent.activities[i] == activity) {
				index = i;
				break;
			}
		}

		return WorkflowConfig.offsetY + 100 * index;
	}

	path(transition) {
		let from = transition.from;
		let to = transition.to;

		let fromX = this.nodeX(from) + ActivityConfig[from.type].width / 2;
		let fromY = this.nodeY(from) + ActivityConfig[from.type].height;

		let toX = this.nodeX(to) + ActivityConfig[to.type].width / 2;
		let toY = this.nodeY(to) - (ActivityConfig.default.height - ActivityConfig[to.type].height) / 2;

		return "M" + fromX + "," + fromY + " L" + toX + "," + toY;
	}

	insertPositionX(transition) {
		let from = transition.from;
		let fromX = this.nodeX(from) + ActivityConfig[from.type].width / 2;

		return fromX;
	}

	insertPositionY(transition) {
		let from = transition.from;
		let to = transition.to;

		let fromY = this.nodeY(from) + ActivityConfig[from.type].height;
		let toY = this.nodeY(to) - (ActivityConfig.default.height - ActivityConfig[to.type].height) / 2;

		return (fromY + toY) / 2;
	}
}

FlowChartController.$inject = ["FlowService"];