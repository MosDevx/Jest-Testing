const reverseString = require('./reverseString')

describe('Tests for reverse string function',()=>{
	test('Test to check wether string is reversed',()=>{
		expect(reverseString('hey')).toBe('yeh')
	})
})