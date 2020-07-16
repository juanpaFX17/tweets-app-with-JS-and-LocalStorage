const boton = document.querySelector('.buton');
const twets = document.querySelector('#list')

boton.addEventListener('click', function(e){
    var elemento = document.createElement('li');
    var contenido = document.querySelector('#entrada').value;
    elemento.textContent = contenido;
    twets.appendChild(elemento);
    let len = localStorage.length;
    localStorage.setItem(len+1,contenido);
});

function mirarLocal(){
    let len = localStorage.length;
    for(var i=1; i<=len; i++){
        var elemento = document.createElement('li');
        elemento.textContent = localStorage.getItem(i);
        twets.appendChild(elemento);
    }
}

mirarLocal();






