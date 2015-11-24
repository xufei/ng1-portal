import moment from "../../node_modules/moment/moment";

export function fromNow(date) {
	return moment(date).fromNow();
}