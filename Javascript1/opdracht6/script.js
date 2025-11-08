let zin1 = "- de zee die bruist";
let zin2 = "- je stortte in m'n zee en we waaren gelukkig";
let zin3 = "- zinnen van de zee";
let zin4 = "- maar wat zo'n zin zee";
let zin5 = "- dat zegt de zee mij niet";
let zin6 = "- een zallig gevoel";
let zin7 = "- de zee die rust";
let zin8 = "- dan betekent";
let zin9 = "- m'n hart was een rustige zee";
let zin10 = "- de zee ruist zinnen";

let gedicht = [zin1, zin7, zin9, zin3, zin5, zin2, zin6, zin4, zin8, zin10];

gedicht = gedicht.map((zin, i) => i % 2 === 0 ? zin.toUpperCase() : zin);


document.getElementById("tekst").innerHTML = gedicht.join("<br>");


