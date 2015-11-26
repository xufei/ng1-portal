import DashboardService from "./dashboard";
import ChatService from "./chat";
import TimelineService from "./timeline";

export default angular.module("services.dashboard", [])
	.service("DashboardService", DashboardService)
	.service("ChatService", ChatService)
	.service("TimelineService", TimelineService)
	.name;