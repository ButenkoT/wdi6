var dollarsToPounds = function(dollars){
  var audGbp = 0.5421;
  var result = (dollars * audGbp).toFixed(2);
  console.log('$' + dollars + ' is £' + result);
}

dollarsToPounds(100);

var poundsToDollars = function(pounds){
  var gbpAud = 1.8451;
  var result = (pounds * gbpAud).toFixed(2);
  console.log('£' + pounds + ' is $' + result);
}

poundsToDollars(50);