/* eslint-disable no-console */

const createValidator = schema => values => new Promise((resolve) => {
	const result = schema.validate(values);
	if (result.error) {
		console.error(result.error.message);
		resolve(null);
	} else {
		resolve(result.value);
	}
});

module.exports = {
	createValidator,
};
