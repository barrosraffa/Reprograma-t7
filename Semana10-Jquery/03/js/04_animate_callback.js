$(document).ready(function(){
    $('#animate').click(function(){
        console.log('ei')
        $('#content').animate({'width': '60%', 'height':'30%'}, 
        1000,
        function(){
                $(this).html('ANIMAÇÃO TERMINOU');
        });
    });
});