$(document).ready(function () {

  $("h1").css({ position: "relative", top: "-10px", opacity: 0 }) 
  .animate({ top: 0, opacity: 1 }, 1000);

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
