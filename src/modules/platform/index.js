import EntityManageDirective from "./directives/entity/entity-manage";
import EntityListDirective from "./directives/entity/entity-list";
import EntityPropertyListDirective from "./directives/entity/entity-property-list";
import EntityRuleListDirective from "./directives/entity/entity-rule-list";

import FlowDirective from "./directives/flow/flow";

export default angular.module("modules.platform", [])
	.directive("snEntityManage", () => new EntityManageDirective())
	.directive("snEntityList", () => new EntityListDirective())
	.directive("snEntityPropertyList", () => new EntityPropertyListDirective())
	.directive("snEntityRuleList", () => new EntityRuleListDirective())
	
	.directive("snFlow", () => new FlowDirective())
	.name;