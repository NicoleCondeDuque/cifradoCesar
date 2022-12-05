import cipher from './cipher.js';
const botonCifrar = document.getElementById("Encode");
botonCifrar.addEventListener("click", function(){
  const textToCode = document.getElementById("textToCode").value;
  const positionToMove = document.getElementById("positionToMove").value;
  const resultEncode = cipher.encode(positionToMove, textToCode.toUpperCase());
  document.getElementById("showConvertedMessage").innerText = resultEncode;
})
const botonDescifrar = document.getElementById("Decode");
botonDescifrar.addEventListener("click", function(){
  const textToCode = document.getElementById("textToCode").value;
  const positionToMove = document.getElementById("positionToMove").value;
  const resultDecode = cipher.decode(positionToMove, textToCode.toUpperCase());
  document.getElementById("showConvertedMessage").innerText = resultDecode;
});