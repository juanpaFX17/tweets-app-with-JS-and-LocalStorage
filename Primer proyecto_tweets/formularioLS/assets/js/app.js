//variables
const ListaTweets = document.getElementById('lista-tweets');

//event listeners

eventListeners();

function eventListeners(){
    //Cuando se envia el formulario
    document.querySelector('#formulario').addEventListener('submit',
    agregarTweet);

    //Borrar Tweets
    ListaTweets.addEventListener('click', borrarTweet);

    //Contenido cargado
    document.addEventListener('DOMContentLoaded', localStorageListo);
}

//Funciones

//Añadir tweet del formulario
function agregarTweet(e){
    e.preventDefault();
    //leer el valor del text area
    const tweet = document.querySelector('#tweet').value;//con value obtenemos el valor del text area
    //Crear boron de eliminar
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-tweet';
    botonBorrar.innerText = 'X';


    //Crear elemento y añadirle el contenido a la lista
    const li = document.createElement('li');
    li.innerText = tweet;
    //Añadimos el boton de borrar al elemento 
    li.appendChild(botonBorrar);
    //Añadimos el tweet
    ListaTweets.appendChild(li);

    //Añadir a localStorage
    agregarTweetLocalStorage(tweet);
}

function borrarTweet(e){
    e.preventDefault();
    if(e.target.className === 'borrar-tweet'){
        e.target.parentElement.remove();
        borrarTweetLocalStorage(e.target.parentElement.innerText);
    }
}

//Mostrar datos de LocalStorage en la lista
function localStorageListo(){
    let tweets;
    
    tweets = obtenerTweetsLocalStorage();

    tweets.forEach(function(tweet){
        const botonBorrar = document.createElement('a');
        botonBorrar.classList = 'borrar-tweet';
        botonBorrar.innerText = 'X';


        //Crear elemento y añadirle el contenido a la lista
        const li = document.createElement('li');
        li.innerText = tweet;
        //Añadimos el boton de borrar al elemento 
        li.appendChild(botonBorrar);
        //Añadimos el tweet
        ListaTweets.appendChild(li);
    });
}

//Agrega tweet a localStorage
function agregarTweetLocalStorage(tweet){
    let tweets;
    tweets = obtenerTweetsLocalStorage();

    //Añadir el nuevo tweet
    tweets.push(tweet);
    //Convertir de arreglo a string de tipo JSON para local storage
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

//Comprobar que haya elementos en localStorage, retorna un arreglo
function obtenerTweetsLocalStorage(){
    let tweets;
    //Revisamos los valores de local storage
    if(localStorage.getItem('tweets') === null){
        tweets = [];
    }else{
        tweets = JSON.parse(localStorage.getItem('tweets'));//convertimos el elemento json a un elemento de javascript analizandolo ya puede ser un string, arreglo, obejto etc.
    }
    return tweets;//retornamos un arreglo
}


//Eliminar tweet de local storage

function borrarTweetLocalStorage(tweet){
    let tweets, tweetBorrar;

    tweetBorrar = tweet.substring(0,tweet.length - 1);

    tweets = obtenerTweetsLocalStorage();

    //con index podemos saber en que elemento del arreglo vamos 
    tweets.forEach(function(tweet, index){
        if(tweet === tweetBorrar){
            tweets.splice(index, 1);
        }
    });

    localStorage.setItem('tweets', JSON.stringify(tweets));
}