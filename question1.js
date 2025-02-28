// 1. Gå på bio (3p)
// Skriv en funktion canBuyTickets som tar en persons ålder och en film-typ
// som input och returnerar true eller false om personen får köpa biljetter.

// filmType kan vara antingen "action", "comedy" eller "family"
// För "action" måste man vara 15 år eller äldre
// För "comedy" måste man vara 11 år eller äldre
// För "family" måste man vara 7 år eller äldre
const filmType = ["action", "comedy", "family"];

function canBuyTickets(age, filmType) {
  if (age >= 15 && filmType === "action") {
    return true;
  } else if (age >= 11 && filmType === "comedy") {
    return true;
  } else if (age >= 7 && filmType === "family") {
    return true;
  } else {
    return false
  }

}

console.log(canBuyTickets(5, "action")); // ska logga false
console.log(canBuyTickets(11, "comedy")); // ska logga true
