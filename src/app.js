import portal from "./modules/portal/index";

import services from "./services/index";
import filters from "./filters/index";

angular.module("ng.admin", ["sn.components", services, filters, portal]);