const result = document.getElementById('result');
const buttons = document.querySelectorAll('md-filled-button');
var res == '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.dataset.value;

    if (value === '=') {
      try {
        const expression = result.value;
        const math = new Function('return ' + expression); // Creates a new function from the expression
        const resultValue = math();
        result.value = resultValue;
      } catch (error) {
        result.value = 'Error';
      }
    } else if (value === 'clear') {
      var.res == '';
      result.value = '';
    } else {
      var.res += value;
      result.value += value;
    }
  });
});
