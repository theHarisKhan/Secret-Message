const btn = document.querySelector('.js-btn');
btn.addEventListener('click', ()=> {
    const msg = document.getElementById('js-input').value;
    const key = parseInt(document.getElementById('js-numb').value);
    
    var newmsg = '';
    for(let k=0; k < msg.length; k++){
        var x = msg.charCodeAt(k) + key;
        newmsg += String.fromCharCode(x);
    }
    document.querySelector('.new-msg').innerHTML = `
    <h2>Decrypt message</h2>
    <h4>${newmsg}</h4>
    `;
})