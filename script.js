currentPlayer = document.querySelector(".currentPlayer");

var selected;
var player = "X";

var positions = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
];

function inicioDoJogo() {

    selected = [];
    currentPlayer.innerHTML = "Jogador da Vez: " + player;

    document.querySelectorAll(".game button").forEach((item) => {
        item.innerHTML = "";
        item.addEventListener("click", newJogada);
    });
}

inicioDoJogo();

function newJogada(evento) {

    var index = evento.target.getAttribute("data-i");
    evento.target.innerHTML = player;
    evento.target.removeEventListener("click", newJogada);
    selected[index] = player;

    setTimeout(() => {
        check();

    }, [100]);

    player = player === "X" ? "O" : "X";
    currentPlayer.innerHTML = "Jogador da Vez: " + player;

}

function check() {

    var playerLastJogada = player === "X" ? "O" : "X";

    var items = selected
        .map((item, i) => [item, i])
        .filter((item) => item[0] === playerLastJogada)
        .map((item) => item[1]);


    for (pos of positions) {
        if (pos.every((item) => items.includes(item))) {
            alert("O JOGADOR " + playerLastJogada + " GANHOU!");
            init();
            return;
        }
    }


    if (selected.filter((item) => item).length === 9) {
        alert("DEU EMPATE!");
        init();
        return;
    }
}