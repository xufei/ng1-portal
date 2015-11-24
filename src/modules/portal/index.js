import TopNavDirective from "./directives/top-nav";

import MessageListDirective from "./directives/message-list";
import TaskListDirective from "./directives/task-list";
import AlertListDirective from "./directives/alert-list";

import SideNavDirective from "./directives/side-nav";

export default angular.module("modules.portal", [])
	.directive("snTopNav", () => new TopNavDirective())
	.directive("snMessageList", () => new MessageListDirective())
	.directive("snTaskList", () => new TaskListDirective())
	.directive("snAlertList", () => new AlertListDirective())
	
	.directive("snSideNav", () => new SideNavDirective())
	.name;