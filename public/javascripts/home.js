<<<<<<< HEAD
||||||| merged common ancestors
$('#btn').on('click',function(){
    $('#one').hide('slow')
    $('#two').show('slow');
});
=======
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
>>>>>>> cf9552f21ba090065dc4678bf9e65498acc83a6b
