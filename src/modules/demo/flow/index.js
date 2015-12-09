import EuclidDirective from "./directives/euclid";
import ChoiceDirective from "./directives/choice";

export default angular.module("modules.demo.flow", [])
	.directive("snEuclid", () => new EuclidDirective())
	.directive("snChoice", () => new ChoiceDirective())
	.name;