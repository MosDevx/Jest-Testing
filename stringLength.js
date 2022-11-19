const stringLength = (string) =>{

	if(string.length < 1){
		throw new Error('Input less than 1')
	}else if(string.length > 10){
		
		throw new Error('Input greater than 10')
	}else{

		return string.length
	}
	
}

module.exports = stringLength