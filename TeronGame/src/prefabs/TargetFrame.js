
// You can write more code here

/* START OF COMPILED CODE */

class TargetFrame extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 290, y ?? 170);

		// targetFrame
		const targetFrame = scene.add.image(70, -2, "targetFrame");
		targetFrame.setOrigin(0, 0);
		this.add(targetFrame);

		// hpBackground
		const hpBackground = scene.add.rectangle(73, 23, 130, 22);
		hpBackground.setOrigin(0, 0);
		hpBackground.isFilled = true;
		hpBackground.fillColor = 7311462;
		this.add(hpBackground);

		// hpForeground
		const hpForeground = scene.add.rectangle(73, 23, 130, 22);
		hpForeground.scaleX = 0.75;
		hpForeground.setOrigin(0, 0);
		hpForeground.isFilled = true;
		hpForeground.fillColor = 35328;
		this.add(hpForeground);

		// targetName
		const targetName = scene.add.text(95, 3, "", {});
		targetName.text = "Deadly Construct 1";
		targetName.setStyle({"fontFamily":"Arial Narrow","fontSize":"11px"});
		this.add(targetName);

		// hpPercentage
		const hpPercentage = scene.add.text(205, 28, "", {});
		hpPercentage.text = "75%";
		hpPercentage.setStyle({"fontFamily":"Arial","fontSize":"10px"});
		this.add(hpPercentage);

		// text_1
		const text_1 = scene.add.text(205, 45, "", {});
		text_1.text = "100%";
		text_1.setStyle({"fontFamily":"Arial","fontSize":"10px"});
		this.add(text_1);

		// spell_spiritLance
		const spell_spiritLance = scene.add.image(227, 73, "spell_spiritLance");
		spell_spiritLance.scaleX = 0.5;
		spell_spiritLance.scaleY = 0.5;
		this.add(spell_spiritLance);

		// spell_spiritChains
		const spell_spiritChains = scene.add.image(197, 73, "spell_spiritChains");
		spell_spiritChains.scaleX = 0.5;
		spell_spiritChains.scaleY = 0.5;
		this.add(spell_spiritChains);

		// chainsTimer
		const chainsTimer = scene.add.text(183, 88, "", {});
		chainsTimer.scaleX = 0.5;
		chainsTimer.scaleY = 0.5;
		chainsTimer.text = "15";
		chainsTimer.setStyle({"align":"center","fixedWidth":56,"fontSize":"24px","fontStyle":"bold"});
		this.add(chainsTimer);

		// lanceTimer
		const lanceTimer = scene.add.text(213, 88, "", {});
		lanceTimer.scaleX = 0.5;
		lanceTimer.scaleY = 0.5;
		lanceTimer.text = "15";
		lanceTimer.setStyle({"align":"center","fixedWidth":56,"fontSize":"24px","fontStyle":"bold"});
		this.add(lanceTimer);

		// lanceStacks
		const lanceStacks = scene.add.text(229, 71, "", {});
		lanceStacks.scaleX = 0.66;
		lanceStacks.scaleY = 0.66;
		lanceStacks.text = "2";
		lanceStacks.setStyle({"backgroundColor":"","color":"#ffffffff","fontSize":"20px","stroke":"#000000ff","strokeThickness":5,"shadow.fill":true});
		this.add(lanceStacks);

		this.hpBackground = hpBackground;
		this.hpForeground = hpForeground;
		this.targetName = targetName;
		this.hpPercentage = hpPercentage;
		this.spell_spiritLance = spell_spiritLance;
		this.spell_spiritChains = spell_spiritChains;
		this.chainsTimer = chainsTimer;
		this.lanceTimer = lanceTimer;
		this.lanceStacks = lanceStacks;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Rectangle} */
	hpBackground;
	/** @type {Phaser.GameObjects.Rectangle} */
	hpForeground;
	/** @type {Phaser.GameObjects.Text} */
	targetName;
	/** @type {Phaser.GameObjects.Text} */
	hpPercentage;
	/** @type {Phaser.GameObjects.Image} */
	spell_spiritLance;
	/** @type {Phaser.GameObjects.Image} */
	spell_spiritChains;
	/** @type {Phaser.GameObjects.Text} */
	chainsTimer;
	/** @type {Phaser.GameObjects.Text} */
	lanceTimer;
	/** @type {Phaser.GameObjects.Text} */
	lanceStacks;

	/* START-USER-CODE */

	target = null;

	setTarget(newTarget) {
		this.target = newTarget;

		if(newTarget != null) {
			this.targetName.setText(Named.getComponent(newTarget).name);
			this.visible = true;
		} else {
			this.visible = false;
		}

	}

	update() {
		if(this.target == null) {
			return;
		}

		if(!this.target.alive) {
			this.setTarget(null);
			return;
		}

		var targetPercentHP = this.target.currentHP / this.target.maxHP;
		var targetRoundedPercentHP = Math.ceil(targetPercentHP * 100);
		this.hpPercentage.setText(targetRoundedPercentHP + "%");
		this.hpForeground.scaleX = targetPercentHP;

		this.hpForeground.fillColor = this.getGtoRScaleValue(138, 0, 0, targetPercentHP);
		this.hpBackground.fillColor = this.getGtoRScaleValue(144, 111, 102, targetPercentHP);

		this.lanceStacks.visible = (this.target.lanceStacks > 1);
		this.lanceStacks.setText(this.target.lanceStacks);

		var lanceRemainingSeconds = Math.ceil(this.target.lanceTimeRemaining() / 1000);
		this.lanceTimer.setText(lanceRemainingSeconds);
		this.lanceTimer.visible = (this.target.lanceTimeRemaining() > 0)
		this.spell_spiritLance.visible = (this.target.lanceTimeRemaining() > 0)

		var chainsRemainingSeconds = Math.ceil(this.target.frozenTimeRemaining() / 1000);
		this.chainsTimer.setText(chainsRemainingSeconds);
		this.chainsTimer.visible = (this.target.frozenTimeRemaining() > 0)
		this.spell_spiritChains.visible = (this.target.frozenTimeRemaining() > 0)

	}

	getGtoRScaleValue(greenMax, redMin, blueValue, percentHP) {
		var greenAmount = greenMax;
		if(percentHP <= .5) {
			var greenRange = greenMax - blueValue;
			var greenAmount = blueValue + Math.ceil(greenRange * percentHP * 2);	
		}

		var redRange = greenMax - redMin;
		var redAmount = redMin + Math.ceil(redRange * ((1.0 - percentHP) * 2));
		if(percentHP <= .5) {
			redAmount = greenMax;
		}

		return this.colourToNumber(redAmount, greenAmount, blueValue)
	}

	colourToNumber(r, g, b) {
	  return (r << 16) + (g << 8) + (b);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here