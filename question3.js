// 3. Filtrera frukt (3p)
// Skriv en funktion removeApples som tar bort alla "apple" ur arrayen
// och returner den nya arrayen.

function removeApples(fruits) {
  const removeApples = fruits.filter((fruit) => fruit != "apple");
  return removeApples;
}

console.log(removeApples(["apple", "banana", "orange", "apple"])); // ska logga ["banana", "orange"]
