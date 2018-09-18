var Menu = function () {
	this.preload = function () {
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