module.exports = function zeros(expression) {
    
  let result = "", arr = [],
  counter = { 
      'even': 0, 
      'odd': 0,
      'fives': 0,
  }

  expression = expression.replace(/!!/g, 'x'); 
  
  for (let char of expression) {
    if (char == char - 0) {
      result += char;
    } else if (char == '!') {    
      factCounter();
      result = ''; 
    } else if (char == 'x') {
      doubleFactCounter();      
      result = '';
    } 
    };
    
  function factCounter() {
     for (let i = 5; i <= result; i*=5) {
      counter['fives'] += Math.floor(result/i);      
     } 
  }; 
  
  function doubleFactCounter() {
    for (let i = 5; i <= result; i*=5) {
      if (result % 2 !== 0) {
        counter['fives'] += Math.ceil(Math.floor(result/i)/2);
      } else {
        counter['fives'] += Math.floor(Math.floor(result/i)/2);
      }
    }
  };

    if (!expression.includes('!')) {        
      arr = expression.split('*').join('').split('x').slice(0,-1);
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
          ++counter['even'];
        } else {
          ++counter['odd'];
        }
      }
    };
    
  return counter['even'] === 0 && counter['odd'] > 0 ? 0 : counter['fives']  
}
