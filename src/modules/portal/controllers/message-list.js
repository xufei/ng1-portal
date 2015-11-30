export default class MessageListController {
	constructor(PortalService) {
		this.messageCols = [
			{ label: "Title", key: "title" },
			{ label: "Content", key: "content" },
			{ label: "Date", key: "date" }
		];
		this.messageList = [];

		this.PortalService = PortalService;
	}

	init() {
		this.PortalService.getMessageList().then(result => this.messageList = result);
	}
}

MessageListController.$inject = ["PortalService"];