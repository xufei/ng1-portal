export default class NotificationController {
	constructor(NotificationService) {
		this.NotificationService = NotificationService;

		this.notifications = [];
	}

	init() {
		this.NotificationService.getNotifications().then(result => this.notifications = result);
	}
}

NotificationController.$inject = ["NotificationService"];