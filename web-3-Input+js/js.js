const boton = document.querySelector("#Jboton"); //const boton: esto crea una variable constante de ese nombre y sera la que referencie a nuesteo boton. Este nombre en java es arvitrario
boton.addEventListener("click", function () {
    alert("hola");
});

//"document": representa la pagina html cargada en el navegador. Asi js tiene acceso a nuestra pagina

/////////////////////////////////
//querySelector()
/////////////////////////////////
//"document.querySelector(...)": Busca en la pagina el elemento con el ID que le dimos, en este caso "Jboton"

// "addEventListener(...)": Significa "acciona ante tal evento". En este claso, el clik en el boton

//"Funcion()": es lo que se ejecutara ante el evento en el que se encuentra.