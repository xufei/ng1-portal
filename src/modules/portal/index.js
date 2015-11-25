import TopNavDirective from "./directives/top-nav";

import MessageDropdownDirective from "./directives/message-dropdown";
import TaskDropdownDirective from "./directives/task-dropdown";
import AlertDropdownDirective from "./directives/alert-dropdown";

import SideNavDirective from "./directives/side-nav";

import MessageListDirective from "./directives/message-list";

export default angular.module("modules.portal", [])
	.directive("snTopNav", () => new TopNavDirective())
	.directive("snMessageDropdown", () => new MessageDropdownDirective())
	.directive("snTaskDropdown", () => new TaskDropdownDirective())
	.directive("snAlertDropdown", () => new AlertDropdownDirective())
	
	.directive("snSideNav", () => new SideNavDirective())
	
	.directive("snMessageList", () => new MessageListDirective())
	.name;