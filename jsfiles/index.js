$(document).ready(function () {

  $("h1").css({ position: "relative", top: "-10px", opacity: 0 }) // Start with the element hidden
  .animate({ top: 0, opacity: 1 }, 1000); // Animate it to move down and fade in gradually over 1 second

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
