/*Show & Hide About Me*/
$(window).on('load', function(){
    $('header .photo').click(function(){
        $('.aboutMe').toggle();
        $('.content').toggle();
        $('#pagination').toggle();
        $('nav').toggle();
    });
    $('.aboutMe .x').click(function(){
        $('.aboutMe').toggle();
        $('.content').toggle();
        $('#pagination').toggle();
        $('nav').toggle();
    });
});


/*Show & Hide My Certificate*/
$(window).ready(function(){
    $('.aboutMe h3.certificate').click(function(){
        $('#certificate').toggle();
        $('.aboutMe').toggle();
    });
    $('#certificate .certClose').click(function(){
        $('#certificate').toggle();
        $('.aboutMe').toggle();
    });
});


/*Show & Close Contact*/
$(window).on('load', function(){
    $('.contact').click(function(){
        $('#contact').toggle();
    });
    $('.closeWindow').click(function(){
        $('#contact').toggle();
    });
});


/*Change BG body*/
$(document).ready(function(){
    $('header .textLogo p').dblclick(function(){
        $('body').css('background-image', "url('../img/bg/bg.jpg')");
    });
});


/*Change BG .bg*/
$(document).ready(function(){
    $('header .textLogo h1').dblclick(function(){
        $('.wrapper').css('background-image', "url('../img/css.jpg')");
    });
});


/*Show & Hide Page*/
$(window).on('load', function(){
    $('footer .page1').click(function(){
        $('.content #page1').show();
        $('.content #page2').hide();
        $('.content #page3').hide();
        $('.content #page4').hide();
        $('.content #page5').hide();
        $('.content #page1').addClass('.active');
        $('.content #page2').removeClass('.active');
        $('.content #page3').removeClass('.active');
        $('.content #page4').removeClass('.active');
        $('.content #page5').removeClass('.active');
    });
    $('footer .page2').click(function(){
        $('.content #page1').hide();
        $('.content #page2').show();
        $('.content #page3').hide();
        $('.content #page4').hide();
        $('.content #page5').hide();
        $('.content #page1').removeClass('active');
        $('.content #page2').addClass('active');
        $('.content #page3').removeClass('active');
        $('.content #page4').removeClass('active');
        $('.content #page5').removeClass('active');
    });
    $('footer .page3').click(function(){
        $('.content #page1').hide();
        $('.content #page2').hide();
        $('.content #page3').show();
        $('.content #page4').hide();
        $('.content #page5').hide();
        $('.content #page1').removeClass('active');
        $('.content #page2').removeClass('active');
        $('.content #page3').addClass('active');
        $('.content #page4').removeClass('active');
        $('.content #page5').removeClass('active');
    });
    $('footer .page4').click(function(){
        $('.content #page1').hide();
        $('.content #page2').hide();
        $('.content #page3').hide();
        $('.content #page4').show();
        $('.content #page5').hide();
        $('.content #page1').removeClass('active');
        $('.content #page2').removeClass('active');
        $('.content #page3').removeClass('active');
        $('.content #page4').addClass('active');
        $('.content #page5').removeClass('active');
    });
    $('footer .page5').click(function(){
        $('.content #page1').hide();
        $('.content #page2').hide();
        $('.content #page3').hide();
        $('.content #page4').hide();
        $('.content #page5').show();
        $('.content #page1').removeClass('active');
        $('.content #page2').removeClass('active');
        $('.content #page3').removeClass('active');
        $('.content #page4').removeClass('active');
        $('.content #page5').addClass('active');
    });
});


/*Active Page Click*/
$(window).on('load', function(){
    $('li').click(function() {
    $('li').removeClass('active');
    $(this).addClass('active');
    /*$('li').removeClass('disabled');
    $(this).addClass('disabled');*/
    });
});