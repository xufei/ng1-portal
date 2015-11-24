import template from "../templates/task-list.html";

export default class TaskListDirective {
	constructor() {
		this.template = template;
		this.restrict = "E";
		this.replace = true;

		this.scope = {
		};
	}
}