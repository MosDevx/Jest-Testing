const reverseString = (s="") =>{
	return s.split('').reverse().join('')
}

console.log(reverseString('hey'))

module.exports = reverseString