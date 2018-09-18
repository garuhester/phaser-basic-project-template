var game = new Phaser.Game(350, 600, Phaser.AUTO, 'game');
game.state.add("Load", Load);
game.state.add("Logo", Logo);
game.state.add("Menu", Menu);
game.state.add("Play", Play);
game.state.start("Load");