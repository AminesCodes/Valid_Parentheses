/* Valid Parentheses

Given a string containing just the characters '(', ')', '{', '}', '[' and ']', 
determine if the input string is valid.

An input string is valid if:
1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
*/

const isValid = (str) => {

  if (!str.length) {
    return;
  }

    if (str.length % 2 !== 0){
      return false;
    } else {
      let arr = str.split('');
      let keepChecking = true;
      
      while (arr.length !== 0 && keepChecking){
        for (let i = 0; i < arr.length/2; i++){
          if (arr[i] === '(' && arr[i+1] === ')'
              || arr[i] === '[' && arr[i+1] === ']'
              || arr[i] === '{' && arr[i+1] === '}'){
            arr.splice(i, 2);
            i -= 2;
          } else {
            keepChecking = false;
          }
        }
      }
  
      if (arr.length === 0){
        return true;
      } else {
        return false;
      }
    }
  };
  
  let myStr = '()({}[()][]{})';
  console.log(isValid(myStr));