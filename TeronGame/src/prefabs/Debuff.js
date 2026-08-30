
// You can write more code here

/* START OF COMPILED CODE */

class Debuff extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 231, y ?? 131);

		// debuff_shadowOfDeath
		const debuff_shadowOfDeath = scene.add.image(11, 0, "debuff_shadowOfDeath");
		this.add(debuff_shadowOfDeath);

		// Timer
		const timer = scene.add.text(-16, 35, "", {});
		timer.text = "15";
		timer.setStyle({"align":"center","fixedWidth":56,"fontSize":"24px","fontStyle":"bold"});
		this.add(timer);

		this.timer = timer;

		/* START-USER-CTR-CODE */
			this.setRemainingSeconds(13);
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Text} */
	timer;

	/* START-USER-CODE */

	countdownEnd;

	setRemainingSeconds(seconds) {
		this.countdownEnd = new Date();
		this.countdownEnd.setSeconds(this.countdownEnd.getSeconds() + seconds);
	}

	update() {
		var currentTime = new Date();
		var remainingSeconds = Math.ceil((this.countdownEnd - currentTime) / 1000);

		if(remainingSeconds <= 0)
		{
			this.visible = false;
		}
		else
		{
			this.timer.setText(remainingSeconds);
		}	

	}


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here