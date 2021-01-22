(()=>{

    const typed = new Typed('.typed', {
        stringsElement: '#profesiones', // ID del elemento que contiene cadenas de texto a mostrar.
        typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
        startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
        backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
        // smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
        shuffle: false, // Alterar el orden en el que escribe las palabras.
        backDelay: 1000, // Tiempo de espera despues de que termina de escribir una palabra.
        loop: true, // Repetir el array de strings
        loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
        showCursor: true, // Mostrar cursor palpitanto
        cursorChar: '|', // Caracter para el cursor
        contentType: 'html', // 'html' o 'null' para texto sin formato
    });

    var btnAbrirPopup = document.querySelectorAll('.btn-abrir-popup'),
    overlay = document.querySelector('#overlay'),
    popup = document.querySelectorAll('.popup'),
    btnCerrarPopUp = document.querySelectorAll('.btn-cerrar-popup');

    let popupIndex = 0;


    for(let i = 0; i < btnAbrirPopup.length; i++){
        btnAbrirPopup[i].addEventListener('click', function(){
            popupIndex = this.getAttribute('data-pyt');
            overlay.classList.add('active');
            popup[popupIndex].classList.add('active');
        });
    }


    for(let i = 0; i< btnCerrarPopUp.length; i++){
        btnCerrarPopUp[i].addEventListener('click', function(){
            overlay.classList.remove('active');
            console.log(popupIndex);
            console.log(popup[popupIndex]);
            popup[popupIndex].classList.remove('active');
        })

    }

})()