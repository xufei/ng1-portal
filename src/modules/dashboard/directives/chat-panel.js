import template from "../templates/chat-panel.html";

import "../css/chat-panel.css";

export default class ChatPanelDirective {
	constructor() {
		this.template = template;
		this.restrict = "E";
	}
}