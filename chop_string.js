/**
*
* Given an input string and an array of indexes
* the function splits the string into parts ending at the
* indexes specified in the array.
* Example: chop_string("australia", [2,4,5,8]); returns - ["au", "st", "r", "ali", "a"]   
**/
function chop_string(input, indexes) {
	var start = 0;
	var output = [];
	for (i in indexes) { 
		output.push(input.slice(start, indexes[i])); 
		start = indexes[i];
	}
	output.push(input.slice(start,input.length));

	return output;
}