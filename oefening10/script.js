let datum = new Date();
let minuten = datum.getMinutes();
let bericht = "";

if (minuten < 15) {
  bericht = "Het is nu kwartier 1";
} else if (minuten < 30) {
  bericht = "Het is nu kwartier 2";
} else if (minuten < 45) {
  bericht = "Het is nu kwartier 3";
} else {
  bericht = "Het is nu kwartier 4";
}

console.log(bericht);
