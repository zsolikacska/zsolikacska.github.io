
// You can write more code here

/* START OF COMPILED CODE */

class AbilityBar extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 240, y ?? 160);

		// spell_spiritStrike
		const spell_spiritStrike = scene.add.image(-8, 24, "spell_spiritStrike");
		this.add(spell_spiritStrike);

		// spell_spiritLance
		const spell_spiritLance = scene.add.image(104, 24, "spell_spiritLance");
		this.add(spell_spiritLance);

		// spell_spiritChains
		const spell_spiritChains = scene.add.image(160, 24, "spell_spiritChains");
		this.add(spell_spiritChains);

		// spell_spiritVolley
		const spell_spiritVolley = scene.add.image(216, 24, "spell_spiritVolley");
		this.add(spell_spiritVolley);

		// spell_spiritShield
		const spell_spiritShield = scene.add.image(328, 24, "spell_spiritShield");
		this.add(spell_spiritShield);

		// spellFrame_SpiritStrike
		const spellFrame_SpiritStrike = scene.add.image(-8, 24, "spellFrame");
		spellFrame_SpiritStrike.visible = false;
		this.add(spellFrame_SpiritStrike);

		// spellFrame_SpiritLance
		const spellFrame_SpiritLance = scene.add.image(104, 24, "spellFrame");
		spellFrame_SpiritLance.visible = false;
		this.add(spellFrame_SpiritLance);

		// spellFrame_SpiritChains
		const spellFrame_SpiritChains = scene.add.image(160, 24, "spellFrame");
		spellFrame_SpiritChains.visible = false;
		this.add(spellFrame_SpiritChains);

		// spellFrame_SpiritVolley
		const spellFrame_SpiritVolley = scene.add.image(216, 24, "spellFrame");
		spellFrame_SpiritVolley.visible = false;
		this.add(spellFrame_SpiritVolley);

		// spellFrame_SpiritShield
		const spellFrame_SpiritShield = scene.add.image(328, 24, "spellFrame");
		spellFrame_SpiritShield.visible = false;
		this.add(spellFrame_SpiritShield);

		// abilityName
		const abilityName = scene.add.text(-288, 12, "", {});
		abilityName.visible = false;
		abilityName.text = "Ability Name";
		abilityName.setStyle({"fontSize":"24px","fontStyle":"bold"});
		this.add(abilityName);

		// text
		const text = scene.add.text(4, -4, "", {});
		text.text = "1";
		text.setStyle({"backgroundColor":"","color":"#ffffffff","fontSize":"20px","stroke":"#000000ff","strokeThickness":5,"shadow.fill":true});
		this.add(text);

		// text_1
		const text_1 = scene.add.text(116, -4, "", {});
		text_1.text = "3";
		text_1.setStyle({"backgroundColor":"","color":"#ffffffff","fontSize":"20px","stroke":"#000000ff","strokeThickness":5,"shadow.fill":true});
		this.add(text_1);

		// text_2
		const text_2 = scene.add.text(172, -4, "", {});
		text_2.text = "4";
		text_2.setStyle({"backgroundColor":"","color":"#ffffffff","fontSize":"20px","stroke":"#000000ff","strokeThickness":5,"shadow.fill":true});
		this.add(text_2);

		// text_3
		const text_3 = scene.add.text(228, -4, "", {});
		text_3.text = "5";
		text_3.setStyle({"backgroundColor":"","color":"#ffffffff","fontSize":"20px","stroke":"#000000ff","strokeThickness":5,"shadow.fill":true});
		this.add(text_3);

		// text_4
		const text_4 = scene.add.text(340, -4, "", {});
		text_4.text = "7";
		text_4.setStyle({"backgroundColor":"","color":"#ffffffff","fontSize":"20px","stroke":"#000000ff","strokeThickness":5,"shadow.fill":true});
		this.add(text_4);

		// spiritVolley_cooldown
		const spiritVolley_cooldown = scene.add.text(188, 4, "", {});
		spiritVolley_cooldown.visible = false;
		spiritVolley_cooldown.text = "15";
		spiritVolley_cooldown.setStyle({"align":"center","color":"#ff0000ff","fixedWidth":56,"fontSize":"36px","fontStyle":"bold","stroke":"#000000ff","strokeThickness":5,"shadow.fill":true});
		this.add(spiritVolley_cooldown);

		// spiritChains_cooldown
		const spiritChains_cooldown = scene.add.text(132, 4, "", {});
		spiritChains_cooldown.visible = false;
		spiritChains_cooldown.text = "15";
		spiritChains_cooldown.setStyle({"align":"center","color":"#ff0000ff","fixedWidth":56,"fontSize":"36px","fontStyle":"bold","stroke":"#000000ff","strokeThickness":5,"shadow.fill":true});
		this.add(spiritChains_cooldown);

		// lists
		const spells = [spell_spiritStrike, spell_spiritLance, spell_spiritChains, spell_spiritVolley, spell_spiritShield]

		this.spell_spiritStrike = spell_spiritStrike;
		this.spell_spiritLance = spell_spiritLance;
		this.spell_spiritChains = spell_spiritChains;
		this.spell_spiritVolley = spell_spiritVolley;
		this.spell_spiritShield = spell_spiritShield;
		this.spellFrame_SpiritStrike = spellFrame_SpiritStrike;
		this.spellFrame_SpiritLance = spellFrame_SpiritLance;
		this.spellFrame_SpiritChains = spellFrame_SpiritChains;
		this.spellFrame_SpiritVolley = spellFrame_SpiritVolley;
		this.spellFrame_SpiritShield = spellFrame_SpiritShield;
		this.abilityName = abilityName;
		this.text_3 = text_3;
		this.spiritVolley_cooldown = spiritVolley_cooldown;
		this.spiritChains_cooldown = spiritChains_cooldown;
		this.spells = spells;

		/* START-USER-CTR-CODE */
		this.initSounds(scene);
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Image} */
	spell_spiritStrike;
	/** @type {Phaser.GameObjects.Image} */
	spell_spiritLance;
	/** @type {Phaser.GameObjects.Image} */
	spell_spiritChains;
	/** @type {Phaser.GameObjects.Image} */
	spell_spiritVolley;
	/** @type {Phaser.GameObjects.Image} */
	spell_spiritShield;
	/** @type {Phaser.GameObjects.Image} */
	spellFrame_SpiritStrike;
	/** @type {Phaser.GameObjects.Image} */
	spellFrame_SpiritLance;
	/** @type {Phaser.GameObjects.Image} */
	spellFrame_SpiritChains;
	/** @type {Phaser.GameObjects.Image} */
	spellFrame_SpiritVolley;
	/** @type {Phaser.GameObjects.Image} */
	spellFrame_SpiritShield;
	/** @type {Phaser.GameObjects.Text} */
	abilityName;
	/** @type {Phaser.GameObjects.Text} */
	text_3;
	/** @type {Phaser.GameObjects.Text} */
	spiritVolley_cooldown;
	/** @type {Phaser.GameObjects.Text} */
	spiritChains_cooldown;
	/** @type {Phaser.GameObjects.Image[]} */
	spells;

	/* START-USER-CODE */

	last_GCD_time = new Date() - 15000;
	last_spiritChains_time = new Date() - 15000;
	last_spiritVolley_time = new Date() - 15000;

	coolingColor = 4473924;
	readyColor = 16777215;

	inputKeys;
	player;
	ghosts;
	targetFrame;
	nocooldowns = false;

	gameEnded = false;


	// Sounds
	spiritStrike_Cast;
	spiritLance_Cast;
	spiritChains_Cast;
	spiritVolley_Cast;

	// Mouse down memory
	spiritStrike_MouseIsOver;
	spiritLance_MouseIsOver;
	spiritChains_MouseIsOver;
	spiritVolley_MouseIsOver;
	spiritShield_MouseIsOver;

	g=0;

	create() {
		this.initClickHandlers();
	}

	update() {
		if(!this.visible) {
			return;	
		}
		this.updateCooldowns();
		this.updateSpellFrames();
		this.activateAbilities();
	}

	updateCooldowns() {

		var currentTime = new Date();
		var gcd = this.isGCD();

		if(gcd) {
			this.tintSpell(this.spell_spiritStrike, this.coolingColor);
			this.tintSpell(this.spell_spiritLance, this.coolingColor);
			this.tintSpell(this.spell_spiritShield, this.coolingColor);
		} else {
			this.tintSpell(this.spell_spiritStrike, this.readyColor);
			this.tintSpell(this.spell_spiritLance, this.readyColor);
			this.tintSpell(this.spell_spiritShield, this.readyColor);
		}

		var spiritChainsElapsed = currentTime - this.last_spiritChains_time;
		var spiritVolleyElapsed = currentTime - this.last_spiritVolley_time;

		var spiritChainsOnCooldown = (!this.nocooldowns && spiritChainsElapsed < 15000);
		var spiritVolleyOnCooldown = (!this.nocooldowns && spiritVolleyElapsed < 15000);

		if(gcd || spiritChainsOnCooldown) {
			this.tintSpell(this.spell_spiritChains, this.coolingColor);

			if(spiritChainsOnCooldown) {
				this.spiritChains_cooldown.visible = true;
				var remainingSeconds = Math.ceil((15000 - spiritChainsElapsed) / 1000);
				this.spiritChains_cooldown.setText(remainingSeconds);
			}
		} else {
			this.tintSpell(this.spell_spiritChains, this.readyColor);
			this.spiritChains_cooldown.visible = false;
		}

		if(gcd || spiritVolleyOnCooldown) {
			this.tintSpell(this.spell_spiritVolley, this.coolingColor);

			if(spiritVolleyOnCooldown) {
				this.spiritVolley_cooldown.visible = true;
				var remainingSeconds = Math.ceil((15000 - spiritVolleyElapsed) / 1000);
				this.spiritVolley_cooldown.setText(remainingSeconds);
			}
		} else {
			this.tintSpell(this.spell_spiritVolley, this.readyColor);
			this.spiritVolley_cooldown.visible = false;
		}

	}

	tintSpell(spell, color) {
		spell.tintTopLeft = color;
		spell.tintTopRight = color;
		spell.tintBottomLeft = color;
		spell.tintBottomRight = color;
	}

	updateSpellFrames() {

		this.spellFrame_SpiritStrike.visible = (this.inputKeys.one.isDown || (this.scene.input.activePointer.isDown && this.spiritStrike_MouseIsOver));
		this.spellFrame_SpiritLance.visible = (this.inputKeys.three.isDown || (this.scene.input.activePointer.isDown && this.spiritLance_MouseIsOver));
		this.spellFrame_SpiritChains.visible = (this.inputKeys.four.isDown || (this.scene.input.activePointer.isDown && this.spiritChains_MouseIsOver));
		this.spellFrame_SpiritVolley.visible = (this.inputKeys.five.isDown || (this.scene.input.activePointer.isDown && this.spiritVolley_MouseIsOver));
		this.spellFrame_SpiritShield.visible = (this.inputKeys.seven.isDown || (this.scene.input.activePointer.isDown && this.spiritShield_MouseIsOver));

	}

	activateAbilities() {

		if (Phaser.Input.Keyboard.JustDown(this.inputKeys.one)) {
			this.activateSpiritStrike();
		} else if (Phaser.Input.Keyboard.JustDown(this.inputKeys.three)) {
			this.activateSpiritLance();
		}  else if (Phaser.Input.Keyboard.JustDown(this.inputKeys.four)) {
			this.activateSpiritChains();
		}  else if (Phaser.Input.Keyboard.JustDown(this.inputKeys.five)) {
			this.activateSpiritVolley();
		}  else if (Phaser.Input.Keyboard.JustDown(this.inputKeys.seven)) {
			this.activateSpiritShield();
		}

	}

	initClickHandlers() {
		this.spell_spiritStrike.setInteractive();
		this.spell_spiritLance.setInteractive();
		this.spell_spiritChains.setInteractive();
		this.spell_spiritVolley.setInteractive();
		this.spell_spiritShield.setInteractive();

		var thisBar = this;

		this.spell_spiritStrike.on('pointerdown', function (pointer) {
			thisBar.activateSpiritStrike();
		});
		this.spell_spiritLance.on('pointerdown', function (pointer) {
			thisBar.activateSpiritLance();
		});
		this.spell_spiritChains.on('pointerdown', function (pointer) {
			thisBar.activateSpiritChains();
		});
		this.spell_spiritVolley.on('pointerdown', function (pointer) {
			thisBar.activateSpiritVolley();
		});
		this.spell_spiritShield.on('pointerdown', function (pointer) {
			thisBar.activateSpiritShield();
		});


		// Remember whether pointer is over a spell, for showing spell frames
		this.spell_spiritStrike.on('pointerover', function (pointer) {
			thisBar.spiritStrike_MouseIsOver = true;
		});
		this.spell_spiritLance.on('pointerover', function (pointer) {
			thisBar.spiritLance_MouseIsOver = true;
		});
		this.spell_spiritChains.on('pointerover', function (pointer) {
			thisBar.spiritChains_MouseIsOver = true;
		});
		this.spell_spiritVolley.on('pointerover', function (pointer) {
			thisBar.spiritVolley_MouseIsOver = true;
		});
		this.spell_spiritShield.on('pointerover', function (pointer) {
			thisBar.spiritShield_MouseIsOver = true;
		});

		this.spell_spiritStrike.on('pointerout', function (pointer) {
			thisBar.spiritStrike_MouseIsOver = false;
		});
		this.spell_spiritLance.on('pointerout', function (pointer) {
			thisBar.spiritLance_MouseIsOver = false;
		});
		this.spell_spiritChains.on('pointerout', function (pointer) {
			thisBar.spiritChains_MouseIsOver = false;
		});
		this.spell_spiritVolley.on('pointerout', function (pointer) {
			thisBar.spiritVolley_MouseIsOver = false;
		});
		this.spell_spiritShield.on('pointerout', function (pointer) {
			thisBar.spiritShield_MouseIsOver = false;
		});
	}

	initSounds(scene) {
		this.spiritStrike_Cast = scene.sound.add('spiritStrike_Cast', {volume: 0.3});
		this.spiritLance_Cast = scene.sound.add('spiritLance_Cast', {volume: 0.2});
		this.spiritChains_Cast = scene.sound.add('spiritChains_Cast', {volume: 0.3});
		this.spiritVolley_Cast = scene.sound.add('spiritVolley_Cast', {volume: 0.3});
	}

	isGCD() {
		var currentTime = new Date();
		var gcd = (currentTime - this.last_GCD_time) < 1000;
		return gcd;
	}

	activateSpiritStrike() {
		if(this.gameEnded) {
			return;
		}

		if(this.targetFrame.target == null) {
			return;	
		}

		if(this.isGCD()) {
			// Can't do anything while GCD still active
			return;
		}

		if(!this.isInRange(this.player, this.targetFrame.target, 6)) {
			return;
		}

		this.spiritStrike_Cast.play();
		this.applySpellDelayed(this.player, this.targetFrame.target, 300, this.targetFrame.target.applySpiritStrike);

		this.setAbilityText("Spirit Strike");
		this.setGCD();
	}

	activateSpiritLance() {
		if(this.gameEnded) {
			return;
		}

		if(this.targetFrame.target == null) {
			return;
		}

		if(this.isGCD()) {
			// Can't do anything while GCD still active
			return;
		}

		if(!this.isInRange(this.player, this.targetFrame.target, 30)) {
			return;
		}

		this.spiritLance_Cast.play()
		this.fireLance(this.player, this.targetFrame.target, 600);
		this.applySpellDelayed(this.player, this.targetFrame.target, 600, this.targetFrame.target.applySpiritLance);

		this.setAbilityText("Spirit Lance");
		this.setGCD();
	}

	activateSpiritChains() {
		if(this.gameEnded) {
			return;
		}

		if(this.spiritChains_cooldown.visible) {
			return; // Still cooling	
		}

		if(this.isGCD()) {
			// Can't do anything while GCD still active
			return;
		}

		this.spiritChains_Cast.play();
		this.fireNova(this.player);

		for(var i = 0; i < 4; i++) {
			if(this.ghosts[i].alive && this.isInRange(this.player, this.ghosts[i], 12)) {
				this.applySpellDelayed(this.player, this.ghosts[i], 300, this.ghosts[i].applySpiritChains);
			}
		}

		this.last_spiritChains_time = new Date();
		this.setAbilityText("Spirit Chains");
		this.setGCD();
	}

	activateSpiritVolley() {
		if(this.gameEnded) {
			return;
		}

		if(this.spiritVolley_cooldown.visible) {
			return; // Still cooling	
		}

		if(this.isGCD()) {
			// Can't do anything while GCD still active
			return;
		}

		this.spiritVolley_Cast.play();

		for(var i = 0; i < 4; i++) {
			if(this.ghosts[i].alive && this.isInRange(this.player, this.ghosts[i], 12)) {
				this.fireLance(this.player, this.ghosts[i], 400);
				this.applySpellDelayed(this.player, this.ghosts[i], 400, this.ghosts[i].applySpiritVolley);
			}
		}	

		this.last_spiritVolley_time = new Date();
		this.setAbilityText("Spirit Volley");
		this.setGCD();
	}

	activateSpiritShield() {
		if(this.gameEnded) {
			return;
		}

		if(this.isGCD()) {
			// Can't do anything while GCD still active
			return;
		}
		this.setAbilityText("Spirit Shield");
		this.setGCD();
	}

	setGCD() {
		this.last_GCD_time = new Date();
		this.g+=1;
	}

	setAbilityText(text) {
		this.abilityName.text = text;
		this.abilityName.visible = true;
	}

	isInRange(player, target, rangeYards) {
		// In-game player movement speed is 7 yards per second
		// So convert whatever the yards value is into game-coordinates based on this
		var rangeGame = rangeYards * (player.movementSpeed / 7.0);

		var distance = Phaser.Math.Distance.BetweenPoints(player, target);

		return (distance <= rangeGame);
	}

	getTravelTime(source, target, speed) {
		var distance = Phaser.Math.Distance.BetweenPoints(source, target);
		return distance / speed;
	}

	fireLance(source, target, speed) {
		var particles = this.scene.add.particles('blueFlare');

		var playerBox = new Phaser.Geom.Rectangle(this.player.x, this.player.y, 5, 5);

		particles.createEmitter({
			x: source.x,
			y: source.y,
			speed: { min: 100, max: -500 },
			angle: Phaser.Math.Angle.Between(target.x, target.y, source.x, source.y) / Phaser.Math.DEG_TO_RAD,
			gravityY: 0,
			scale: { start: 0.1, end: 0 },
			quantity: 1,
			lifespan: 200,
			blendMode: 'ADD'
		});

		var tween = this.scene.tweens.add({
			targets: particles,
			x: (target.x - source.x),
			y: (target.y - source.y),
			ease: 'Linear',
			duration: this.getTravelTime(source, target, speed) * 1000,
			onComplete: function () { particles.destroy(); }
		});
	}

	fireNova(source) {
		var particles = this.scene.add.particles('blueFlare');
		particles.setDepth(-1);
		var emitter = particles.createEmitter({
			x: source.x,
			y: source.y,
			speed: 270,
			blendMode: 'ADD',
			lifespan: 514,
			quantity: 10,
			scale: { start: 0.0, end: 0.5 }
		});		
		this.scene.time.delayedCall(514, function() { particles.destroy() });
	}

	applySpellDelayed(source, target, speed, callback) {
		var travelTime = this.getTravelTime(source, target, speed);
		this.scene.time.delayedCall(travelTime * 1000, callback, null, target);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here