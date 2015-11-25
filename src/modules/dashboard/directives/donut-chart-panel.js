import template from "../templates/donut-chart-panel.html";

export default class DonutChartPanelDirective {
	constructor() {
		this.template = template;
		this.restrict = "E";
	}
}