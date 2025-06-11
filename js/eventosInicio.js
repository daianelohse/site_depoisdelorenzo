// criação do player do youtube
var player;
var playerEntrevista;
var entrevistas = ['', '2i9CybLHC2g', 'J29176wl4uU', '0gGykirDLJo', 'x1JskAHD_34', '8lKPJ9_wZTI', 'DdXNCUYWt28', 'XXXXXXX', 'XXXXXX'];

function onYouTubePlayerAPIReady() {
    if (sessionStorage.getItem("sessao") == "1") {
        $("#site").show();
        document.getElementById('audio').play();
        $("#popUpIntro").hide();
    } else {
        $("#popUpIntro").show();
    player = new YT.Player('player', {
        width: '640',
        height: '390',
        videoId: 'wcRO50T89uY',
        events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange
        }
    });
    }
}

// autoplay video
function onPlayerReady(event) {
    $("#carregando").fadeOut();
    event.target.playVideo();
}

// quando video acaba
function onPlayerStateChange(event) {
    if (event.data === 0) {
        fechaVideoInicial();

    }
}

// quando o usuário usa a opçao "ir para o site"
function fechaVideoInicial() {
    player.stopVideo();
    $("#videoInicial").fadeOut();
    $("#irParaSite").fadeOut();

    $("#site").show();
    document.getElementById('audio').play();
    sessionStorage.setItem("sessao", "1");

}

function abreEntrevista(n) {
    $(".modal").fadeIn();
    $("#pessoa" + n).fadeIn();
    carregaPlayerEntrevista(n);
    console.log(n);
}

function carregaPlayerEntrevista(n) {
    playerEntrevista = new YT.Player('playerEntrevista' + n, {
        width: '640',
        height: '390',
        videoId: entrevistas[n],
        playerVars: {
            autoplay: 1
        }
    });
}

function fechaPopUp(n) {
    $(".modal").fadeOut();
    apagaIframe(n);
}

function apagaIframe(n) {
    $("#pessoa" + n).css("display", "none");
    playerEntrevista.stopVideo();
    $("#e" + n + " iframe").remove();
    $("#e" + n).append("<div id='playerEntrevista" + n + "'></div>");
}

function proximo(n) {
    playerEntrevista.stopVideo();
    var n = parseInt(n);
    if (n === 1) {
        $("#pessoa8").css("display", "none");
        apagaIframe(8);
    } else {
        $("#pessoa" + (n - 1)).css("display", "none");
        apagaIframe(n - 1);
    }
    $("#pessoa" + n).css("display", "block");
    carregaPlayerEntrevista(n);
}

function anterior(n) {
    playerEntrevista.stopVideo();
    var n = parseInt(n);
    if (n === 8) {
        $("#pessoa1").css("display", "none");
        apagaIframe(1);
    } else {
        $("#pessoa" + (n + 1)).css("display", "none");
        apagaIframe(n + 1);
    }
    $("#pessoa" + n).css("display", "block");
    carregaPlayerEntrevista(n);
}

$(function () {
    var texto = 1;
    var string;

    setInterval(function () {
        switch (texto) {
            case 1:
                string = "O Theo abaixou meu óculos, olhou pra mim e falou: 'Ás vezes eu fico me perguntando se fui eu que nasci de você ou se foi você que nasceu de mim'. (Laura Pinheiro)";
                break;
            case 2:
                string = "A família é o que vem primeiro, a primeira coisa. Se a sua família está te apoiando, pode acontecer o que acontecer no mundo que você chega em casa e pensa: 'Nossa, eu tenho um lugar aqui onde eu sou amado, sou querido, as pessoas torcem por mim'. Ajuda bastante. (Leandro Galuski)";
                break;
            case 3:
                string = "Mas uma coisa que é incrível é que isso nos pega tão de surpresa que fomos tomar um café depois jantar e eu ficava olhando pro Eduardo e pensando: 'Não pode ser, tá normal, joga futebol, tem uma inteligência acima da média, deve ter algum erro'. (Eduardo Berbigier)";
                break;
        }

        $('.texto').html(string);

        texto != 3 ? texto++ : texto = 1;
    }, 10000);
});