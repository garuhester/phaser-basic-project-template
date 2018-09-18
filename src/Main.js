var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game');
game.state.add("Load", Load);
game.state.start("Load");