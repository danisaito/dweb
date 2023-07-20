function countdown(tempo) {
    var timerElement = document.getElementById("timer");
    var messageElement = document.getElementById("message");

    var intervalId = setInterval(function () {
        var hours = Math.floor(tempo / 3600);
        var minutes = Math.floor((tempo % 3600) / 60);
        var seconds = tempo % 60;

        var timer = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
        timerElement.textContent = timer;

        if (tempo <= 0) {
            clearInterval(intervalId);
            timerElement.textContent = "Tempo esgotado!";
        }

        tempo--;
    }, 1000);
}

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}

var tempo_inicial = 3600;  
countdown(tempo_inicial);
function redirectToOtherPage() {
    window.location.href = "inicio.html";
}

var videoId = 'VdPvYTNnIKE';

function onYouTubeIframeAPIReady() {
    var player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: videoId,
        playerVars: {
            autoplay: 1,
            controls: 1,
            modestbranding: 1,
            rel: 0,
            showinfo: 0
        }
    });
}

var backToTopBtn = document.getElementById("backToTopBtn");

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}

backToTopBtn.addEventListener("click", function () {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
});
var larguraJanela = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var alturaJanela = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

console.log("Largura da janela: " + larguraJanela);
console.log("Altura da janela: " + alturaJanela);

let html = document.querySelector("html");
let musica = document.querySelector("#musica");
html.addEventListener('click'), () => {
    musica.play();}