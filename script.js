const inputTexto = document.querySelector(".input-texto");
const mensaje = document.querySelector(".mensaje");
const texto1 = document.querySelector(".textoResponse");
const texto2 = document.querySelector(".textoResponse_sub");
const botonCopiar = document.querySelector(".encriptar_2");

function btnEncriptar() {
  const TextoEncriptar = encriptar(inputTexto.value);
  mensaje.value = TextoEncriptar;
  mensaje.style.backgroundImage = "none";
  mensaje.style.pointerEvents = "auto";
  texto1.style.display = "none";
  texto2.style.display = "none";
  botonCopiar.style.display = "block";
  //   translate X and Y
  botonCopiar.style.transform = "translateX(70px) translateY(150px)";

  inputTexto.value = "";
}

function btnDesencriptar() {
  const TextoEncriptar = desencriptar(inputTexto.value);
  mensaje.value = TextoEncriptar;
  mensaje.style.backgroundImage = "url(img/joven.png)";
  texto1.style.display = "none";
  texto2.style.display = "none";
  botonCopiar.style.display = "block";
  inputTexto.value = "";
}

function btnCopiar() {
  mensaje.select();
  navigator.clipboard.writeText(mensaje.value);
  mensaje.style.backgroundImage = "url(img/joven.png)";
  texto1.style.display = "block";
  texto2.style.display = "block";
  mensaje.value = "";
  alert("Texto copiado");
}

function encriptar(stringEncriptar) {
  // transform e character to word "enter"
  let codigoSecreto = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringEncriptar = stringEncriptar.toLowerCase();

  for (let i = 0; i < codigoSecreto.length; i++) {
    if (stringEncriptar.includes(codigoSecreto[i][0])) {
      stringEncriptar = stringEncriptar.replaceAll(
        codigoSecreto[i][0],
        codigoSecreto[i][1]
      );
    }
  }
  return stringEncriptar;
}

function desencriptar(stringDesencriptar) {
  // transform e character to word "enter"
  let codigoSecreto = [
    ["a", "ai"],
    ["e", "enter"],
    ["i", "imes"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringDesencriptar = stringDesencriptar.toLowerCase();

  for (let i = 0; i < codigoSecreto.length; i++) {
    if (stringDesencriptar.includes(codigoSecreto[i][1])) {
      stringDesencriptar = stringDesencriptar.replaceAll(
        codigoSecreto[i][1],
        codigoSecreto[i][0]
      );
    }
  }
  return stringDesencriptar;
}
