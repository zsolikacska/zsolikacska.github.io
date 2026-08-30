
// You can write more code here

/* START OF COMPILED CODE */

class Ghost extends Phaser.GameObjects.Image {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 312, y ?? 204, texture || "ghost_transparent", frame);

		this.scaleX = 0.15;
		this.scaleY = 0.15;

		// this (components)
		new Physics(this);
		new Named(this);

		/* START-USER-CTR-CODE */
		this.visible = false;
		this.initSounds(scene);
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */
	maxSpeed = 45;
	//maxSpeed = 4; // For testing
	currentSpeed = this.maxSpeed;

	alive = true;	

	spawnTime;

	maxHP = 65000.0;
	currentHP = this.maxHP;

	frozen = false;
	frozenAt = new Date() - 5000;

	lancedAt = new Date() - 10000;
	lanceStacks = 0;

	whiteTint = 16777215;
	blueTint = 8098289;

	deathSound;
	spiritStrike_Impact;
	spiritLance_Impact;
	spiritChains_Impact;
	spiritVolley_Impact;

	initSounds(scene){
		this.deathSound = scene.sound.add('ghost_Death', {volume: 0.3});
		this.spiritStrike_Impact = scene.sound.add('spiritStrike_Impact', {volume: 0.3});
		this.spiritLance_Impact = scene.sound.add('spiritLance_Impact', {volume: 0.2});
		this.spiritChains_Impact = scene.sound.add('spiritChains_Impact', {volume: 0.3});
		this.spiritVolley_Impact = scene.sound.add('spiritVolley_Impact', {volume: 0.3});
	}

	update() {
		if(!this.visible) {
			return;
		}
		this.moveGhost();
		this.checkDebuffs();
	}


	frozenTimeRemaining() {
		var currentTime = new Date();
		var timeSinceFrozen = currentTime - this.frozenAt;
		if(timeSinceFrozen >= 5000) {
			return 0;
		} else {
			return 5000 - timeSinceFrozen;	
		}
	}

	unfreeze(d) {
		if(d != null) {
			this.td += d;
		}

		this.frozen = false;
	}

	lanceTimeRemaining() {
		var currentTime = new Date();
		var timeSinceLanced = currentTime - this.lancedAt;
		if(timeSinceLanced >= 9000) {
			return 0;
		} else {
			return 9000 - timeSinceLanced;	
		}
	}

	applySpiritStrike() {
		// 638 - 862
		this.applyDamage(638, 862);
		this.spiritStrike_Impact.play();
		this.s+=1;
	}

	applySpiritLance() {
		// 6175 - 6825
		this.applyDamage(6175, 6825);
		if(this.lanceStacks < 3) { // Max 3 stacks
			this.lanceStacks += 1;
			this.currentSpeed -= (0.3 * this.maxSpeed);
		}
		this.lancedAt = new Date(); // Refresh debuff duration

		// Apply lance colouration
		this.tintTopLeft = this.blueTint;
		this.tintTopRight = this.blueTint;
		this.tintBottomLeft = this.blueTint;
		this.tintBottomRight = this.blueTint;
		this.l+=1;

		this.spiritLance_Impact.play();
	}

	applySpiritChains() {
		// 1900 - 2100
		this.applyDamage(1900, 2100);
		this.frozen = true;
		this.frozenAt = new Date();
		this.spiritChains_Impact.play();
		this.c+=1;
	}

	applySpiritVolley() {
		// 9900 - 12100
		this.applyDamage(9900, 12100);
		this.spiritVolley_Impact.play();
		this.v+=1;
	}

	applyDamage(minDamage, maxDamage) {		

		var damage = ((maxDamage - minDamage) / 2) + minDamage; // Average
		if(damage > this.currentHP) {
			damage = this.currentHP;
		}
		this.currentHP -= damage;
		
		this.unfreeze(damage) // Any damage removes frozen

		if(this.currentHP <= 0) {
			this.die();
		}
	}

	die() {
		this.alive = false;
		//this.visible = false;
		this.deathSound.play({
			delay: 0.1
		});

		var ghost = this;
		this.scene.tweens.add({
			targets: this,
			alpha: 0,
			duration: 300,
			ease: 'Power2',
			onComplete: function () { ghost.visible = false; }
		});
	}

	stopMoving() {
		this.body.setVelocityX(0);
		this.body.setVelocityY(0);
	}

	checkDebuffs() {		

		if(this.frozen) {
			if(this.frozenTimeRemaining() == 0) {
				this.unfreeze(null)
			}
		}

		if(this.lanceStacks > 0) {
			if(this.lanceTimeRemaining() == 0) {
				this.currentSpeed = this.maxSpeed;
				this.lanceStacks = 0;

				// Remove lance colouration
				this.tintTopLeft = this.whiteTint;
				this.tintTopRight = this.whiteTint;
				this.tintBottomLeft = this.whiteTint;
				this.tintBottomRight = this.whiteTint;
			}
		}
	}
	
	moveGhost() {		
		var currentTime = new Date();
		var timeSinceSpawn = currentTime - this.spawnTime;
		if(timeSinceSpawn < 1000) {
			return; // Grace period - don't start moving until 1 second after spawn	
		}

		var target;
		if((this.x >= 240 && this.x <= 360) || this.y <= 270) {
			target = new Phaser.Geom.Point(300, 150); // Boss
		} else {
			target = new Phaser.Geom.Point(300, 310); // "Doorway" to boss
		}

		if(this.frozen == true) {
			this.scene.physics.moveToObject(this, target, 0);
		} else {
			this.scene.physics.moveToObject(this, target, this.currentSpeed);
		}		
	}

	td=0;
	v=0;
	l=0;
	c=0;
	s=0;

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here