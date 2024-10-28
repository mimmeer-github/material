const result = document.getElementById('result');
const buttons = document.querySelectorAll('md-filled-button');

buttons.forEach(button => {
    md-filled-button.addEventListener('click',   
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
