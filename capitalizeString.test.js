const capitalizeString = require('./capitalizeString')

describe('Test for Capitalizing String',()=>{
	test("String is returned capitalized",()=>{
		expect(capitalizeString('big blue box')).toBe('Big blue box')
	})
})