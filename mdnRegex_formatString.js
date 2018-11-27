/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

/* Reg expression to swap name order in string seperated by spaces 
* and semi-colon and 
* sorts the resulting array
*/
alert(swapNames());
function swapNames(){

  var names = 'Orange Trump ;Fred Barney; Helen Rigby ; Bill Abel ; Chris Hand';
  var output = ['-------------- Original String\n', names + '\n'];

  // prepare two regular expression patterns and array storage.
  // split the string into array elements.

  // pattern 1: possible white space then semicolon then possible 
  // white space. This splits the string returning individual 'first_name last_name'
  var pattern = /\s*;\s*/;

  // Break the string into pieces separated by the pattern above and
  // store the pieces in an array called nameList
  var nameList = names.split(pattern);

  // new pattern: one or more characters then spaces then characters.
  // Use parentheses to "memorize" portions of the pattern.
  // The memorized portions are referred to later.
  pattern = /(\w+)\s+(\w+)/;

  // new array for holding names
  var bySurnameList = [];

  // display the name array and populate the new array
  // with comma-separated names, last name first
  //
  // the replace method removes anything matching the pattern
  // and replaces it with the memorized string-the second memorized portion
  // followed by a comma, a space and the first memorized portion.
  //
  // the variables $1 and $2 refer to the portions memorized while matching the pattern
  output.push('----------- After Split by Regular expression');

  var i, len;
  for(i = 0, len = nameList.length; i < len; i++){
    output.push(nameList[i]);
    bySurnameList[i] = nameList[i].replace(pattern,'$2, $1');
  }

  // display the new array
  output.push('-------------- Names Reversed');
  for (i = 0, len = bySurnameList.length; i<len; i++){
    output.push(bySurnameList[i]);
  }

  // sort by last name, then display the sorted array.
  bySurnameList.sort();
  output.push('------------------- Sorted');
  for (i = 0, len = bySurnameList.length; i<len; i++) {
    output.push(bySurnameList[i]);
  }

  output.push('-------------------- End');
  console.log(output.join('\n'));
  
  return output;
  
}


/*
* Function that matches any string that begins 
* and ends with the same vowel
returns a regex rather
*/ 
function matchStringVowel(theString) {
  //reg variable below finds/mathes a substring of length greater than 1 
  //that starts and ends with same character
  var reg = /(.).*\1/; 
  
  //-- using reg pattern literal
  //var myPattern = /(^[a,e,i,0,u]).*\1/;
  //var re = myPattern.test('abcda');
  
  //--- using RegExp object literal
  var re = new RegExp('(^[a,e,i,0,u]).*\\1$');
  
  return re.test(theString);
  
}

alert(matchStringVowel('aewxyzae'));

/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 
 * Function to reverse string using the split, reverse, and join methods.
 * If an exception is thrown, catch it and print the contents of the exception's on a new line.
 * Print s (the reversed string) on a new lin if no exception was thrown
 * else print s (the original string) if an exception was thrown
 */
function reverseString(s) {
    
    try {
        var splitArray = s.split("");
        splitArray.reverse();
        s = splitArray.join("");
        console.log(s);
         
    } catch (e) {
        console.log(e.message);
        console.log(s);
    } 
}


















