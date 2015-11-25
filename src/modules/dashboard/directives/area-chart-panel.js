import template from "../templates/area-chart-panel.html";

export default class AreaChartPanelDirective {
	constructor() {
		this.template = template;
		this.restrict = "E";
	}
}