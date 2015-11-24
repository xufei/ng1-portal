import template from "../templates/task-list.html";

import TaskListController from "../controllers/task-list";

export default class TaskListDirective {
	constructor() {
		this.template = template;
		this.restrict = "E";
		this.replace = true;
		this.controller = TaskListController;
		this.controllerAs = "taskListCtrl";
	}
}