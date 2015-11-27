import template from "../templates/notification-panel.html";

import NotificationController from "../controllers/notification";

export default class NotificationPanelDirective {
	constructor() {
		this.template = template;
		this.restrict = "E";
		this.controller = NotificationController;
		this.controllerAs = "notificationCtrl";
	}
}