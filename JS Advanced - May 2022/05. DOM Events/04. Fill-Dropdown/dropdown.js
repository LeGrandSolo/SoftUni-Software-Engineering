function addItem() {
    let text = document.getElementById('newItemText');
    let value = document.getElementById('newItemValue');
    let menu = document.getElementById('menu');
    let opt = document.createElement('option');
    opt.text = text.value;
    opt.value = value.value;
    menu.appendChild(opt);
    text.value = '';
    value.value = '';
}