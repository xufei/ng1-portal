import template from "../templates/message-list.html";

import MessageListController from "../controllers/message-list";

export default class MessageListDirective {
	constructor() {
		this.template = template;
		this.restrict = "E";
		this.replace = true;
		this.controller = MessageListController;
		this.controllerAs = "messageListCtrl";
	}
}