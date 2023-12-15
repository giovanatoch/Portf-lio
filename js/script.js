
$('.navbar a').click(function (e){
    e.preventDefault();
    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top;
    $('html, body').animate({
        scrollTop: targetOffset - 30
    }, 1000)
});

$(document).ready(function(){
    var cargos = ["Desenvolvedora Fron-End", "Analista de Suporte"];
    var atual = 0;
    $('.multiple-text').text(cargos[atual++]);
    setInterval(function() {
        $('.multiple-text').fadeOut(function() {
            if (atual >= cargos.length) atual = 0;
            $('.multiple-text').text(cargos[atual++]).fadeIn();
        });
    }, 2000);
});