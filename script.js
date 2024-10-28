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

        // Add the calculation to the history array
        historyArray.push(`${expression} = ${resultValue}`);

        // Update the history element in the HTML
        updateHistory();
      } catch (error) {
        result.value = 'Error';
      }
    } else if (value === 'clear') {
      res = '';
      result.value = '';
    } else if (value === 'bksp') {
      result.value = result.value.slice(0, -1);
    } else {
      res += value;
      result.value = res;
    }
  });
});
