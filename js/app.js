'use strict';


var firstAndPike = {
  //Properties
  name : 'First & Pike',
  minCustomersPerHour : 23,
  maxCustomersPerHour : 65,
  avgCookiePerSale : 6.3,
  sales : [],

  //Functions
  generateRandomCustomers : function() {
    var result = Math.floor(Math.random() * firstAndPike.maxCustomersPerHour) + firstAndPike.minCustomersPerHour; //Generate random numbers in betweeen 23-65
    // console.log(result);
    return result;

  }

};

var SeaTacAirport = {
  name : 'SeaTac Airport',
  minCustomersPerHour : 3,
  maxCustomersPerHour : 24,
  avgCookiePerSale : 1.2,
  sales : [],

  //Functions
  generateRandomCustomers : function() {
    var result = Math.floor(Math.random() * SeaTacAirport.maxCustomersPerHour) + SeaTacAirport.minCustomersPerHour; //Generate random numbers in betweeen 3-24
    // console.log(result);
    return result;

  }

};

var SeattleCenter = {
  name : 'Seattle Center',
  minCustomersPerHour : 11,
  maxCustomersPerHour : 38,
  avgCookiePerSale : 3.7,
  sales : [],

  //Functions
  generateRandomCustomers : function() {
    var result = Math.floor(Math.random() * SeattleCenter.maxCustomersPerHour) + SeattleCenter.minCustomersPerHour; //Generate random numbers in betweeen 11-38
    // console.log(result);
    return result;

  }

};

var CapitolHill = {
  name : 'Capitol Hill',
  minCustomersPerHour : 20,
  maxCustomersPerHour : 38,
  avgCookiePerSale : 2.3,
  sales : [],

  //Functions
  generateRandomCustomers : function() {
    var result = Math.floor(Math.random() * CapitolHill.maxCustomersPerHour) + CapitolHill.minCustomersPerHour; //Generate random numbers in betweeen 20-38
    // console.log(result);
    return result;

  }

};

var Alki = {
  name : 'Alki',
  minCustomersPerHour : 2,
  maxCustomersPerHour : 16,
  avgCookiePerSale : 4.6,
  sales : [],

  //Functions
  generateRandomCustomers : function() {
    var result = Math.floor(Math.random() * Alki.maxCustomersPerHour) + Alki.minCustomersPerHour; //Generate random numbers in betweeen 2-16
    // console.log(result);
    return result;

  }

};

//Array representing all 5 stores
var storesArray = [firstAndPike, SeaTacAirport, SeattleCenter, CapitolHill, Alki];


/**
 * Generates total sales and puts into results of each stores
 * @param {array} storeArr - The storeArr containing all 5 stores.
 */
function generateTotalSales (storeArr){
  var calculation; //Number of cookies sold based on average cookies and random number of customers
  var finalResult; //A concatinated final result
  var totalSales = 0; //Sum of total cookies from 6 am to 8 pm
  var finalSalesHour = 20; //Military Standard hours for 8 pm

  for (var i = 0; i < storeArr.length; i++) {

    for (var j = 6; j <= finalSalesHour; j++) {
      calculation = Math.round (storeArr[i].avgCookiePerSale * storeArr[i].generateRandomCustomers()); //Calculates and round to nearest integer
      totalSales += calculation;

      if (j <= 12) {
        finalResult = j + 'am: ' + calculation + ' cookies';
        storeArr[i].sales.push(finalResult);
      }
      else {
        finalResult = (j - 12) + 'pm: ' + calculation + ' cookies';
        storeArr[i].sales.push(finalResult);
      }

    }

    finalResult = 'Total: ' + totalSales + ' cookies';
    storeArr[i].sales.push(finalResult); //Make a final push of total cookies
  }


}

generateTotalSales(storesArray); //Generates total sales forecast


//DOM manipulation
for (var i =0; i < storesArray.length; i++) {
  var storeContainerULEL = document.getElementById('store-container');
  var h2El = document.createElement('h4');
  h2El.textContent = storesArray[i].name;
  storeContainerULEL.appendChild(h2El);

  for (var j = 0; j < 16; j++) {
    var liEl = document.createElement('li');
    var p2El = document.createElement('p2');


    p2El.textContent = storesArray[i].sales[j];

    liEl.appendChild(p2El);
    storeContainerULEL.appendChild(liEl);
  }

}
