import PortalService from "./portal";
import RouterService from "./router";

export default angular.module("services.portal", [])
	.service("PortalService", PortalService)
	.service("RouterService", RouterService)
	.name;