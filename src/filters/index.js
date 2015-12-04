import { fromNow } from "./datetime";
import { gender } from "./gender";

export default angular.module("filters", [])
	.filter("fromNow", () => fromNow)
	.filter("gender", () => gender)
	.name;