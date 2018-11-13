Array.prototype.shuffle = function() {
    var input = this;

    for (var i = input.length-1; i >=0; i--) {

        var randomIndex = Math.floor(Math.random()*(i+1));
        var itemAtIndex = input[randomIndex];

        input[randomIndex] = input[i];
        input[i] = itemAtIndex;
    }
    return input;
}

var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });

function preload() {
  game.load.image('0', 'images/spades/1Spade.png');
  game.load.image('1', 'images/spades/2Spade.png');
  game.load.image('2', 'images/spades/3Spade.png');
  game.load.image('3', 'images/spades/4Spade.png');
  game.load.image('4', 'images/spades/5Spade.png');
  game.load.image('5', 'images/spades/6Spade.png');
  game.load.image('6', 'images/spades/7Spade.png');
  game.load.image('7', 'images/spades/8Spade.png');
  game.load.image('8', 'images/spades/9Spade.png');
  game.load.image('9', 'images/spades/10Spade.png');
  game.load.image('10', 'images/spades/11Spade.png');
  game.load.image('11', 'images/spades/12Spade.png');
  game.load.image('12', 'images/spades/13Spade.png');

  game.load.image('13', 'images/clubs/1Club.png');
  game.load.image('14', 'images/clubs/2Club.png');
  game.load.image('15', 'images/clubs/3Club.png');
  game.load.image('16', 'images/clubs/4Club.png');
  game.load.image('17', 'images/clubs/5Club.png');
  game.load.image('18', 'images/clubs/6Club.png');
  game.load.image('19', 'images/clubs/7Club.png');
  game.load.image('20', 'images/clubs/8Club.png');
  game.load.image('21', 'images/clubs/9Club.png');
  game.load.image('22', 'images/clubs/10Club.png');
  game.load.image('23', 'images/clubs/11Club.png');
  game.load.image('24', 'images/clubs/12Club.png');
  game.load.image('25', 'images/clubs/13Club.png');

  game.load.image('26', 'images/diamonds/1Diamond.png');
  game.load.image('27', 'images/diamonds/2Diamond.png');
  game.load.image('28', 'images/diamonds/3Diamond.png');
  game.load.image('29', 'images/diamonds/4Diamond.png');
  game.load.image('30', 'images/diamonds/5Diamond.png');
  game.load.image('31', 'images/diamonds/6Diamond.png');
  game.load.image('32', 'images/diamonds/7Diamond.png');
  game.load.image('33', 'images/diamonds/8Diamond.png');
  game.load.image('34', 'images/diamonds/9Diamond.png');
  game.load.image('35', 'images/diamonds/10Diamond.png');
  game.load.image('36', 'images/diamonds/11Diamond.png');
  game.load.image('37', 'images/diamonds/12Diamond.png');
  game.load.image('38', 'images/diamonds/13Diamond.png');

  game.load.image('39', 'images/hearts/1Heart.png');
  game.load.image('40', 'images/hearts/2Heart.png');
  game.load.image('41', 'images/hearts/3Heart.png');
  game.load.image('42', 'images/hearts/4Heart.png');
  game.load.image('43', 'images/hearts/5Heart.png');
  game.load.image('44', 'images/hearts/6Heart.png');
  game.load.image('45', 'images/hearts/7Heart.png');
  game.load.image('46', 'images/hearts/8Heart.png');
  game.load.image('47', 'images/hearts/9Heart.png');
  game.load.image('48', 'images/hearts/10Heart.png');
  game.load.image('49', 'images/hearts/11Heart.png');
  game.load.image('50', 'images/hearts/12Heart.png');
  game.load.image('51', 'images/hearts/13Heart.png');
}

var upKey;
var deck = Phaser.ArrayUtils.numberArray(0, 51);
var currDeck = [];

function create() {

  upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);

  displayCards();
}

function update() {
  if(upKey.isDown){
    console.log('up is down');
    setCards();
  }
}

function setCards() {
  for(let i = 0; i < currDeck.length; i++) {
    destroyCard(currDeck[i]);
  }
  deck.shuffle();
  displayCards();
}

function destroyCard(card) {
  card.destroy();
}

function displayCards() {
  for(let i = 0; i < deck.length; i++) {
    if(i < 13) {
      currDeck[i] = game.add.sprite(41*(i%13), 0, `${deck[i]}`);
    }
    else if(i < 26) {
      currDeck[i] = game.add.sprite(41*(i%13), 150, `${deck[i]}`);
    }
    else if(i < 39) {
      currDeck[i] = game.add.sprite(41*(i%13), 300, `${deck[i]}`);
    }
    else if(i < 52) {
      currDeck[i] = game.add.sprite(41*(i%13), 450, `${deck[i]}`);
    }
  }
}
