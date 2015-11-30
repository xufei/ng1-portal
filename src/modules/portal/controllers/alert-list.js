export default class AlertListController {
	constructor(PortalService) {
		this.alertList = [];

		this.PortalService = PortalService;

		this.alertClasses = ["message", "twitter", "envelope", "tasks", "upload"];
	}

	init() {
		this.PortalService.getAlertList().then(result => this.alertList = result);
	}

	alertClass(type) {
		return "fa-" + type;
	}
}

AlertListController.$inject = ["PortalService"];