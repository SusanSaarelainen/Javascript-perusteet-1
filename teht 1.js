var input = require("readline-sync"); //vaatii kirjaston readline-sync asentamista (view -> terminal -> npm i readline-sync)
var nimi = input.question("Anna sana: ");

function kaanna(nimi) {
  var kaannos = "";
  for (var i = nimi.length - 1; i >= 0; i--) {
    kaannos += nimi[i];
  }
  return kaannos;
}

console.log("Sana toisinpäin: " + kaanna(nimi));

function onkoSamat() {
  if (nimi == kaanna(nimi)) {
    console.log("Sana on palindromi.");
  } else {
    console.log("Sana ei ole palindromi.");
  }
}

onkoSamat();
