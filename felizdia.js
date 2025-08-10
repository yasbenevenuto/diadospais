var vd1 = document.getElementById('vd1');

var videos = [
    "assets/IMG_0848.MOV",
    "assets/IMG_2280.MOV",
    "assets/IMG_4273.MOV",
    "assets/IMG_7414.MOV",
    "assets/IMG_2909.MOV",
    "assets/IMG_2998.MOV"
];

vd1.addEventListener('click', mudarVideo);

var i = 0;
function mudarVideo() {
    i+= 1 % videos.length;

    vd1.src = videos[i];

    vd1.load();
    vd1.play();
}

var botao = document.getElementById('cliqueAqui');
var instrucoes = document.getElementById('instrucoes');

botao.addEventListener('click', escaneieSpotify);

function escaneieSpotify() {
    botao.innerHTML = '<img src="assets\\spotify.png" alt="spotifyQrCode" width="150">';
    
    instrucoes.innerHTML = `
        <p>
            <b>1°</b> - Abra o Spotify<br>
            <b>2°</b> - Clique em "Buscar"<br>
            <b>3°</b>- Clique na câmera e aponte para o código<br>
            <b>4°</b> - Vá para o minuto 1:38<br>
        </p>
    `;
}


