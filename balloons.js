$( document ).ready(function () {

    
    //random number generated
    var rando = Math.floor(Math.random() * 10);
    //switch case
    switch (rando) {

    case 0: var animatedClass = ('animated bounce')
    break;
    case 1: var animatedClass =  ('animated flash')
    break;
    case 2: var animatedClass =  ('animated pulse')
    break;
    case 3: var animatedClass =  ('animated rubberBand')
    break;
    case 4: var animatedClass =  ('animated shake')
    break;
    case 5: var animatedClass =  ('animated swing')
    break;
    case 6: var animatedClass =  ('animated tada')
    break;
    case 7: var animatedClass =  ('animated jello')
    break;
    case 8: var animatedClass =  ('animated shakeX')
    break;
    case 9: var animatedClass =  ('animated shakeY')
    break;
    default: var animatedClass = ('animated heartBeat')
    
    };
    //class added
    $('h1').removeClass('animated heartBeat').addClass(animatedClass);
    $('h1').addClass(animatedClass)

    //toast
    
    
    
}); 

//check input on checkboxes and generate toast

$("#submitA3").click(function () {
     /*
        if( $('.form-check-input').prop("checked") == false){
            
        }
*/
if ($('input[type=checkbox]').is(":checked")) {
    //any one is checked
}
else {
    $('#toast').toast('show');

}
});
//removes checked boxes but refreshes the page and unsure why it does that **************************
$("#input-remover").click(function () {
    if ($('input[type=checkbox]').is(":checked")) {
        $('input').attr('checked', false);
    }
    else if ($('input[type=checkbox]').is(":checked")) {
        $('input').attr('checked', true);
    
    }

});
//hover
$("#blue").hover(function () {
    $('h1').addClass('toblue');

});
$("#red").hover(function () {
    $('h1').addClass('tored');

});
$("#green").hover(function () {
    $('h1').addClass('togreen');

});


$(function () {



$('#birthday').pickadate({format: 'mmmm,d'});

$('.form-check-input').each(function () {
    $(this).prop('checked', false);
});
// event listener for check/uncheck
$('.form-check-input').on('change', function () {
    // make the image visible
    $('#' + this.id + 'Img').css('visibility', 'visible')
    // animate balloon in/out based on checkbox
    $(this).is(':checked') ?
     $('#' + this.id + 'Img').removeClass().addClass('animated bounceInDown') :
     $('#' + this.id + 'Img').addClass('animated bounceOutUp');
    });

    
    
});