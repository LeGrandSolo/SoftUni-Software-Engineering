function toggle() {
    let moreTxt = document.getElementById('extra');
    let buttonFunctionality = document.getElementsByClassName('button')[0].textContent;
    if (buttonFunctionality === 'More') {
        moreTxt.style.display = 'block';
        document.getElementsByClassName('button')[0].textContent = 'Less';
    }else if (buttonFunctionality === 'Less') {
        moreTxt.style.display = 'none';
        document.getElementsByClassName('button')[0].textContent = 'More';
    }
}