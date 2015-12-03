
export default class DashboardController {
	constructor() {
		this.aggregationItems = [];
	}
	
	init() {
		this.aggregationItems = [
			{theme: "primary", icon: "fa-comments", count: 26, content: "New Comments!", state: "Comments"},
			{theme: "info", icon: "fa-tasks", count: 14, content: "New Messages!", state: "Messages"},
			{theme: "success", icon: "fa-shopping-cart", count: 124, content: "New Orders!", state: "Orders"},
			{theme: "warning", icon: "fa-support", count: 13, content: "Support Tickets!", state: "Tickets"}
		];
	}
}