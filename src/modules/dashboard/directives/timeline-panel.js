import template from "../templates/timeline-panel.html";

import TimelineController from "../controllers/timeline";

import "../css/timeline-panel.css";

export default class TimelinePanelDirective {
	constructor() {
		this.template = template;
		this.restrict = "E";
		this.controller = TimelineController;
		this.controllerAs = "timelineCtrl";
	}
}