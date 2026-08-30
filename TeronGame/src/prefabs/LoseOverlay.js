
// You can write more code here

/* START OF COMPILED CODE */

class LoseOverlay extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 122.02332424519167, y ?? 400);

		// rectangle
		const rectangle = scene.add.rectangle(177.97667575480833, 0, 600, 800);
		rectangle.isFilled = true;
		rectangle.fillColor = 0;
		rectangle.fillAlpha = 0.4;
		this.add(rectangle);

		// text
		const text = scene.add.text(-122, -200, "", {});
		text.text = "Your raid leader audibly sighs...\n\n\nOk wipe it up. This isn't hard just.. ugh. Didn't you all practice this? Run back asap and let's hope you-know-who doesn't get Shadow of Death this time..";
		text.setStyle({"align":"center","color":"#fb3333ff","fixedWidth":600,"fontSize":"28px","fontStyle":"bold","stroke":"#000000ff","strokeThickness":5,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color":"#000000ff"});
		text.setLineSpacing(5);
		text.setWordWrapWidth(600, true);
		this.add(text);

		// startButton
		const startButton = scene.add.image(278, 238, "buttons", 5);
		startButton.scaleX = 0.42;
		startButton.scaleY = 0.33;
		this.add(startButton);

		// startText
		const startText = scene.add.text(117, 214, "", {});
		startText.text = "TRY AGAIN";
		startText.setStyle({"align":"center","color":"#ff000000","fixedWidth":320,"fontSize":"42px","strokeThickness":3});
		this.add(startText);

		this.startButton = startButton;
		this.startText = startText;

		/* START-USER-CTR-CODE */

		// Start Button
		this.startButton.setInteractive();

		this.startButton.on('pointerover', function (pointer) {
			startText.tintTopLeft = 16181535; // Yellow
			startText.tintTopRight = 16181535;
			startText.tintBottomLeft = 16181535;
			startText.tintBottomRight = 16181535;
		});

		this.startButton.on('pointerout', function (pointer) {
			startText.tintTopLeft = 16777215; // White
			startText.tintTopRight = 16777215;
			startText.tintBottomLeft = 16777215;
			startText.tintBottomRight = 16777215;
		});

		this.startButton.on('pointerdown', function(pointer) {

			gtag("event", "select_content", {
				content_type: "button",
				item_id: "loseScreenReplay"
			});	

			scene.scene.start("TeronGame");
		});

		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Image} */
	startButton;
	/** @type {Phaser.GameObjects.Text} */
	startText;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here