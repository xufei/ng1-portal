import template from "../templates/bar-chart-panel.html";

export default class BarChartPanelDirective {
	constructor() {
		this.template = template;
		this.restrict = "E";
	}
}