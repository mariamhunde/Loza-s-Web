$(document).ready(function () {


    $(".btn").mouseover(function(){
    $(this).css({
        'transform': 'scale(1.1)',
        'transition': 'transform 0.2s ease-in-out'
    });
});

$('.btn').mouseout(function() {
    $(this).css({
      'transform': 'scale(1)',
      'transition': 'transform 0.2s ease-in-out'
    });
  });

})
