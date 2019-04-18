const inArray = require (`./index`);

describe (`Check inArray returns true`, () => {
	test(`Send string that is in array`, () => {
		expect(inArray(`this`, [
			`like`,
			`this`,
			`and`
		])).toBe(true);
	});

	test(`Send number that is in the array`, () => {
		expect(inArray(1, [
			0,
			1,
			2
		])).toBe(true);
	});

	test(`Send boolean that is in the array`, () => {
		expect(inArray(true, [
			false,
			false,
			true
		]));
	});
});

describe (`Check in array returns false`, () => {
	test (`Send string not in the array`, () => {
		expect(inArray(`notin`, [`this`, `that`])).toBe(false);
	});

	test (`Send number not in the array`, () => {
		expect(inArray(1, [
			2,
			3,
			4
		])).toBe(false);
	});

	test (`Send boolean not in the array`, () => {
		expect(inArray(false, [true, true])).toBe(false);
	});

	test (`Send null against array`, () => {
		expect(inArray(null, [`this`, `that`])).toBe(false);
	});

	test (`Send against null array`, () => {
		expect(inArray(`notin`, null)).toBe(false);
	});
});