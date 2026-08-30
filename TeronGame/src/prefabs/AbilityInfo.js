
// You can write more code here

/* START OF COMPILED CODE */

class AbilityInfo extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 192, y ?? 200);

		// spell_spiritStrike
		const spell_spiritStrike = scene.add.image(20, -89, "spell_spiritStrike");
		this.add(spell_spiritStrike);

		// text
		const text = scene.add.text(32, -117, "", {});
		text.text = "1";
		text.setStyle({"backgroundColor":"","color":"#ffffffff","fontSize":"20px","stroke":"#000000ff","strokeThickness":5,"shadow.fill":true});
		this.add(text);

		// spell_spiritLance
		const spell_spiritLance = scene.add.image(20, -9, "spell_spiritLance");
		this.add(spell_spiritLance);

		// text_1
		const text_1 = scene.add.text(32, -37, "", {});
		text_1.text = "3";
		text_1.setStyle({"backgroundColor":"","color":"#ffffffff","fontSize":"20px","stroke":"#000000ff","strokeThickness":5,"shadow.fill":true});
		this.add(text_1);

		// spell_spiritChains
		const spell_spiritChains = scene.add.image(20, 71, "spell_spiritChains");
		this.add(spell_spiritChains);

		// text_2
		const text_2 = scene.add.text(32, 43, "", {});
		text_2.text = "4";
		text_2.setStyle({"backgroundColor":"","color":"#ffffffff","fontSize":"20px","stroke":"#000000ff","strokeThickness":5,"shadow.fill":true});
		this.add(text_2);

		// spell_spiritVolley
		const spell_spiritVolley = scene.add.image(20, 151, "spell_spiritVolley");
		this.add(spell_spiritVolley);

		// text_3
		const text_3 = scene.add.text(32, 123, "", {});
		text_3.text = "5";
		text_3.setStyle({"backgroundColor":"","color":"#ffffffff","fontSize":"20px","stroke":"#000000ff","strokeThickness":5,"shadow.fill":true});
		this.add(text_3);

		// spell_spiritShield
		const spell_spiritShield = scene.add.image(20, 231, "spell_spiritShield");
		this.add(spell_spiritShield);

		// text_4
		const text_4 = scene.add.text(32, 203, "", {});
		text_4.text = "7";
		text_4.setStyle({"backgroundColor":"","color":"#ffffffff","fontSize":"20px","stroke":"#000000ff","strokeThickness":5,"shadow.fill":true});
		this.add(text_4);

		// text_5
		const text_5 = scene.add.text(55, -117, "", {});
		text_5.text = "Spirit Strike";
		text_5.setStyle({"fontSize":"20px","fontStyle":"bold"});
		this.add(text_5);

		// text_6
		const text_6 = scene.add.text(55, -93, "", {});
		text_6.text = "Low damage, single target melee ability.";
		text_6.setStyle({"fontSize":"14px"});
		this.add(text_6);

		// text_5_1
		const text_5_1 = scene.add.text(55, -37, "", {});
		text_5_1.text = "Spirit Lance";
		text_5_1.setStyle({"fontSize":"20px","fontStyle":"bold"});
		this.add(text_5_1);

		// text_6_1
		const text_6_1 = scene.add.text(55, -13, "", {});
		text_6_1.text = "Medium damage. Single target. 30 yd range.";
		text_6_1.setStyle({"fontSize":"14px"});
		this.add(text_6_1);

		// text_5_2
		const text_5_2 = scene.add.text(55, 43, "", {});
		text_5_2.text = "Spirit Chains";
		text_5_2.setStyle({"fontSize":"20px","fontStyle":"bold"});
		this.add(text_5_2);

		// text_6_2
		const text_6_2 = scene.add.text(55, 67, "", {});
		text_6_2.text = "Low damage AoE. 15 second CD. 12 yd range.";
		text_6_2.setStyle({"fontSize":"14px"});
		this.add(text_6_2);

		// text_5_3
		const text_5_3 = scene.add.text(55, 123, "", {});
		text_5_3.text = "Spirit Volley";
		text_5_3.setStyle({"fontSize":"20px","fontStyle":"bold"});
		this.add(text_5_3);

		// text_6_3
		const text_6_3 = scene.add.text(55, 149, "", {});
		text_6_3.text = "High Damage AoE. 15 second CD. 12 yd range.";
		text_6_3.setStyle({"fontSize":"14px"});
		this.add(text_6_3);

		// text_5_4
		const text_5_4 = scene.add.text(55, 203, "", {});
		text_5_4.text = "Spirit Shield";
		text_5_4.setStyle({"fontSize":"20px","fontStyle":"bold"});
		this.add(text_5_4);

		// text_6_4
		const text_6_4 = scene.add.text(55, 227, "", {});
		text_6_4.text = "Place shield on a friendly player.";
		text_6_4.setStyle({"fontSize":"14px"});
		this.add(text_6_4);

		// text_6_4_1
		const text_6_4_1 = scene.add.text(55, 244, "", {});
		text_6_4_1.text = "(not functional in this game)";
		text_6_4_1.setStyle({"fontSize":"14px"});
		this.add(text_6_4_1);

		// text_6_2_1
		const text_6_2_1 = scene.add.text(55, 84, "", {});
		text_6_2_1.text = "Apply 5 second roots, broken by any damage.";
		text_6_2_1.setStyle({"fontSize":"14px"});
		this.add(text_6_2_1);

		// text_6_2_1_1
		const text_6_2_1_1 = scene.add.text(55, 4, "", {});
		text_6_2_1_1.text = "Apply 30% slow for 9 seconds, max 3 stacks.";
		text_6_2_1_1.setStyle({"fontSize":"14px"});
		this.add(text_6_2_1_1);

		this.spell_spiritStrike = spell_spiritStrike;
		this.spell_spiritLance = spell_spiritLance;
		this.spell_spiritChains = spell_spiritChains;
		this.spell_spiritVolley = spell_spiritVolley;
		this.text_3 = text_3;
		this.spell_spiritShield = spell_spiritShield;

		/* START-USER-CTR-CODE */
		// Write your code here.
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
	/** @type {Phaser.GameObjects.Text} */
	text_3;
	/** @type {Phaser.GameObjects.Image} */
	spell_spiritShield;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here