// Игроки
const player1 ={
    name: 'Sub-Zero',
    hp: 55,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['IceSword', 'Ice scepter'],
    attack: function() {
        console.log(player1.name + ' Fight...');
    }
};
player1.attack();

const player2 = {
    name: 'Kitana',
    hp: 91,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['FlyingBlade', 'Sai'],
    attack: function() {
        console.log(player2.name + ' Fight...');
    }
}
player2.attack();

// Создание элемента

function createPlayer(player, playerName ) {
    const  game1 = document.createElement('div');
    game1.classList.add(player);

    const game2 = document.createElement('div');
    game2.classList.add('progressbar');

    const game3 = document.createElement('div');
    game3.classList.add('character');


    const game_2 = document.createElement('div');
    game_2.classList.add('life');
    game_2.style.width = player.hp + "%";


    const game_22 = document.createElement('div');
    game_22.classList.add('name');
    game_22.innerText = playerName.name;


    const game_3 = document.createElement('img');
    game_3.src = playerName.img;


    game1.appendChild(game2);
    game1.appendChild(game3);
    game2.appendChild(game_2);
    game2.appendChild(game_22);
    game3.appendChild(game_3);



    const arenas = document.querySelector('.arenas');
    arenas.appendChild(game1);



}
// createPlayer(player['name'], player['hp'], player['img']);
// createPlayer(player2['name'], player2['hp'], player2['img']);

createPlayer("player1", player1);
createPlayer("player2", player2);

