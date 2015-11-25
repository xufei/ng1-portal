import template from "../templates/top-nav.html";

import "../css/top-nav.css";

export default class TopNavDirective {
	constructor() {
		this.template = template;
		this.restrict = "E";
	}
}