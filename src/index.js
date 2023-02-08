module.exports = function check(str, bracketsConfig) {
  let stack = [];

  // const OPEN_BRACKETS = ['(', '{', '[', '|', '1', '3', '5', '7', '8'];
  // const BRACKETS_PAIR = {
  //   [')']: '(',
  //   ['}']: '{',
  //   [']']: '[',
  //   ['|']: '|',
  //   ['1']: '2',
  //   ['3']: '4',
  //   ['5']: '6',
  //   ['7']: '7',
  //   ['8']: '8',
  // }

  const OPEN_BRACKETS = Object.keys(Object.fromEntries(bracketsConfig));
  const BRACKETS_PAIR = Object.fromEntries(bracketsConfig)

  // console.log(BRACKETS_PAIR)
  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];
    // console.log(OPEN_BRACKETS)
    if ((OPEN_BRACKETS).includes(currentSymbol)) {
      if (currentSymbol === stack[stack.length - 1] && currentSymbol === BRACKETS_PAIR[ stack[stack.length - 1]]) {
        stack.pop(currentSymbol);
      } else {
        stack.push(currentSymbol);
        // console.log(true)
      }
    } else {
      if (stack.length === 0) {
        return false;
      }

      let topElement = stack[stack.length - 1];
      if (currentSymbol === BRACKETS_PAIR[topElement]) {
        stack.pop(currentSymbol);
      } else {
        return false;
      }
    }


  }
  return stack.length === 0;
}