
// You can write more code here

/* START OF COMPILED CODE */

class Preload extends Phaser.Scene {

	constructor() {
		super("Preload");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorPreload() {

		this.load.pack("asset-pack", "assets/asset-pack.json");
	}

	/** @returns {void} */
	editorCreate() {

		// progressText
		const progressText = this.add.text(291, 404, "", {});
		progressText.setOrigin(0.5, 0.5);
		progressText.text = "0%";
		progressText.setStyle({"fontSize":"30px"});

		// loadingText
		const loadingText = this.add.text(306, 280, "", {});
		loadingText.setOrigin(0.5, 0.5);
		loadingText.text = "Teron Loading\nPlease Wait...";
		loadingText.setStyle({"fontSize":"30px"});

		// progressBar
		const progressBar = this.add.rectangle(46, 322, 512, 48);
		progressBar.setOrigin(0, 0);
		progressBar.isFilled = true;

		this.progressText = progressText;
		this.progressBar = progressBar;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Text} */
	progressText;
	/** @type {Phaser.GameObjects.Rectangle} */
	progressBar;

	/* START-USER-CODE */

	// Write your code here

	preload() {

		this.editorCreate();

		this.load.on(Phaser.Loader.Events.PROGRESS, p => {
			this.progressText.text = Math.floor(p * 100) + "%";
			this.progressBar.scaleX = p;
		});

		this.editorPreload();

		this.load.on(Phaser.Loader.Events.COMPLETE, () => this.scene.start("Intro"));
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here