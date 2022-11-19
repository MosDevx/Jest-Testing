const stringLength = require('./stringLength')


describe("tests for stringLength Function",()=>{

	test('check string length',()=>{
		expect(stringLength('Hello')).toBe(5)
	});

	test('function throws error when length of input is less than 1',()=>{
		expect(()=>stringLength('')).toThrow('Input less than 1')
	})	
	
	test('function throws error when length of input is greater than 10',()=>{
		expect(()=>stringLength('Hello There World')).toThrow('Input greater than 10')
	})
})