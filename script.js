const result = document.getElementById('result');
const buttons = document.querySelectorAll('md-filled-button');
let res = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.dataset.value;

    if (value === '=') {
      try {
        const expression = result.value;
        const math = new Function('return ' + expression);
        const resultValue = math();
        result.value = resultValue;
      } catch (error) {
        result.value = 'Error';
      }
    } else if (value === 'clear') {
      res = '';
      result.value = '';
    } else {
      res += value;
      result.value = res;
    }
  });
});
