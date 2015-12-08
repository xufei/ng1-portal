import EntityService from "./entity";
import FlowService from "./flow";

export default angular.module("services.entity", [])
	.service("EntityService", EntityService)
	.service("FlowService", FlowService)
	.name;