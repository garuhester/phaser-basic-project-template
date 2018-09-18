var Menu = function () {
	this.preload = function () {
		var menu = game.add. text(game.world.centerX, game.world.centerY, "GAME", {
			fill: '#fff'
		});
		menu.anchor.set(0.5, 0.5);
		
		// 添加点击事件
		game.input.onTap.add(function () {
			game.state.start('Play');
		});
	}
}

var Play = function () {
	this.preload = function () {

	}
	this.create = function () {

	}
	this.update = function () {

	}
}