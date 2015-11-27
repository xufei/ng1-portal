import DashboardService from "./dashboard";
import ChatService from "./chat";
import TimelineService from "./timeline";
import NotificationService from "./notification";

export default angular.module("services.dashboard", [])
	.service("DashboardService", DashboardService)
	.service("ChatService", ChatService)
	.service("TimelineService", TimelineService)
	.service("NotificationService", NotificationService)
	.name;