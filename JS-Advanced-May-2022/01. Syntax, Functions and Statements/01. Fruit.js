let solve = (fruit, quantity, priceForKg) => {console.log(`I need $${((priceForKg / 1000) * quantity).toFixed(2)} to buy ${(quantity / 1000).toFixed(2)} kilograms ${fruit}.`);};
solve('apple', 1563, 2.35);