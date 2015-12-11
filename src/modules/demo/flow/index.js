import EuclidDirective from "./directives/euclid";
import ChoiceDirective from "./directives/choice";
import ShoppingDirective from "./directives/shopping";

export default angular.module("modules.demo.flow", [])
	.directive("snEuclid", () => new EuclidDirective())
	.directive("snChoice", () => new ChoiceDirective())
	.directive("snShopping", () => new ShoppingDirective())
	.name;