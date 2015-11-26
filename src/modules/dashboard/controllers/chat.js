

export default class ChatController {
	constructor(ChatService) {
		this.ChatService = ChatService;
		
		this.chatList = [];
		this.newMessage = {
			content: "aaa"
		};
	}
	
	init() {
		this.ChatService.getChatList().then(result => this.chatList=result);
	}
	
	sendMessage() {
		this.ChatService.sendMessage(this.newMessage);
		
		this.newMessage = {
			content: ""
		};
	}
}

ChatController.$inject = ["ChatService"];