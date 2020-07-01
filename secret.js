/*
The Caesar cipher is a type of substitution cipher in which each
letter in the plaintext is shifted to a certain number of places
down the alphabet. For example, with a shift of 1, A would be
replaced by B, B would become C, and so on. The method is named
after Julius Caesar, who allegedly used it to communicate with his generals.

For example:
Input: "defend the east wall of the castle"
Output: "efgfoe uif fbtu xbmm pg uif dbtumf"
*/

const encryptbtn = document.querySelector('.encrypt-btn');
const decryptbtn = document.querySelector('.decrypt-btn');

encryptbtn.addEventListener('click', ()=> {
    const msg = document.querySelector('.js-input').value;
    const key = parseInt(document.querySelector('.js-numb').value);
    if (msg !== "" & key !== ""){
        var newmsg = '';
        for(let k=0; k < msg.length; k++){
            var x = msg.charCodeAt(k) + key;
            newmsg += String.fromCharCode(x);
        }
        document.querySelector('.new-msg').innerHTML = `
        <h2>Encrypt message</h2>
        <p>${newmsg}</p>
        `;
    }
    else{
        alert("!Please Enter your message & Secret key!");
    } 
});

decryptbtn.addEventListener('click', ()=> {
    const msg = document.querySelector('.js-input').value;
    const key = parseInt(document.querySelector('.js-numb').value);
    
    if (msg !== "" & key !== ""){
        var newmsg = '';
        for(let k=0; k < msg.length; k++){
            var x = msg.charCodeAt(k) - key;
            newmsg += String.fromCharCode(x);
        }
        document.querySelector('.new-msg').innerHTML = `
        <h2>Decrypt message</h2>
        <p>${newmsg}</p>
        `;
    }
    else{
        alert("!Please Enter your message & Secret key!");
    }
})