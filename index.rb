def vending_machine(snack_selection, money_inserted)
  if !valid_selection(snack_selection)
    return "Please make a valid selection"
  end

  price = get_price(snack_selection)

  if price > money_inserted
    return "Please insert more money to purchase #{snack_selection}"
  end

  change = money_inserted - price

  return "#{snack_selection} dispensed. Your change is #{change}. Thank you!"

end

def valid_selection(snack_selection)
  case snack_selection
  when 'Pretzels', 'Chips', 'Water'
    return true;
  else
    return false;
  end
end

def get_price(snack_selection)
  case snack_selection
  when 'Pretzels'
    100
  when 'Chips'
    75
  when 'Water'
    50
  end
end

vending_machine('Pretzels', 125)
