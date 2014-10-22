$(document).ready(function(){
  $('#search'). on('click', stopCounter);

  var $select = $("<select/>");
  $('.dep').append($select);

  //creating optgroup select eterating through mta object
  $.each(mta, function(lines, stops) {
    var $optGroup = $("<optgroup>", {label: lines});
    $.each(stops, function(line, station) {
      var $option = $("<option/>", {label: station, value: lines + ',' + station, text: station});
      $optGroup.append($option);
    })
    $select.append($optGroup);
  });

  //clone the select optgroups and options to arrival field
  $('.arr').append($select.clone());

});


var mta = {
    n: ["Times Square", "34", "28", "23", "Union Square", "8"],
    l: ["8", "6", "Union Square", "3", "1"],
    six: ["Grand Central", "33", "28", "23", "Union Square", "Astor Place"]
};

  //looking for intersection in all 3 lines
function intersection(array1, array2) {
  return array1.filter(function(n) {
    return array2.indexOf(n) !== -1;
  });    
};

function stopCounter(event) {
  event.preventDefault(); //othervise page restart every time after form works
  $('.result').empty();
    
    //taking input of user and turn it into array with 2 strings(line, station)
  var departure = $('.dep select').val().split(',');
  var arrival = $('.arr select').val().split(',');

  var line1 = departure[0],
      line2 = arrival[0],
      stop1 = departure[1],
      stop2 = arrival[1],
      result,
      res1,
      res2,
      comstation;

    //if same line
  if (line1 === line2) {
    result = Math.abs(mta[line1].indexOf(stop1) - mta[line2].indexOf(stop2));
  } else {
    //if different lines
    comstation = intersection(mta.n, intersection(mta.l, mta.six))[0];
    res1 = Math.abs(mta[line1].indexOf(stop1) - mta[line1].indexOf(comstation));
    res2 = Math.abs(mta[line2].indexOf(stop2) - mta[line2].indexOf(comstation));
    result = res1 + res2;
  }

  var $p = $('<p/>');
  if (result === 0){
    $p.text("You don't need to fo anywhere you are on your stop");
  } else if (result === 1){
    $p.text('You just ' + result + ' stop away. Take a walk.');
  } else {
    $p.text('You need to pass ' + result + ' stops.');
  }
  
  $('.result').append($p);
  
};

