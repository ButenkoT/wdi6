(function () {
  'use strict'; //restrict js

  var mta = {
    n: ["Times Square", "34", "28", "23", "Union Square", "8"],
    l: ["8", "6", "Union Square", "3", "1"],
    6: ["Grand Central", "33", "28", "23", "Union Square", "Astor Place"]
  };

  //looking for intersection in all 3 lines
  function intersection(array1, array2) {
    return array1.filter(function(n) {
        return array2.indexOf(n) !== -1;
    });    
  }

  function stopCounter(x, y) {

    var line1 = x[0],
      line2 = y[0],
      stop1 = x[1],
      stop2 = y[1],
      result,
      res1,
      res2,
      comstation;

    //if same line
    if (line1 === line2) {
      result = Math.abs(mta[line1].indexOf(stop1) - mta[line2].indexOf(stop2));
    } else {
    //if different lines
      comstation = intersection(mta.n, intersection(mta.l, mta['6']))[0];
      res1 = Math.abs(mta[line1].indexOf(stop1) - mta[line1].indexOf(comstation));
      res2 = Math.abs(mta[line2].indexOf(stop2) - mta[line2].indexOf(comstation));
      result = res1 + res2;
    }

    return result;
  }

  console.log(stopCounter(["n", "34"], ["n", "23"]));
  console.log(stopCounter(["n", "34"], ["l", "8"]));
  console.log(stopCounter(["n", "Union Square"], ["6", "Union Square"]));
}(window));
