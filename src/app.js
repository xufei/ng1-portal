import modules from "./modules/index";
import services from "./services/index";
import filters from "./filters/index";

angular.module("ng.admin", ["sn.components", services, filters, modules]);