const genders = ["Female", "Male"];

export function gender(gender) {
	gender = gender - 0;
	return genders[gender];
}