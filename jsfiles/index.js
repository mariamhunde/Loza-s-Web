$(document).ready(function () {


$(".btn").click(function(){
    console.log("We Work!");
})
    $(".btn").mouseover(function(){
    $(this).css({
        'transform': 'scale(1.1)',
        'transition': 'transform 0.2s ease-in-out'
    });
});

$('.cards').mouseout(function() {
    $(this).css({
      'transform': 'scale(1)',
      'transition': 'transform 0.2s ease-in-out'
    });
  });

})
