const Calculator = require('./Calculator')


describe("Tests for Calculator Class",()=>{
	test("Test for add functionality",()=>{
		expect(Calculator.add(1,2)).toBe(3)
	})
	test("Test for subtract functionality",()=>{
		expect(Calculator.subtract(2,1)).toBe(1)
	})
	test("Test for divide functionality",()=>{
		expect(Calculator.divide(4,2)).toBe(2)
	})
	test("Test for multiply functionality",()=>{
		expect(Calculator.multiply(2,2)).toBe(4)
	})
})