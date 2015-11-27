export default class TimelineController {
	constructor(TimelineService) {
		this.TimelineService = TimelineService;

		this.timeline = [];
	}

	init() {
		this.TimelineService.getTimeline().then(result => this.timeline = result);
	}
}

TimelineController.$inject = ["TimelineService"];