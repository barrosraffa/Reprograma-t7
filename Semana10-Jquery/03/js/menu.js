$(document).ready(function(){ //ready quer dizer que o arquivo esta pronto
    //hover
    $('li').hover(function(){
        //o this(quer dizer esse aqui) do .menu2 abra/apareça quando o mouse passar por cima
        $(this).find('.menu2').slideDown();
    }, function(){
        $(this).find('.menu2').slideUp();
    });

    //click
    // $('li').click(function(){
    //     $(this).find('.menu2').slideToggle(); //.find quando quer pegar algo especifica
    //     $(this).siblings().find('.menu2').slideUp(); //.siblings são os irmãos
    // })
});