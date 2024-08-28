const ingresarTexto = document.getElementById("ingresarTexto");
const botonEncriptar = document.getElementById("botonEncriptar");
const botonDesencriptar = document.getElementById("botonDesencriptar");
const botonOculto = document.getElementById("botonOculto");
const mensajeFinal = document.getElementById("mensajeFinal");
const muñeco = document.getElementById("muñeco");

let remplazar =[
    ["e" , "enter"],
    ["o" , "ober"],
    ["i" , "imes"],
    ["a" , "ai"],
    ["u" , "ufat"],
]

/*const remplace = (nuevoValor) =>{
  mensajeFinal.innerHTML = nuevoValor;
    muñeco.style.display = "none";
    informacionDerecha.style.display = "none";
    botonOculto.style.display = "block";
    derecha.classList.add("ajustar");
    mensajeFinal.classList.add("ajustar");
}*/

botonEncriptar.addEventListener("click", () =>{
    const texto = ingresarTexto.value.toLowerCase();
    function encriptar(newText){
        for(let i = 0; i < remplazar.length; i++){
            if(newText.includes(remplazar[i][0])){
                newText = newText.replaceAll(remplazar[i][0], remplazar[i][1]);
            };
        };
        return newText
    }

    const textoEncriptado = encriptar(texto);

    mensajeFinal.innerHTML = textoEncriptado;
    muñeco.style.display = "none";
    informacionDerecha.style.display = "none";
    botonOculto.style.display = "block";
    derecha.classList.add("ajustar");
    mensajeFinal.classList.add("ajustar");
});

botonDesencriptar.addEventListener("click", () =>{
  const texto = ingresarTexto.value.toLowerCase();
  function desencriptar(newText){
    for (let i = 0; i < remplazar.length; i++){
      if(newText.includes(remplazar[i][1])){
        newText = newText.replaceAll(remplazar[i][1],remplazar[i][0]);
      };
    };
    return newText
  }
  const textoDesencriptado = desencriptar(texto);
  mensajeFinal.innerHTML = textoDesencriptado;
  })
