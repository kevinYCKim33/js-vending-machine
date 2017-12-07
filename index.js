function vendingMachine(snackSelection, moneyInserted) {
  if (validSelection(snackSelection) === false) {
    return "Please make a valid selection";
  }

  const price = getPrice(snackSelection);

  if (price > moneyInserted) {
    return `Please insert more money to purchase ${snackSelection}`;
  }

  const change = moneyInserted - price;

  return `${snackSelection} dispensed. Your change is ${change}. Thank you!`;
}

function validSelection(snackSelection) {
  switch(snackSelection) {
    case 'Pretzels':
    case 'Chips':
    case 'Water':
      return true;
    default: return false;
  }
}

function getPrice(snackSelection) {
  switch(snackSelection) {
    case 'Pretzels':
     return 100;
    case 'Chips':
      return 75;
    case 'Water':
      return 50;
  }
}
