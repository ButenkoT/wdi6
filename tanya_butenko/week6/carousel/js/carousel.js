$(document).ready(function(){
  $('#carousel').css('left', 0);
  $('#next').on('click', nextPhoto);
  $('#previous').on('click', previousPhoto);
});



var nextPhoto = function(){
  var left = parseInt($('#carousel').css('left'), 10);
  var count = $('#carousel img').length;
  var newLeft = left - 612;
  if (Math.abs(newLeft) >= count * 612) {
    newLeft = 0;
  }
  console.log(newLeft);
  $('#carousel').animate({left: newLeft}, 'fast', function(){
    $('#carousel').appendTo($())
  });
};

var previousPhoto = function(){
  var left = parseInt($('#carousel').css('left'), 10);
  var count = $('#carousel img').length;
  var newLeft = left + 612;
  if (left >= 0) {
    newLeft = - (count - 1) * 612;
  }
  console.log(newLeft);
  $('#carousel').animate({left: newLeft}, 'fast');
}