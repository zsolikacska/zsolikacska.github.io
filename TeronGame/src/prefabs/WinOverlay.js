
// You can write more code here

/* START OF COMPILED CODE */

class WinOverlay extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 300, y ?? 260);

		// rectangle
		const rectangle = scene.add.rectangle(0, 140, 600, 800);
		rectangle.isFilled = true;
		rectangle.fillColor = 0;
		rectangle.fillAlpha = 0.4;
		this.add(rectangle);

		// text
		const text = scene.add.text(-300, 45, "", {});
		text.text = "All constructs defeated!\n\nYour raid members cheer at you!\nYou saved their day!";
		text.setStyle({"align":"center","color":"#333afbff","fixedWidth":600,"fontSize":"28px","fontStyle":"bold","stroke":"#000000ff","strokeThickness":5,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color":"#000000ff"});
		text.setLineSpacing(5);
		this.add(text);

		// startButton
		const startButton = scene.add.image(114, 298, "buttons", 1);
		startButton.scaleX = 0.42;
		startButton.scaleY = 0.33;
		this.add(startButton);

		// startText
		const startText = scene.add.text(-46, 274, "", {});
		startText.text = "PLAY AGAIN";
		startText.setStyle({"align":"center","color":"#ff000000","fixedWidth":320,"fontSize":"42px","strokeThickness":3});
		this.add(startText);

		// winDurationText
		const winDurationText = scene.add.text(-300, 405, "", {});
		winDurationText.text = "You won in xx.yyy seconds! Can you beat your friends?";
		winDurationText.setStyle({"align":"center","color":"#4cf25eff","fixedWidth":600,"fontSize":"18px","fontStyle":"bold","stroke":"#000000ff","strokeThickness":6});
		this.add(winDurationText);

		// cheatText
		const cheatText = scene.add.text(-300, 430, "", {});
		cheatText.visible = false;
		cheatText.text = "BUT YOU CHEATED!";
		cheatText.setStyle({"align":"center","color":"#ad0d0dff","fixedWidth":600,"fontSize":"32px","fontStyle":"bold","stroke":"#000000ff","strokeThickness":6});
		this.add(cheatText);

		// joinValhallaButton
		const joinValhallaButton = scene.add.image(-196, 298, "buttons", 2);
		joinValhallaButton.scaleX = 0.2;
		joinValhallaButton.scaleY = 0.2;
		this.add(joinValhallaButton);

		// joinText
		const joinText = scene.add.text(-356, 286, "", {});
		joinText.text = "Join Valhalla";
		joinText.setStyle({"align":"center","color":"#ffffffff","fixedWidth":320,"stroke":"#000000ff","strokeThickness":3});
		this.add(joinText);

		this.startButton = startButton;
		this.startText = startText;
		this.winDurationText = winDurationText;
		this.cheatText = cheatText;
		this.joinValhallaButton = joinValhallaButton;
		this.joinText = joinText;

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
				item_id: "winScreenReplay"
			});			  

			scene.scene.start("TeronGame");
		});

		// Join Button
		this.joinValhallaButton.setInteractive();

		this.joinValhallaButton.on('pointerdown', function(pointer) {

			var url = 'https://www.youtube.com/watch?v=KtQ9nt2ZeGM';

			var s = window.open(url, '_blank');

			if (s && s.focus)
			{
				s.focus();
			}
			else if (!s)
			{
				window.location.href = url;
			}

			gtag("event", "select_content", {
				content_type: "button",
				item_id: "winScreenJoinValhalla"
			});	
		});

		this.joinValhallaButton.on('pointerover', function (pointer) {
			joinText.tintTopLeft = 16181535; // Yellow
			joinText.tintTopRight = 16181535;
			joinText.tintBottomLeft = 16181535;
			joinText.tintBottomRight = 16181535;
		});

		this.joinValhallaButton.on('pointerout', function (pointer) {
			joinText.tintTopLeft = 16777215; // White
			joinText.tintTopRight = 16777215;
			joinText.tintBottomLeft = 16777215;
			joinText.tintBottomRight = 16777215;
		});

		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Image} */
	startButton;
	/** @type {Phaser.GameObjects.Text} */
	startText;
	/** @type {Phaser.GameObjects.Text} */
	winDurationText;
	/** @type {Phaser.GameObjects.Text} */
	cheatText;
	/** @type {Phaser.GameObjects.Image} */
	joinValhallaButton;
	/** @type {Phaser.GameObjects.Text} */
	joinText;

	/* START-USER-CODE */

	setWinDuration(seconds, cheats) {

		if(cheats) {
			this.winDurationText.setText('You "won" in ' + seconds + " seconds...");
			this.winDurationText.setColor(this.rgbToHex(102, 102, 102)); // Cheaters always grey parse
			this.cheatText.visible = true;
		} else {
			this.winDurationText.setText("You won in " + seconds + " seconds! Can you beat your friends?");
			this.cheatText.visible = false;

			// Theoretically perfect = 27 seconds ... I think?
			if(seconds <= 28) {
				// White
				this.winDurationText.setColor(this.rgbToHex(229, 204, 94));
			} else if (seconds <= 29) {
				// Pink
				this.winDurationText.setColor(this.rgbToHex(226, 104, 130));
			} else if (seconds <= 30) {
				// Orange
				this.winDurationText.setColor(this.rgbToHex(255, 128, 0));
			} else if (seconds <= 32) {
				// Purple
				this.winDurationText.setColor(this.rgbToHex(163, 53, 238));
			} else if (seconds <= 35) {
				// Blue
				this.winDurationText.setColor(this.rgbToHex(0, 112, 255));
			} else if (seconds <= 40){
				// Green
				this.winDurationText.setColor(this.rgbToHex(30, 255, 0));
			} else {
				// Grey
				this.winDurationText.setColor(this.rgbToHex(102, 102, 102));
			}
		}

	}

	componentToHex(c) {
		var hex = c.toString(16);
		return hex.length == 1 ? "0" + hex : hex;
	}

	rgbToHex(r, g, b) {
		return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here