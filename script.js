function calcularMedia() {
    let forca = Number(document.getElementById('for').value);
    let vigor = Number(document.getElementById('vig').value);
    let cerebro = Number(document.getElementById('cer').value);
    let intuicao = Number(document.getElementById('int').value);
    let level = Number(document.getElementById('lvl').value);

    let resultado = (forca + vigor + cerebro + intuicao) / level;

    document.querySelector('.print-resultado').style.display = 'block';
    document.getElementById('resultado').innerHTML = "Pontuação: " + resultado + "<br>Ideal: +100";
}

function reiniciar() {
    document.getElementById('for').value = '';
    document.getElementById('vig').value = '';
    document.getElementById('cer').value = ''; 
    document.getElementById('int').value = '';
    document.getElementById('lvl').value = '';
    document.querySelector('.print-resultado').style.display = 'none';
}