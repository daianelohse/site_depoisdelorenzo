function abreDado(n) {
    $("#descricoesDados div").hide();
    $("#descricoesDados #desc" + n).show();
}

$(document).ready(function () {
    var $doc = $('html, body');
    $("a").click(function () {
        $doc.animate({
            scrollTop: $($.attr(this, 'href')).offset().top,
        }, 500);
    });
});
