
$('#btn').on('click',function(){
    $('#one').hide('slow')
    $('#two').show('slow');
});

$(window).on('scroll', function(){
    if ($(window).scrollTop()){
        $('nav').addClass('black');
    }
    else{
        $('nav').removeClass('black');
    }
});
