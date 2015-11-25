import template from "../templates/timeline-panel.html";

import "../css/timeline-panel.css";

export default class TimelinePanelDirective {
	constructor() {
		this.template = template;
		this.restrict = "E";
	}
}