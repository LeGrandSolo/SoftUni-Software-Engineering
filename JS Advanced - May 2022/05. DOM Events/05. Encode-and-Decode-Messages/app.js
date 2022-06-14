function encodeAndDecodeMessages() {
    let message = document.querySelectorAll('div')[1];
    let recieverMessage = document.querySelectorAll('div')[2];
    console.log(document.querySelectorAll('div'));
    message.querySelector('button').addEventListener('click', encrypt);
    recieverMessage.querySelector('button').addEventListener('click', decrypt);
    function encrypt(e) {
        let txt = e.target.parentElement.querySelector('textarea').value;
        txt = txt.split('');
        for (let i = 0; i < txt.length; i++) {
            txt[i] = txt[i].charCodeAt() + 1;
            txt[i] = String.fromCharCode(txt[i]);
        }
        recieverMessage.querySelector('textarea').value = txt.join('');
        e.target.parentElement.querySelector('textarea').value = '';
    }
    function decrypt(e) {
        let txt = e.target.parentElement.querySelector('textarea').value;
        txt = txt.split('');
        for (let i = 0; i < txt.length; i++) {
            txt[i] = txt[i].charCodeAt() - 1;
            txt[i] = String.fromCharCode(txt[i]);
        }
        recieverMessage.querySelector('textarea').value = txt.join('');
    }
}