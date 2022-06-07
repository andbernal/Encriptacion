



var botonEncriptacion = document.querySelector("#botonEncriptacion");
var botonCopiar = document.querySelector("#botonCopiar");
var botonDesencriptador = document.querySelector("#botonDesencriptador");

botonEncriptacion.addEventListener("click", function (event) {
    event.preventDefault();
    var form = document.querySelector("#cifrador");
    var input_text = form.input_text.value;
    
    var textoResultado = encriptar(input_text);
    
    textoSalida.innerHTML = textoResultado;


    //mostrarBotonesCopiar();
})

botonDesencriptador.addEventListener("click", function(event)
{
    event.preventDefault();
    var entrega = document.querySelector("#textoSalida");
    
    console.log(entrega);
    var form = document.querySelector("#input_text");
    textoListo = form.value;
    console.log(textoListo);
       
    var textoDesencriptado = desencriptar(textoListo);
    console.log(textoDesencriptado);

    
    textoSalida.innerHTML = textoDesencriptado;
    
});


botonCopiar.addEventListener("click", function (event) {
    event.preventDefault();
    let formulario = document.getElementById("cifrador");
    formulario.reset();
    
    var inputCopiado = document.querySelector("#textoSalida");
    entradaEncriptada = inputCopiado.textContent;
    var form = document.getElementById("input_text");
    form.value=entradaEncriptada;
    console.log(form);
    //var resultadoCopiado = document.querySelector(".campo");
    
    
})


    

function encriptar(input_text) 
{
        var encriptar = [];
        var resultado = ""
        input_text = input_text.toLowerCase();
        
        for (var i = 0; i < input_text.length; i++) {
            
            if (input_text[i] == "a") {
                encriptar[i] = "ai";
            }
            else if (input_text[i] == "i") {
                encriptar[i] = "imes";
            }
            else if (input_text[i] == "e") {
                encriptar[i] = "enter";
            }
            else if (input_text[i] == "o") {
                encriptar[i] = "ober";
            }
            else if (input_text[i] == "u") {
                encriptar[i] = "ufat";
            }
            else {
                encriptar[i] = input_text[i];
            }
        }
        
        for (var x = 0; x < encriptar.length; x++) {
            resultado += encriptar[x];
        }
        
        return resultado;
}

botonClear.addEventListener("click", function(event)
    {
    let formulario = document.getElementById("cifrador");
    formulario.reset();
    textoSalida.innerHTML = "";
    }
)

function desencriptar(text) {
    desencriptar = text;

        if (text.includes("enter")) 
        {
                desencriptar = desencriptar.replace(/enter/g, "e");

        }
        if (text.includes("imes")) 
        {
                desencriptar = desencriptar.replace(/imes/g, "i");
        }
        if (text.includes("ai")) 
        {
                desencriptar = desencriptar.replace(/ai/g, "a");
        }
        if (text.includes("ober")) 
        {
                desencriptar = desencriptar.replace(/ober/g, "o");
        }
        if (text.includes("ufat")) 
        {
                desencriptar = desencriptar.replace(/ufat/g, "u");
        }
    return desencriptar;

}
        

function copiaralpanel(text) {

    var copia = document.querySelector("#input_text");
    copia.textContent = inputCopiado;

    return copia;

};
/*

        const mostrarMensaje = () => {
            mensaje_copiado.style.display = "block";
            setTimeout(() => {
                mensaje_copiado.style.display = "none";
            }, 2000);

        };



        const cambioColorTexto = (color) => {
            textoSalida.color = color;
        };



        
         */


    




