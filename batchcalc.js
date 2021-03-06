const resultsModal = document.querySelector('.modal');

modalTrigger = () => {
  const instance = M.Modal.init(resultsModal);
  instance.open();
}

function Cocktail(spirit, other, liqueur, bitters, juice, syrup, water) {
  this.spirit = parseFloat(spirit);
  this.other = parseFloat(other)
  this.liqueur = parseFloat(liqueur);
  this.bitters = parseFloat(bitters);
  this.juice = parseFloat(juice);
  this.syrup = parseFloat(syrup);
  this.water = parseFloat(water);
}

sum = (obj) => {
  var sum = 0;
  for (let el in obj) {
    if (obj.hasOwnProperty(el)) {
      sum += parseFloat(obj[el]);
    }
  }
  return sum;
}

let batchCalc = document.getElementById('batchcalc');

validate = (val) => {
  return val ? val : 0;
}

batchCalc.onsubmit = (event) => {
  console.log('submitted!');
  event.preventDefault()
}

document.addEventListener('click', function (event) {
  if (!event.target.matches('.btn')) return;

  let spirit = validate(batchCalc.elements['spirit'].value);
  let otherSpirit = validate(batchCalc.elements['other'].value);
  let liqueur = validate(batchCalc.elements['liqueur'].value);
  let bitters = validate(batchCalc.elements['bitters'].value);
  let juice = validate(batchCalc.elements['juice'].value);
  let syrup = validate(batchCalc.elements['syrup'].value);
  let water = validate(batchCalc.elements['water'].value);

  let batchedCocktail = new Cocktail(spirit, otherSpirit, liqueur, bitters, juice, syrup, water);
  console.log(batchedCocktail);

  let amount = batchCalc.elements['amount'].value;
  let unit = document.getElementById('unit').value;
  console.log(amount);
  console.log(unit);

  switch (unit) {
    case 'gallons':
      convertToGallons(amount, batchedCocktail);
      break;
    case 'liters':
      convertToLiters(amount, batchedCocktail);
      break;
    case 'milliliters':
      convertToMilliliters(amount, batchedCocktail);
      break;
    case 'ounces':
      convertToOunces(amount, batchedCocktail);
      break;
  }
});

convertToMilliliters = (num, cocktail) => {
  let milliliters = 1 * num;
  let total = sum(cocktail);
  console.log(total);

  let spirit = (cocktail.spirit / total * milliliters).toFixed(0);
  let other = (cocktail.other / total * milliliters).toFixed(0);
  let liqueur = (cocktail.liqueur / total * milliliters).toFixed(0);
  let bitters = (cocktail.bitters / total * milliliters).toFixed(2);
  let juice = (cocktail.juice / total * milliliters).toFixed(0);
  let syrup = (cocktail.syrup / total * milliliters).toFixed(0);
  let water = (cocktail.water / total * milliliters).toFixed(0);

  console.log(bitters)

  const tdSpirit = document.getElementById('tdSpirit');
  const tdOther = document.getElementById('tdOther');
  const tdLiqueur = document.getElementById('tdLiqueur');
  const tdBitters = document.getElementById('tdBitters');
  const tdJuice = document.getElementById('tdJuice');
  const tdSyrup = document.getElementById('tdSyrup');
  const tdWater = document.getElementById('tdWater');

  tdSpirit.innerHTML = spirit + ' (ml)';
  tdOther.innerHTML = other + ' (ml)';
  tdLiqueur.innerHTML = liqueur + ' (ml)';
  tdBitters.innerHTML = bitters + ' (ml)';
  tdJuice.innerHTML = juice + ' (ml)';
  tdSyrup.innerHTML = syrup + ' (ml)';
  tdWater.innerHTML = water + ' (ml)';

  modalTrigger();
}

convertToLiters = (num, cocktail) => {
  let milliliters = 1000 * num;
  let total = sum(cocktail);
  console.log(total);

  let spirit = Math.trunc((cocktail.spirit / total * milliliters) / 750);
  let spiritR = ((cocktail.spirit / total * milliliters) % 750).toFixed(0);
  let other = Math.trunc((cocktail.other / total * milliliters) / 750);
  let otherR = ((cocktail.other / total * milliliters) % 750).toFixed(0);
  let liqueur = Math.trunc((cocktail.liqueur / total * milliliters) / 750);
  let liqueurR = ((cocktail.liqueur / total * milliliters) % 750).toFixed(0);
  let bitters = (cocktail.bitters / total * milliliters).toFixed(0);
  let juice = (cocktail.juice / total * milliliters).toFixed(0);
  let syrup = (cocktail.syrup / total * milliliters).toFixed(0);
  let water = (cocktail.water / total * milliliters).toFixed(0);

  const tdSpirit = document.getElementById('tdSpirit');
  const tdOther = document.getElementById('tdOther');
  const tdLiqueur = document.getElementById('tdLiqueur');
  const tdBitters = document.getElementById('tdBitters');
  const tdJuice = document.getElementById('tdJuice');
  const tdSyrup = document.getElementById('tdSyrup');
  const tdWater = document.getElementById('tdWater');

  tdSpirit.innerHTML = spirit + ' (btl) ' + spiritR + ' (ml)';
  tdOther.innerHTML = other + ' (btl) ' + otherR + ' (ml)';
  tdLiqueur.innerHTML = liqueur + ' (btl) ' + liqueurR + ' (ml)';
  tdBitters.innerHTML = bitters + ' (ml)';
  tdJuice.innerHTML = juice + ' (ml)';
  tdSyrup.innerHTML = syrup + ' (ml)';
  tdWater.innerHTML = water + ' (ml)';

  modalTrigger();
}

convertToOunces = (num, cocktail) => {
  let milliliters = 29.5735 * num;
  let total = sum(cocktail);
  console.log(total);

  let spirit = (cocktail.spirit / total * milliliters).toFixed(0);
  let other = (cocktail.other / total * milliliters).toFixed(0);
  let liqueur = (cocktail.liqueur / total * milliliters).toFixed(0);
  let bitters = (cocktail.bitters / total * milliliters).toFixed(2);
  let juice = (cocktail.juice / total * milliliters).toFixed(0);
  let syrup = (cocktail.syrup / total * milliliters).toFixed(0);
  let water = (cocktail.water / total * milliliters).toFixed(0);

  const tdSpirit = document.getElementById('tdSpirit');
  const tdOther = document.getElementById('tdOther');
  const tdLiqueur = document.getElementById('tdLiqueur');
  const tdBitters = document.getElementById('tdBitters');
  const tdJuice = document.getElementById('tdJuice');
  const tdSyrup = document.getElementById('tdSyrup');
  const tdWater = document.getElementById('tdWater');

  tdSpirit.innerHTML = spirit + ' (ml)';
  tdOther.innerHTML = other + ' (ml)';
  tdLiqueur.innerHTML = liqueur + ' (ml)';
  tdBitters.innerHTML = bitters + ' (ml)';
  tdJuice.innerHTML = juice + ' (ml)';
  tdSyrup.innerHTML = syrup + ' (ml)';
  tdWater.innerHTML = water + ' (ml)';

  modalTrigger();
}

convertToGallons = (num, cocktail) => {

  let milliliters = 3785.41 * num;
  let total = sum(cocktail);
  console.log(total);

  let spirit = Math.trunc((cocktail.spirit / total * milliliters) / 750);
  let spiritR = ((cocktail.spirit / total * milliliters) % 750).toFixed(0);
  let other = Math.trunc((cocktail.other / total * milliliters) / 750);
  let otherR = ((cocktail.other / total * milliliters) % 750).toFixed(0);
  let liqueur = Math.trunc((cocktail.liqueur / total * milliliters) / 750);
  let liqueurR = ((cocktail.liqueur / total * milliliters) % 750).toFixed(0);
  let bitters = (cocktail.bitters / total * milliliters).toFixed(0);
  let juice = (cocktail.juice / total * milliliters).toFixed(0);
  let syrup = (cocktail.syrup / total * milliliters).toFixed(0);
  let water = (cocktail.water / total * milliliters).toFixed(0);

  const tdSpirit = document.getElementById('tdSpirit');
  const tdOther = document.getElementById('tdOther');
  const tdLiqueur = document.getElementById('tdLiqueur');
  const tdBitters = document.getElementById('tdBitters');
  const tdJuice = document.getElementById('tdJuice');
  const tdSyrup = document.getElementById('tdSyrup');
  const tdWater = document.getElementById('tdWater');

  tdSpirit.innerHTML = spirit + ' (btl) ' + spiritR + ' (ml)';
  tdOther.innerHTML = other + ' (btl) ' + otherR + ' (ml)';
  tdLiqueur.innerHTML = liqueur + ' (btl) ' + liqueurR + ' (ml)';
  tdBitters.innerHTML = bitters + ' (btl) ';
  tdJuice.innerHTML = juice + ' (ml)';
  tdSyrup.innerHTML = syrup + ' (ml)';
  tdWater.innerHTML = water + ' (ml)';

  modalTrigger();
}