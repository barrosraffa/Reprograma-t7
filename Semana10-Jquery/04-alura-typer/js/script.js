$(document).ready(function(){
  $('.campo_digitacao').on('input', function(){ //on é igual AddventLister
      $('.texto_digitado').text( $(this).val() ); //.text altera o valor de dentro
      let qntPalavras = $('.frase_correta').text().split('  ').length; // split separa as palavras em um array
        $('.qntDpalavras').html(qntDpalavras);

      $('.campo_digitacao').on('input', function(){
          $('.texto_digitado').text($(this).val() );
      })
  });
})