
// You can write more code here

/* START OF COMPILED CODE */

class Named {

	constructor(gameObject) {
		this.gameObject = gameObject;
		gameObject["__Named"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {Named} */
	static getComponent(gameObject) {
		return gameObject["__Named"];
	}

	/** @type {Phaser.GameObjects.Image} */
	gameObject;
	/** @type {string} */
	name = "";

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here