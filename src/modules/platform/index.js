import EntityManageDirective from "./directives/entity/entity-manage";
import EntityListDirective from "./directives/entity/entity-list";
import EntityPropertyListDirective from "./directives/entity/entity-property-list";

export default angular.module("modules.platform", [])
	.directive("snEntityManage", () => new EntityManageDirective())
	.directive("snEntityList", () => new EntityListDirective())
	.directive("snEntityPropertyList", () => new EntityPropertyListDirective())
	.name;