function letterCombinations(digits) {
  if (!digits) {
    return [];
  }
  
  const mapping = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
  };
  
  const result = [];
  backtrack('', digits);
  return result;
  
  function backtrack(combination, nextDigits) {
    if (nextDigits.length === 0) {
      result.push(combination);
      return;
    }
    
    const digit = nextDigits[0];
    const letters = mapping[digit];
    
    for (let i = 0; i < letters.length; i++) {
      backtrack(combination + letters[i], nextDigits.slice(1));
    }
  }
}
module.exports = letterCombinations;
