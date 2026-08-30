
// You can write more code here

/* START OF COMPILED CODE */

class Player extends Phaser.GameObjects.Image {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 306, y ?? 177, texture || "balls", frame ?? 0);

		this.tintTopLeft = 16680068;
		this.tintTopRight = 16680068;
		this.tintBottomLeft = 16680068;
		this.tintBottomRight = 16680068;

		// this (components)
		new Physics(this);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */
	movementSpeed = 90;

	moveTarget = null;
	followTarget = false;

	setMoveTarget(newMoveTarget, followTarget) {
		if(newMoveTarget == null) {
			this.moveTarget = null;
			this.followTarget = false;
			return;
		}

		if(followTarget) {
			// If following target, continue to adjust to new target position as it moves around
			this.moveTarget = newMoveTarget;
			this.followTarget = true;
		} else {
			// Otherwise just save a snapshot of where the target was at the time and mvoe to that
			this.moveTarget = {
				x: newMoveTarget.x,
				y: newMoveTarget.y
			};
			this.followTarget = false;
		}
	}

	changeToGhost() {
		this.setFrame(2);
		this.tintTopLeft = 15767551;
		this.tintTopRight = 15767551;
		this.tintBottomLeft = 15767551;
		this.tintBottomRight = 15767551;
	}

	stopMoving() {
		this.body.setVelocityX(0);
		this.body.setVelocityY(0);
	}

	movePlayer(wasd) {

		if (wasd.left.isDown || wasd.a.isDown) {
			this.body.setVelocityX(-this.movementSpeed);
		}
		else if (wasd.right.isDown || wasd.d.isDown) {
			this.body.setVelocityX(this.movementSpeed);
		}
		else {
			this.body.setVelocityX(0);
		}

		if (wasd.down.isDown || wasd.s.isDown) {
			this.body.setVelocityY(this.movementSpeed);
		}
		else if (wasd.up.isDown || wasd.w.isDown) {
			this.body.setVelocityY(-this.movementSpeed);
		}
		else {
			this.body.setVelocityY(0);
		}

		if(this.moveTarget != null) {

			var hasKeyboardInput = (
				 wasd.left.isDown ||
				 wasd.right.isDown ||
				 wasd.down.isDown ||
				 wasd.up.isDown ||
				 wasd.a.isDown ||
				 wasd.d.isDown ||
				 wasd.s.isDown ||
				 wasd.w.isDown
			);

			if(!hasKeyboardInput) {
				var distance = Phaser.Math.Distance.BetweenPoints(this, this.moveTarget);
				if(distance < 8 && !this.followTarget) {
					// When reached auto-move target, stop moving
					this.setMoveTarget(null);
				} else {
					this.scene.physics.moveToObject(this, this.moveTarget, this.movementSpeed);
				}
			} else {
				// Any keyboard input resets auto-move target
				this.setMoveTarget(null);
			}
		}

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here