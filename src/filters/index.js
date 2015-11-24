import { fromNow } from "./datetime";

export default angular.module("filters", [])
	.filter("fromNow", () => fromNow)
	.name;