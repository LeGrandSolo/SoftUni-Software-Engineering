function lockedProfile() {
    let buttons = document.querySelectorAll('button');
    for (const button of buttons) {
        button.addEventListener('click', showOrHide);
    }
    function showOrHide(e) {
        let isChecked = e.target.parentElement.querySelector('[type="radio"]').checked;
        if (!isChecked) {
            let style = e.target.parentElement.querySelector('div').style;
            if (style.display !== 'block') {
                style.display = 'block';
                e.target.textContent = 'Hide it';
            } else {
                style.display = 'none';
            }
        }
    }
}