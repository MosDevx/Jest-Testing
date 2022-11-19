const capitalizeString = function(string){
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
}
console.log(capitalizeString("ssd sas"));

module.exports= capitalizeString