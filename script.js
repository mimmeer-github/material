const result = document.getElementById('result');
const buttons = document.querySelectorAll('md-filled-button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.dataset.value;

    if (value === '=') {
      try {
        // Safer alternative to eval
        const expression = result.value;
        const math = new Function('return ' + expression); // Creates a new function from the expression
        const resultValue = math();
        result.value = resultValue;
      } catch (error) {
        result.value = 'Error';
      }
    } else if (value === 'clear') {
      result.value = '';
    } else {
      result.value += value;
    }
  });
});
