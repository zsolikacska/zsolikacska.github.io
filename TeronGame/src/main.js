var game;

window.addEventListener('load', function () {

	game = new Phaser.Game({
		width: 600,
		height: 800,
		type: Phaser.AUTO,
		backgroundColor: "#242424",
		scale: {
			mode: Phaser.Scale.FIT,
			autoCenter: Phaser.Scale.CENTER_BOTH
		},
		physics: {
			default: "arcade",
			arcade: {
				debug: false
			}
		}
	});
	
	game.scene.add("Preload", Preload);
	game.scene.add("Intro", Intro);
	game.scene.add("TeronGame", TeronGame);
	game.scene.add("Boot", Boot, true);
});

window.addEventListener('keydown', function(e) {
	if (e.key === 'Tab' && e.shiftKey) {
		ShifTabDispatcher.getInstance().shifTabDown();
		e.preventDefault()
	}
})

window.addEventListener('keyup', function(e) {
	if (e.key === 'Tab') {
		ShifTabDispatcher.getInstance().shifTabUp();
	}
})

class Boot extends Phaser.Scene {

	preload() {
		
		this.load.pack("pack", "assets/preload-asset-pack.json");

		this.load.on(Phaser.Loader.Events.COMPLETE, () => this.scene.start("Preload"));
	}
}