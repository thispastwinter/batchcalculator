const resultsModal = document.querySelector('.modal');

modalTrigger = () => {
  const instance = M.Modal.init(resultsModal);
  instance.open();
}

modalDestroy = () => {
  const instance = M.Modal.init(resultsModal);
  instance.destroy();
}

function Cocktail(spirit, liqueur, juice, syrup, water) {
  this.spirit = parseFloat(spirit);
  this.liqueur = parseFloat(liqueur);
  this.juice = parseFloat(juice);
  this.syrup = parseFloat(syrup);
  this.water = parseFloat(water);
}

const sum = (obj) => {
  var sum = 0;
  for(let el in obj) {
    if(obj.hasOwnProperty(el)) {
      sum += parseFloat(obj[el]);
    }
  }
  return sum;
}

let batchCalc = document.getElementById('batchcalc');

const validate = (val) => {
  return val ? val : 0;
}

batchCalc.onsubmit = () => {
  event.preventDefault()

  let spirit = validate(batchCalc.elements['spirit'].value);
  let liqueur = validate(batchCalc.elements['liqueur'].value);
  let juice = validate(batchCalc.elements['juice'].value);
  let syrup = validate(batchCalc.elements['syrup'].value);
  let water = validate(batchCalc.elements['water'].value);

  const batchedCocktail = new Cocktail(spirit, liqueur, juice, syrup, water);
  console.log(batchedCocktail);

  let amount = batchCalc.elements['amount'].value;
  let unit = batchCalc.elements['unit'].value;

  switch (unit) {
    case 'gallons':
      convertToGallons(amount, batchedCocktail);
      break;
    case 'liters':
      convertToLiters(amount, batchedCocktail);
      break;
    case 'milliliters':
      convertToMilliliters(amount);
      break;
    case 'ounces':
      convertToOunces(amount);
      break;
  }
};

convertToMilliliters = (num, cocktail) => {

}

convertToLiters = (num, cocktail) => {
  let milliliters = 1000 * num;
  let total = sum(cocktail);
  console.log(total);

  let spirit = ((cocktail.spirit/total * milliliters)/750).toFixed(1);
  let liqueur = ((cocktail.liqueur/total * milliliters)/750).toFixed(1);
  let juice = (cocktail.juice/total * milliliters).toFixed(1);
  let syrup = (cocktail.syrup/total * milliliters).toFixed(1);
  let water = (cocktail.water/total * milliliters).toFixed(1);

  const tdSpirit = document.getElementById('tdSpirit');
  const tdLiqueur = document.getElementById('tdLiqueur');
  const tdJuice = document.getElementById('tdJuice');
  const tdSyrup = document.getElementById('tdSyrup');
  const tdWater = document.getElementById('tdWater');

  tdSpirit.innerHTML = spirit;
  tdLiqueur.innerHTML = liqueur;
  tdJuice.innerHTML = juice;
  tdSyrup.innerHTML = syrup;
  tdWater.innerHTML = water;
  
  modalTrigger();
}

convertToOunces = (num) => {
  let milliliters = 3785.41 * num;
  let total = sum(cocktail);
  console.log(total);

  let spirit = ((cocktail.spirit/total * milliliters)/750).toFixed(1);
  let liqueur = ((cocktail.liqueur/total * milliliters)/750).toFixed(1);
  let juice = (cocktail.juice/total * milliliters).toFixed(1);
  let syrup = (cocktail.syrup/total * milliliters).toFixed(1);
  let water = (cocktail.water/total * milliliters).toFixed(1);

  const tdSpirit = document.getElementById('tdSpirit');
  const tdLiqueur = document.getElementById('tdLiqueur');
  const tdJuice = document.getElementById('tdJuice');
  const tdSyrup = document.getElementById('tdSyrup');
  const tdWater = document.getElementById('tdWater');

  tdSpirit.innerHTML = spirit;
  tdLiqueur.innerHTML = liqueur;
  tdJuice.innerHTML = juice;
  tdSyrup.innerHTML = syrup;
  tdWater.innerHTML = water;
}

convertToGallons = (num, cocktail) => {
  let milliliters = 3785.41 * num;
  let total = sum(cocktail);
  console.log(total);

  let spirit = ((cocktail.spirit/total * milliliters)/750).toFixed(1);
  let liqueur = ((cocktail.liqueur/total * milliliters)/750).toFixed(1);
  let juice = (cocktail.juice/total * milliliters).toFixed(1);
  let syrup = (cocktail.syrup/total * milliliters).toFixed(1);
  let water = (cocktail.water/total * milliliters).toFixed(1);

  const tdSpirit = document.getElementById('tdSpirit');
  const tdLiqueur = document.getElementById('tdLiqueur');
  const tdJuice = document.getElementById('tdJuice');
  const tdSyrup = document.getElementById('tdSyrup');
  const tdWater = document.getElementById('tdWater');

  tdSpirit.innerHTML = spirit;
  tdLiqueur.innerHTML = liqueur;
  tdJuice.innerHTML = juice;
  tdSyrup.innerHTML = syrup;
  tdWater.innerHTML = water;
  
  modalTrigger();
}