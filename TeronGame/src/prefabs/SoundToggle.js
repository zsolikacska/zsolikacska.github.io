
// You can write more code here

/* START OF COMPILED CODE */

class SoundToggle extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 287, y ?? 270);

		// soundOn
		const soundOn = scene.add.image(19, 2, "soundOn");
		soundOn.scaleX = 0.5;
		soundOn.scaleY = 0.5;
		soundOn.tintFill = true;
		this.add(soundOn);

		// soundOff
		const soundOff = scene.add.image(15, 2, "soundOff");
		soundOff.scaleX = 0.5;
		soundOff.scaleY = 0.5;
		soundOff.visible = false;
		soundOff.tintFill = true;
		this.add(soundOff);

		/* START-USER-CTR-CODE */

		soundOn.visible = !game.sound.mute;
		soundOff.visible = game.sound.mute;

		soundOn.setInteractive();
		soundOff.setInteractive();

		this.initSoundButton(soundOn, soundOff, 16067885); // Red
		this.initSoundButton(soundOff, soundOn, 5632334); // Green

		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	initSoundButton(button, otherButton, mouseoverColour) {
		button.on('pointerdown', function (pointer) {	
			button.visible = false;
			otherButton.visible = true;
			game.sound.mute = !game.sound.mute;

			if(game.sound.mute) {
				gtag("event", "select_content", {
					content_type: "button",
					item_id: "muteGame"
				});	
			} else {
				gtag("event", "select_content", {
					content_type: "button",
					item_id: "unmuteGame"
				});	
			}
		});

		button.on('pointerover', function (pointer) {
			button.tintTopLeft = mouseoverColour;
			button.tintTopRight = mouseoverColour;
			button.tintBottomLeft = mouseoverColour;
			button.tintBottomRight = mouseoverColour;
		});

		button.on('pointerout', function (pointer) {
			button.tintTopLeft = 16777215; // White
			button.tintTopRight = 16777215;
			button.tintBottomLeft = 16777215;
			button.tintBottomRight = 16777215;
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here