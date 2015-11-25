import template from "../templates/notification-panel.html";

export default class NotificationPanelDirective {
	constructor() {
		this.template = template;
		this.restrict = "E";
	}
}