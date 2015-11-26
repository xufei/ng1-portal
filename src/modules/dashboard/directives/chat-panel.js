import template from "../templates/chat-panel.html";

import ChatController from "../controllers/chat";

import "../css/chat-panel.css";

export default class ChatPanelDirective {
	constructor() {
		this.template = template;
		this.restrict = "E";
		this.controller = ChatController;
		this.controllerAs = "chatCtrl";
	}
}