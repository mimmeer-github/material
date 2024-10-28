const result = document.getElementById('result');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click',   
 () => {
        const value = button.dataset.value;

        if   
 (value === '=') {
            try {
                result.value = eval(result.value);
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
