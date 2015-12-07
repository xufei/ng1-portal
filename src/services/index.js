import portal from "./portal/index";
import dashboard from "./dashboard/index";
import platform from "./platform/index";
import employee from "./employee/index";

export default angular.module("services", [portal, dashboard, platform, employee]).name;