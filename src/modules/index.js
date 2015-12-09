import portal from "./portal/index";
import dashboard from "./dashboard/index";
import platform from "./platform/index";
import employee from "./employee/index";

import demo from "./demo/index";

export default angular.module("modules", [portal, dashboard, platform, employee, demo])
	.name;