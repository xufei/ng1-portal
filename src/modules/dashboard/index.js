import DashboardDirective from "./directives/dashboard";

import AggregationItemPanelDirective from "./directives/aggregation-item-panel";
import ChatPanelDirective from "./directives/chat-panel";
import TimelinePanelDirective from "./directives/timeline-panel";
import AreaChartPanelDirective from "./directives/area-chart-panel";
import BarChartPanelDirective from "./directives/bar-chart-panel";
import DonutChartPanelDirective from "./directives/donut-chart-panel";
import NotificationPanelDirective from "./directives/notification-panel";

export default angular.module("modules.dashboard", [])
	.directive("snDashboard", () => new DashboardDirective())
	
	.directive("snAggregationItemPanel", () => new AggregationItemPanelDirective())
	.directive("snChatPanel", () => new ChatPanelDirective())
	.directive("snTimelinePanel", () => new TimelinePanelDirective())
	.directive("snAreaChartPanel", () => new AreaChartPanelDirective())
	.directive("snBarChartPanel", () => new BarChartPanelDirective())
	.directive("snDonutChartPanel", () => new DonutChartPanelDirective())
	.directive("snNotificationPanel", () => new NotificationPanelDirective())
	.name;