
$(document).ready(function(){
  $('#search'). on('click', stopCounter);
 

  

  var mta = {
    n: ["Times Square", "34", "28", "23", "Union Square", "8"],
    l: ["8", "6", "Union Square", "3", "1"],
    6: ["Grand Central", "33", "28", "23", "Union Square", "Astor Place"]
  };

  var $select = $("<select/>");
  $('.dep').append($select);


  $.each(mta, function(line, stops) {
    var $optGroup = $("<optgroup>", {label: line});
    $.each(stops, function(line, station) {
      var $option = $("<option/>", {label: station, value: line + ',' + station, text: station});
      $optGroup.append($option);
    })
    $select.append($optGroup);
  });

  
  $('.arr').append($select.clone());

  //looking for intersection in all 3 lines
  function intersection(array1, array2) {
    return array1.filter(function(n) {
        return array2.indexOf(n) !== -1;
    });    
  }

  function stopCounter(x, y) {
    var departure = $('.dep select').val();
    var arrival = $('.arr select').val();

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

 });