import template from "../templates/aggregation-item-panel.html";

import "../css/aggregation-item-panel.css";

export default class AggregationItemPanelDirective {
	constructor() {
		this.template = template;
		this.restrict = "E";
		this.scope = {
			data: "="	
		};
	}
}