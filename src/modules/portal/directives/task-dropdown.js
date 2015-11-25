import template from "../templates/task-dropdown.html";

import TaskListController from "../controllers/task-list";

export default class TaskDropdownDirective {
	constructor() {
		this.template = template;
		this.restrict = "E";
		this.replace = true;
		this.controller = TaskListController;
		this.controllerAs = "taskListCtrl";
	}
}