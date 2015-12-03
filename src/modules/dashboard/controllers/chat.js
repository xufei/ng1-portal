export default class ChatController {
	constructor(ChatService) {
		this.ChatService = ChatService;

		this.chatList = [];
		this.newMessage = "";
	}

	init() {
		this.ChatService.getChatList().then(result => this.chatList = result);
	}

	sendMessage() {
		this.ChatService.sendMessage(this.newMessage);

		this.newMessage = "";
	}
}

ChatController.$inject = ["ChatService"];