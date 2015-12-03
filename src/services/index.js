import portal from "./portal/index";
import dashboard from "./dashboard/index";
import employee from "./employee/index";

export default angular.module("services", [portal, dashboard, employee]).name;