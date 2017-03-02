$(document).ready(function(){

  $(".logo").hover(function(){
    var direction = $( this ).data('direction');
    console.log(direction);
    console.log($( '.info-' + direction ));
    $( '.circle-info' ).children().removeClass( 'open' );
    $( '.info-' + direction ).addClass( 'open' );
  });
});