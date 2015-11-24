export default class MessageList {
	constructor(PortalService) {
		this.messageList = [];
		
		this.PortalService = PortalService;
	}
	
	init() {
		this.PortalService.getMessageList().then(result => this.messageList=result);
	}
}

MessageList.$inject = ["PortalService"];