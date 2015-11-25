import template from "../templates/message-dropdown.html";

import MessageListController from "../controllers/message-list";

export default class MessageDropdowntDirective {
	constructor() {
		this.template = template;
		this.restrict = "E";
		this.replace = true;
		this.controller = MessageListController;
		this.controllerAs = "messageListCtrl";
	}
}