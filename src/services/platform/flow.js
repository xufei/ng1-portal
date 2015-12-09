export default class FlowService {
	constructor($http, $q) {
		this.$http = $http;
		this.$q = $q;
		
		this.flowList = [];
	}
	
	getFlowList() {
		let defer = this.$q.defer();
		defer.resolve(this.flowList);
		return defer.promise;
	}
	
	getFlow(data) {
		let defer = this.$q.defer();
		let flow = createFlow(data);
		defer.resolve(flow);
		return defer.promise;
	}
	
	getAnotherFlow() {
		let defer = this.$q.defer();
		let flow = createFlow({
			name: "Euclid",
			activities: [
				{id: "a00", type:"start", action: "this.a=72; this.b=45;"},
				{id: "a01", type:"normal", action: "var temp=this.a%this.b; this.a=this.b; this.b=temp;"},
				{id: "a02", type: "finish", action: "alert(this.b);"}
			],
			transitions: [
				{id: "b00", from: "a00", to: "a01", condition: "return true"},
				{id: "b01", from: "a01", to: "a01", condition: "return this.a%this.b!=0"},
				{id: "b02", from: "a01", to: "a02", condition: "return this.a%this.b==0"}
			]
		});
		defer.resolve(flow);
		return defer.promise;
	}
}

FlowService.$inject = ["$http", "$q"];


function createFlow(data) {
	let flow = new StateMachine();
	
	flow.load(data);
	
	return flow;
}

class Flow {
	constructor() {
		this.context = {};
		
		this.activityMap = new Map();
		this.transitionMap = new Map();
		
		this.finished = false;
	}
	
	execute() {
		while (!this.finished) {
			this.executeStep();
		}
	}
	
	executeStep() {
		if (this.finished) {
			return;
		}
		
		// sync
		this.currentActivity.execute();
		
		if (this.currentActivity == this.tail) {
			this.finished = true;
		}
		
		for (let i=0; i<this.currentActivity.out.length; i++) {
			let transition = this.currentActivity.out[i];
			if (transition.evaluate()) {
				this.currentActivity = transition.to;
				break;
			}
		};
	}
}

class StateMachine extends Flow {
	constructor() {
		super();
	}
	
	load(flow) {
		flow.activities.forEach(data => this.addActivity(data));
		flow.transitions.forEach(data => this.addTransition(data));
			
		this.currentActivity = this.head;
	}
	
	addActivity(data) {
		let activity = new Activity(data);
		activity.context = this.context;
		this.activityMap.set(data.id, activity);
		
		if (data.type == "start") {
			this.head = activity;
		}
		
		if (data.type == "finish") {
			this.tail = activity;
		}
		
		return activity;
	}
	
	addTransition(data) {
		let from = this.activityMap.get(data.from);
		let to = this.activityMap.get(data.to);
		
		let transition = new Transition(from, to, data);
		transition.context = this.context;
		this.transitionMap.set(data.id, transition);
		
		from.out.push(transition);
		to.in.push(transition);
		
		return transition;
	}
}

class SequntialFlow extends Flow {
	
}

class Activity {
	constructor(data) {
		this.in = [];
		this.out = [];
		
		this.action = new Function(data.action);
	}
	
	execute() {
		this.action.call(this.context);
	}
}

class Transition {
	// condition理论上需要支持几种东西：
	// 1. 当前上下文中，变量的算术和逻辑运算
	// 2. 当前上下文中，同步方法的调用（在这里支持异步，既麻烦又无必要）
	constructor(from, to, data) {
		this.from = from;
		this.to = to;
		
		this.condition = new Function(data.condition);
	}
	
	evaluate() {
		return this.condition.call(this.context);
	}
}