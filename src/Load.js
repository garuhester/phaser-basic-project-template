var Load = function(){
	this.preload = function () {
		game.state.backgroundColor = "#fff";
		// 加载游戏资源
		game.load.crossOrigin = 'anonymous'; // 设置跨域
		game.load.image('logo', '../assets/logo.jpg');

		//添加进度文字
		var loadText = game.add.text(game.world.centerX, game.world.centerY, "0%", {
			fontSize: "60px",
			fill: "#fff"
		});
		loadText.anchor.set(0.5, 0.5);
		game.load.onFileComplete.add(function (progress) {
			loadText.text = progress + "%";
		});
		game.load.onLoadComplete.add(function () {
			console.log("资源加载完成");
			game.state.start("Logo");
		});
	}
}

var Logo = function(){
	this.preload = function(){
		var logo = game.add.image(game.world.centerX, game.world.centerY, "logo");
		logo.width = logo.width / 2;
		logo.height = logo.height / 2;
		logo.anchor.set(0.5, 0.5);
		setTimeout(function(){
			game.state.start("Menu");
		}, 1000);
	}
}