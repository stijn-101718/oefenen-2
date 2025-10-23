let raw = prompt("Hoe oud ben je?");
let leeftijd = Number(raw);

if (leeftijd >= 65) {
  console.log("Je mag stemmen — proficiat! (speciale boodschap voor 65+)");
} else if (leeftijd >= 18) {
  console.log("Je mag stemmen.");
} else {
  console.log("Je mag nog niet stemmen.");
}