import portal from "./portal/index";
import dashboard from "./dashboard/index";

export default angular.module("modules", [portal, dashboard])
	.name;