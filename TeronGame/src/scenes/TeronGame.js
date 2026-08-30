
// You can write more code here

/* START OF COMPILED CODE */

class TeronGame extends Phaser.Scene {

	constructor() {
		super("TeronGame");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// background
		const background = this.add.image(300, 400, "background");

		// wall1
		const wall1 = this.add.rectangle(134, 782, 128, 40);

		// rectangle
		const rectangle = this.add.rectangle(39, 506, 50, 550);

		// rectangle_1
		const rectangle_1 = this.add.rectangle(137, 243, 128, 128);

		// rectangle_2
		const rectangle_2 = this.add.rectangle(216, 291, 32, 32);

		// rectangle_2_1
		const rectangle_2_1 = this.add.rectangle(216, 259, 32, 32);

		// rectangle_2_2
		const rectangle_2_2 = this.add.rectangle(197, 234, 32, 32);

		// rectangle_2_3
		const rectangle_2_3 = this.add.rectangle(194, 791, 32, 32);

		// rectangle_2_4
		const rectangle_2_4 = this.add.rectangle(406, 789, 32, 32);

		// rectangle_3
		const rectangle_3 = this.add.rectangle(556, 523, 50, 550);

		// wall1_1
		const wall1_1 = this.add.rectangle(487, 784, 128, 40);

		// rectangle_1_1
		const rectangle_1_1 = this.add.rectangle(470, 243, 128, 128);

		// rectangle_2_1_1
		const rectangle_2_1_1 = this.add.rectangle(391, 291, 32, 32);

		// rectangle_2_1_2
		const rectangle_2_1_2 = this.add.rectangle(391, 260, 32, 32);

		// rectangle_2_1_3
		const rectangle_2_1_3 = this.add.rectangle(409, 238, 32, 32);

		// rectangle_4
		const rectangle_4 = this.add.rectangle(470, 119, 128, 128);

		// rectangle_4_1
		const rectangle_4_1 = this.add.rectangle(137, 118, 128, 128);

		// rectangle_4_2
		const rectangle_4_2 = this.add.rectangle(299, 30, 256, 48);

		// rectangle_5
		const rectangle_5 = this.add.rectangle(202, 57, 48, 48);

		// rectangle_5_1
		const rectangle_5_1 = this.add.rectangle(408, 61, 48, 48);

		// rectangle_2_2_1
		const rectangle_2_2_1 = this.add.rectangle(385, 53, 32, 32);

		// rectangle_2_2_2
		const rectangle_2_2_2 = this.add.rectangle(413, 82, 32, 32);

		// rectangle_2_2_3
		const rectangle_2_2_3 = this.add.rectangle(230, 49, 32, 32);

		// rectangle_2_2_4
		const rectangle_2_2_4 = this.add.rectangle(191, 222, 32, 32);

		// rectangle_2_2_5
		const rectangle_2_2_5 = this.add.rectangle(207, 252, 32, 32);

		// rectangle_2_2_4_1
		const rectangle_2_2_4_1 = this.add.rectangle(199, 78, 32, 32);

		// rectangle_2_2_4_2
		const rectangle_2_2_4_2 = this.add.rectangle(367, 44, 32, 32);

		// rectangle_2_2_4_3
		const rectangle_2_2_4_3 = this.add.rectangle(402, 250, 32, 32);

		// rectangle_2_2_4_4
		const rectangle_2_2_4_4 = this.add.rectangle(415, 229, 32, 32);

		// rectangle_2_2_3_1
		const rectangle_2_2_3_1 = this.add.rectangle(189, 783, 32, 32);

		// rectangle_2_2_3_2
		const rectangle_2_2_3_2 = this.add.rectangle(201, 803, 32, 32);

		// rectangle_2_2_3_3
		const rectangle_2_2_3_3 = this.add.rectangle(389, 809, 32, 32);

		// rectangle_2_2_3_4
		const rectangle_2_2_3_4 = this.add.rectangle(396, 800, 32, 32);

		// rectangle_2_2_3_5
		const rectangle_2_2_3_5 = this.add.rectangle(402, 794, 32, 32);

		// rectangle_2_2_3_6
		const rectangle_2_2_3_6 = this.add.rectangle(415, 783, 32, 32);

		// rectangle_2_2_3_7
		const rectangle_2_2_3_7 = this.add.rectangle(186, 209, 32, 32);

		// rectangle_2_2_3_8
		const rectangle_2_2_3_8 = this.add.rectangle(394, 62, 32, 32);

		// rectangle_2_2_3_9
		const rectangle_2_2_3_9 = this.add.rectangle(379, 50, 32, 32);

		// rectangle_2_2_3_10
		const rectangle_2_2_3_10 = this.add.rectangle(408, 76, 32, 32);

		// rectangle_2_2_3_11
		const rectangle_2_2_3_11 = this.add.rectangle(419, 89, 32, 32);

		// rectangle_2_2_3_12
		const rectangle_2_2_3_12 = this.add.rectangle(245, 40, 32, 32);

		// rectangle_2_2_3_13
		const rectangle_2_2_3_13 = this.add.rectangle(220, 54, 32, 32);

		// rectangle_2_2_3_14
		const rectangle_2_2_3_14 = this.add.rectangle(191, 81, 32, 32);

		// rectangle_2_2_3_15
		const rectangle_2_2_3_15 = this.add.rectangle(64, 291, 32, 32);

		// rectangle_2_2_3_16
		const rectangle_2_2_3_16 = this.add.rectangle(61, 780, 32, 32);

		// rectangle_2_2_3_17
		const rectangle_2_2_3_17 = this.add.rectangle(201, 290, 32, 32);

		// rectangle_2_2_3_7_1
		const rectangle_2_2_3_7_1 = this.add.rectangle(204, 245, 32, 32);

		// rectangle_2_2_3_7_2
		const rectangle_2_2_3_7_2 = this.add.rectangle(200, 241, 32, 32);

		// rectangle_2_2_3_7_3
		const rectangle_2_2_3_7_3 = this.add.rectangle(200, 237, 32, 32);

		// rectangle_2_2_3_7_4
		const rectangle_2_2_3_7_4 = this.add.rectangle(189, 217, 32, 32);

		// rectangle_2_2_3_7_5
		const rectangle_2_2_3_7_5 = this.add.rectangle(195, 227, 32, 32);

		// rectangle_2_2_3_7_6
		const rectangle_2_2_3_7_6 = this.add.rectangle(207, 248, 32, 32);

		// rectangle_2_2_3_7_7
		const rectangle_2_2_3_7_7 = this.add.rectangle(211, 252, 32, 32);

		// rectangle_2_2_3_7_8
		const rectangle_2_2_3_7_8 = this.add.rectangle(204, 241, 32, 32);

		// ellipse_1
		const ellipse_1 = this.add.ellipse(320, 185, 17, 17);
		ellipse_1.isFilled = true;
		ellipse_1.fillColor = 15851570;

		// ellipse_2
		const ellipse_2 = this.add.ellipse(307, 121, 17, 17);
		ellipse_2.isFilled = true;
		ellipse_2.fillColor = 8475429;

		// ellipse_2_1
		const ellipse_2_1 = this.add.ellipse(345, 169, 17, 17);
		ellipse_2_1.isFilled = true;
		ellipse_2_1.fillColor = 8475429;

		// ellipse_2_1_1
		const ellipse_2_1_1 = this.add.ellipse(281, 188, 17, 17);
		ellipse_2_1_1.isFilled = true;
		ellipse_2_1_1.fillColor = 3090405;

		// ellipse_2_1_1_1
		const ellipse_2_1_1_1 = this.add.ellipse(391, 149, 17, 17);
		ellipse_2_1_1_1.isFilled = true;
		ellipse_2_1_1_1.fillColor = 3090405;

		// ellipse_2_1_1_2
		const ellipse_2_1_1_2 = this.add.ellipse(277, 171, 17, 17);
		ellipse_2_1_1_2.isFilled = true;
		ellipse_2_1_1_2.fillColor = 15883021;

		// ellipse_2_1_1_2_1
		const ellipse_2_1_1_2_1 = this.add.ellipse(273, 75, 17, 17);
		ellipse_2_1_1_2_1.isFilled = true;
		ellipse_2_1_1_2_1.fillColor = 15883021;

		// ellipse_1_1
		const ellipse_1_1 = this.add.ellipse(329, 171, 17, 17);
		ellipse_1_1.isFilled = true;
		ellipse_1_1.fillColor = 16081896;

		// ellipse_1_1_1
		const ellipse_1_1_1 = this.add.ellipse(391, 127, 17, 17);
		ellipse_1_1_1.isFilled = true;
		ellipse_1_1_1.fillColor = 16081896;

		// ellipse_1_1_2
		const ellipse_1_1_2 = this.add.ellipse(264, 183, 17, 17);
		ellipse_1_1_2.isFilled = true;
		ellipse_1_1_2.fillColor = 16081896;

		// ellipse_1_1_1_1
		const ellipse_1_1_1_1 = this.add.ellipse(223, 103, 17, 17);
		ellipse_1_1_1_1.isFilled = true;
		ellipse_1_1_1_1.fillColor = 4897530;

		// ellipse_1_1_1_1_1
		const ellipse_1_1_1_1_1 = this.add.ellipse(374, 98, 17, 17);
		ellipse_1_1_1_1_1.isFilled = true;
		ellipse_1_1_1_1_1.fillColor = 4897530;

		// ellipse_1_1_1_1_2
		const ellipse_1_1_1_1_2 = this.add.ellipse(241, 131, 17, 17);
		ellipse_1_1_1_1_2.isFilled = true;
		ellipse_1_1_1_1_2.fillColor = 10630128;

		// ellipse_1_1_1_1_2_1
		const ellipse_1_1_1_1_2_1 = this.add.ellipse(217, 163, 17, 17);
		ellipse_1_1_1_1_2_1.isFilled = true;
		ellipse_1_1_1_1_2_1.fillColor = 10630128;

		// ellipse_1_1_1_1_2_2
		const ellipse_1_1_1_1_2_2 = this.add.ellipse(353, 79, 17, 17);
		ellipse_1_1_1_1_2_2.isFilled = true;
		ellipse_1_1_1_1_2_2.fillColor = 10630128;

		// ellipse_1_1_1_1_2_3
		const ellipse_1_1_1_1_2_3 = this.add.ellipse(351, 112, 17, 17);
		ellipse_1_1_1_1_2_3.isFilled = true;
		ellipse_1_1_1_1_2_3.fillColor = 10630128;

		// ellipse_1_1_1_1_2_4
		const ellipse_1_1_1_1_2_4 = this.add.ellipse(218, 124, 17, 17);
		ellipse_1_1_1_1_2_4.isFilled = true;

		// ellipse_1_1_1_1_2_4_1
		const ellipse_1_1_1_1_2_4_1 = this.add.ellipse(331, 73, 17, 17);
		ellipse_1_1_1_1_2_4_1.isFilled = true;

		// ellipse_1_1_1_2
		const ellipse_1_1_1_2 = this.add.ellipse(245, 83, 17, 17);
		ellipse_1_1_1_2.isFilled = true;
		ellipse_1_1_1_2.fillColor = 4113452;

		// ellipse_1_1_1_2_1
		const ellipse_1_1_1_2_1 = this.add.ellipse(291, 67, 17, 17);
		ellipse_1_1_1_2_1.isFilled = true;
		ellipse_1_1_1_2_1.fillColor = 4113452;

		// ellipse_1_1_1_2_2
		const ellipse_1_1_1_2_2 = this.add.ellipse(244, 107, 17, 17);
		ellipse_1_1_1_2_2.isFilled = true;
		ellipse_1_1_1_2_2.fillColor = 4113452;

		// ellipse_2_1_1_1_1
		const ellipse_2_1_1_1_1 = this.add.ellipse(218, 144, 17, 17);
		ellipse_2_1_1_1_1.isFilled = true;
		ellipse_2_1_1_1_1.fillColor = 3090405;

		// ellipse_2_1_1_1_2
		const ellipse_2_1_1_1_2 = this.add.ellipse(311, 69, 17, 17);
		ellipse_2_1_1_1_2.isFilled = true;
		ellipse_2_1_1_1_2.fillColor = 3090405;

		// ellipse_2_1_1_3
		const ellipse_2_1_1_3 = this.add.ellipse(338, 184, 17, 17);
		ellipse_2_1_1_3.isFilled = true;
		ellipse_2_1_1_3.fillColor = 3090405;

		// ellipse_1_1_1_1_2_4_1_1
		const ellipse_1_1_1_1_2_4_1_1 = this.add.ellipse(391, 170, 17, 17);
		ellipse_1_1_1_1_2_4_1_1.isFilled = true;

		// debuff
		const debuff = new Debuff(this, 527, 163);
		this.add.existing(debuff);
		debuff.scaleX = 0.75;
		debuff.scaleY = 0.75;

		// targetHighlight
		const targetHighlight = this.add.ellipse(300, 762, 27, 27);
		targetHighlight.isStroked = true;
		targetHighlight.strokeColor = 13570321;
		targetHighlight.strokeAlpha = 0.75;
		targetHighlight.lineWidth = 3;

		// freeze_ghost_1
		const freeze_ghost_1 = this.add.rectangle(207, 724, 30, 30);
		freeze_ghost_1.isStroked = true;
		freeze_ghost_1.strokeColor = 2729211;
		freeze_ghost_1.lineWidth = 2;

		// freeze_ghost_2
		const freeze_ghost_2 = this.add.rectangle(271, 725, 30, 30);
		freeze_ghost_2.isStroked = true;
		freeze_ghost_2.strokeColor = 2729211;
		freeze_ghost_2.lineWidth = 2;

		// freeze_ghost_3
		const freeze_ghost_3 = this.add.rectangle(327, 725, 30, 30);
		freeze_ghost_3.isStroked = true;
		freeze_ghost_3.strokeColor = 2729211;
		freeze_ghost_3.lineWidth = 2;

		// freeze_ghost_4
		const freeze_ghost_4 = this.add.rectangle(387, 726, 30, 30);
		freeze_ghost_4.isStroked = true;
		freeze_ghost_4.strokeColor = 2729211;
		freeze_ghost_4.lineWidth = 2;

		// ghost_4
		const ghost_4 = new Ghost(this, 387, 688);
		this.add.existing(ghost_4);

		// ghost_1
		const ghost_1 = new Ghost(this, 207, 689);
		this.add.existing(ghost_1);

		// ghost_2
		const ghost_2 = new Ghost(this, 272, 689);
		this.add.existing(ghost_2);

		// ghost_3
		const ghost_3 = new Ghost(this, 329, 688);
		this.add.existing(ghost_3);

		// player
		const player = new Player(this, 245, 152);
		this.add.existing(player);
		player.tintTopLeft = 16777215;
		player.tintTopRight = 16777215;
		player.tintBottomLeft = 16777215;
		player.tintBottomRight = 16777215;

		// abilityBar
		const abilityBar = new AbilityBar(this, 193, 766);
		this.add.existing(abilityBar);
		abilityBar.scaleX = 0.66;
		abilityBar.scaleY = 0.66;
		abilityBar.visible = false;

		// targetFrame
		const targetFrame = new TargetFrame(this, 343, 239);
		this.add.existing(targetFrame);

		// soundToggle
		const soundToggle = new SoundToggle(this, 544, 34);
		this.add.existing(soundToggle);

		// winOverlay
		const winOverlay = new WinOverlay(this, 300, 260);
		this.add.existing(winOverlay);
		winOverlay.visible = false;

		// loseOverlay
		const loseOverlay = new LoseOverlay(this, 122, 400);
		this.add.existing(loseOverlay);
		loseOverlay.visible = false;

		// lists
		const walls = [rectangle_1, rectangle_2, rectangle_2_1, rectangle_2_2, rectangle, wall1, rectangle_2_3, rectangle_2_4, rectangle_3, rectangle_1_1, wall1_1, rectangle_2_1_1, rectangle_2_1_2, rectangle_2_1_3, rectangle_4, rectangle_4_1, rectangle_4_2, rectangle_5, rectangle_5_1, rectangle_2_2_1, rectangle_2_2_2, rectangle_2_2_3, rectangle_2_2_4, rectangle_2_2_5, rectangle_2_2_4_1, rectangle_2_2_4_2, rectangle_2_2_4_3, rectangle_2_2_4_4]
		const ghosts = [ghost_1, ghost_2, ghost_3, ghost_4]

		// wall1 (components)
		new PhysicsStatic(wall1);

		// rectangle (components)
		new PhysicsStatic(rectangle);

		// rectangle_1 (components)
		new PhysicsStatic(rectangle_1);

		// rectangle_2 (components)
		new PhysicsStatic(rectangle_2);

		// rectangle_2_1 (components)
		new PhysicsStatic(rectangle_2_1);

		// rectangle_2_2 (components)
		new PhysicsStatic(rectangle_2_2);

		// rectangle_2_3 (components)
		new PhysicsStatic(rectangle_2_3);

		// rectangle_2_4 (components)
		new PhysicsStatic(rectangle_2_4);

		// rectangle_3 (components)
		new PhysicsStatic(rectangle_3);

		// wall1_1 (components)
		new PhysicsStatic(wall1_1);

		// rectangle_1_1 (components)
		new PhysicsStatic(rectangle_1_1);

		// rectangle_2_1_1 (components)
		new PhysicsStatic(rectangle_2_1_1);

		// rectangle_2_1_2 (components)
		new PhysicsStatic(rectangle_2_1_2);

		// rectangle_2_1_3 (components)
		new PhysicsStatic(rectangle_2_1_3);

		// rectangle_4 (components)
		new PhysicsStatic(rectangle_4);

		// rectangle_4_1 (components)
		new PhysicsStatic(rectangle_4_1);

		// rectangle_4_2 (components)
		new PhysicsStatic(rectangle_4_2);

		// rectangle_5 (components)
		new PhysicsStatic(rectangle_5);

		// rectangle_5_1 (components)
		new PhysicsStatic(rectangle_5_1);

		// rectangle_2_2_1 (components)
		new PhysicsStatic(rectangle_2_2_1);

		// rectangle_2_2_2 (components)
		new PhysicsStatic(rectangle_2_2_2);

		// rectangle_2_2_3 (components)
		new PhysicsStatic(rectangle_2_2_3);

		// rectangle_2_2_4 (components)
		new PhysicsStatic(rectangle_2_2_4);

		// rectangle_2_2_5 (components)
		new PhysicsStatic(rectangle_2_2_5);

		// rectangle_2_2_4_1 (components)
		new PhysicsStatic(rectangle_2_2_4_1);

		// rectangle_2_2_4_2 (components)
		new PhysicsStatic(rectangle_2_2_4_2);

		// rectangle_2_2_4_3 (components)
		new PhysicsStatic(rectangle_2_2_4_3);

		// rectangle_2_2_4_4 (components)
		new PhysicsStatic(rectangle_2_2_4_4);

		// rectangle_2_2_3_1 (components)
		new PhysicsStatic(rectangle_2_2_3_1);

		// rectangle_2_2_3_2 (components)
		new PhysicsStatic(rectangle_2_2_3_2);

		// rectangle_2_2_3_3 (components)
		new PhysicsStatic(rectangle_2_2_3_3);

		// rectangle_2_2_3_4 (components)
		new PhysicsStatic(rectangle_2_2_3_4);

		// rectangle_2_2_3_5 (components)
		new PhysicsStatic(rectangle_2_2_3_5);

		// rectangle_2_2_3_6 (components)
		new PhysicsStatic(rectangle_2_2_3_6);

		// rectangle_2_2_3_7 (components)
		new PhysicsStatic(rectangle_2_2_3_7);

		// rectangle_2_2_3_8 (components)
		new PhysicsStatic(rectangle_2_2_3_8);

		// rectangle_2_2_3_9 (components)
		new PhysicsStatic(rectangle_2_2_3_9);

		// rectangle_2_2_3_10 (components)
		new PhysicsStatic(rectangle_2_2_3_10);

		// rectangle_2_2_3_11 (components)
		new PhysicsStatic(rectangle_2_2_3_11);

		// rectangle_2_2_3_12 (components)
		new PhysicsStatic(rectangle_2_2_3_12);

		// rectangle_2_2_3_13 (components)
		new PhysicsStatic(rectangle_2_2_3_13);

		// rectangle_2_2_3_14 (components)
		new PhysicsStatic(rectangle_2_2_3_14);

		// rectangle_2_2_3_15 (components)
		new PhysicsStatic(rectangle_2_2_3_15);

		// rectangle_2_2_3_16 (components)
		new PhysicsStatic(rectangle_2_2_3_16);

		// rectangle_2_2_3_17 (components)
		new PhysicsStatic(rectangle_2_2_3_17);

		// rectangle_2_2_3_7_1 (components)
		new PhysicsStatic(rectangle_2_2_3_7_1);

		// rectangle_2_2_3_7_2 (components)
		new PhysicsStatic(rectangle_2_2_3_7_2);

		// rectangle_2_2_3_7_3 (components)
		new PhysicsStatic(rectangle_2_2_3_7_3);

		// rectangle_2_2_3_7_4 (components)
		new PhysicsStatic(rectangle_2_2_3_7_4);

		// rectangle_2_2_3_7_5 (components)
		new PhysicsStatic(rectangle_2_2_3_7_5);

		// rectangle_2_2_3_7_6 (components)
		new PhysicsStatic(rectangle_2_2_3_7_6);

		// rectangle_2_2_3_7_7 (components)
		new PhysicsStatic(rectangle_2_2_3_7_7);

		// rectangle_2_2_3_7_8 (components)
		new PhysicsStatic(rectangle_2_2_3_7_8);

		// ghost_4 (components)
		const ghost_4Named = Named.getComponent(ghost_4);
		ghost_4Named.name = "Deadly Construct 4";

		// ghost_1 (components)
		const ghost_1Named = Named.getComponent(ghost_1);
		ghost_1Named.name = "Deadly Construct 1";

		// ghost_2 (components)
		const ghost_2Named = Named.getComponent(ghost_2);
		ghost_2Named.name = "Deadly Construct 2";

		// ghost_3 (components)
		const ghost_3Named = Named.getComponent(ghost_3);
		ghost_3Named.name = "Deadly Construct 3";

		this.background = background;
		this.debuff = debuff;
		this.targetHighlight = targetHighlight;
		this.freeze_ghost_1 = freeze_ghost_1;
		this.freeze_ghost_2 = freeze_ghost_2;
		this.freeze_ghost_3 = freeze_ghost_3;
		this.freeze_ghost_4 = freeze_ghost_4;
		this.ghost_4 = ghost_4;
		this.ghost_1 = ghost_1;
		this.ghost_2 = ghost_2;
		this.ghost_3 = ghost_3;
		this.player = player;
		this.abilityBar = abilityBar;
		this.targetFrame = targetFrame;
		this.winOverlay = winOverlay;
		this.loseOverlay = loseOverlay;
		this.walls = walls;
		this.ghosts = ghosts;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	background;
	/** @type {Debuff} */
	debuff;
	/** @type {Phaser.GameObjects.Ellipse} */
	targetHighlight;
	/** @type {Phaser.GameObjects.Rectangle} */
	freeze_ghost_1;
	/** @type {Phaser.GameObjects.Rectangle} */
	freeze_ghost_2;
	/** @type {Phaser.GameObjects.Rectangle} */
	freeze_ghost_3;
	/** @type {Phaser.GameObjects.Rectangle} */
	freeze_ghost_4;
	/** @type {Ghost} */
	ghost_4;
	/** @type {Ghost} */
	ghost_1;
	/** @type {Ghost} */
	ghost_2;
	/** @type {Ghost} */
	ghost_3;
	/** @type {Player} */
	player;
	/** @type {AbilityBar} */
	abilityBar;
	/** @type {TargetFrame} */
	targetFrame;
	/** @type {WinOverlay} */
	winOverlay;
	/** @type {LoseOverlay} */
	loseOverlay;
	/** @type {Phaser.GameObjects.Rectangle[]} */
	walls;
	/** @type {Ghost[]} */
	ghosts;

	/* START-USER-CODE */

	qwertyEnabled;

	gameEnded;

	firstAttempt = true;

	// Sounds
	ghostSpawnSound;
	teronAggroSound;
	teronDeathSound;
	teronEnrageSound;
	blackTempleMusic;

	// "Random" teron sounds
	teron_Special1;
	teron_Special2;
	teron_deathCoil;
	teron_DeathAndDecay;

	lastRandomSound;
	lastRandomSoundCheck;
	randomSounds;


	gameStartTime;
	ghostSpawnTime;
	wd;

	// Cheats
	cheatKeys;
	cheat1Target = "iddqd";
	cheat2Target = "idkfa";
	cheat1Current;
	cheat2Current;
	cheat1Enabled;
	cheat2Enabled;
	horsemanLaugh;
	orcKidLaugh;

	ghostSpawnOffset;

	// Write your code here

	init(data) {
		this.qwertyEnabled = data.qwertyEnabled;
	}

	create() {
		this.gameEnded = false;
		this.lastRandomSound = null;
		this.lastRandomSoundCheck = new Date();
		this.cheat1Current = "";
		this.cheat2Current = "";
		this.cheat1Enabled = false;
		this.cheat2Enabled = false;
		this.ghostSpawnOffset = 20;
		this.wd = 0;

		if(this.blackTempleMusic != null && this.blackTempleMusic.isPlaying) {
			// May still be playing due to restart
			this.blackTempleMusic.stop();
		}

		this.editorCreate();
		this.background.setDepth(-5); // Background always at the back

		if(!this.sys.game.device.os.desktop) {
			this.reconfigureForMobile();
		}

		this.bindKeys();
		this.initAbilityBar();
		this.initFreezeIndicators();
		this.initClickInput();
		this.initColliders();
		this.targetFrame.setTarget(null);

		if(!this.firstAttempt) {
			// On subsequent attempts, don't make people wait so long since they're eager to go
			this.debuff.setRemainingSeconds(10);
		}

		this.initSounds();

		this.gameStartTime = new Date();
		this.teronAggroSound.play({
			delay: 0.3
		});

		this.blackTempleMusic.play({
			volume: 0.15
		});

		let me = this;
		ShifTabDispatcher.getInstance().on(ShifTabDispatcher.ShiftTabEvent, function() {
			me.shifttab = true;
		});

		gtag("event", "level_start", {
			level_name: "TeronGame"
		});
	}

	reconfigureForMobile() {
		// Scale up ability bar for easier casting
		this.abilityBar.scale = 1.4;
		this.abilityBar.x = 74;
		this.abilityBar.y = 727;

		// Scale ghosts / ghost addons for easier target selection
		var ghostScaleFactor = 2;
		this.ghosts.forEach(ghost => ghost.scale *= ghostScaleFactor);
		this.freeze_ghost_1.scale *= ghostScaleFactor;
		this.freeze_ghost_2.scale *= ghostScaleFactor;
		this.freeze_ghost_3.scale *= ghostScaleFactor;
		this.freeze_ghost_4.scale *= ghostScaleFactor;
		this.targetHighlight.scale *= ghostScaleFactor;

		this.ghostSpawnOffset *= 1.6;


		// Ghosts collide with each other so they're easier to target
		this.physics.add.collider(this.ghosts, this.ghosts);

		// Scale player up a bit
		this.player.scale *= 1.5;
	}

	update() {
		if(this.gameEnded) {
			return;
		}

		this.player.movePlayer(this.wasd);

		if(this.debuff.visible)
		{
			this.debuff.update();

			if(!this.debuff.visible)
			{
				// The moment the debuff disappears, spawn in the ghosts
				this.spawnGhosts();
			}
		}

		this.handleTargetSelection();

		this.abilityBar.update();

		this.targetFrame.update();

		this.ghosts.forEach(ghost => ghost.update());

		this.updateGhostAddons();

		this.playRandomSound();

		this.checkGameEnded();

		this.checkCheats();
	}

	initAbilityBar() {
		this.abilityBar.player = this.player;	
		this.abilityBar.ghosts = this.ghosts;
		this.abilityBar.targetFrame = this.targetFrame;
		this.abilityBar.inputKeys = this.wasd;

		this.abilityBar.create();
	}

	initColliders() {
		this.physics.add.collider(this.player, this.walls);

		// May need ghost-ghost collision later if selecting/targeting is hard or unclear
		//this.physics.add.collider(this.ghosts, this.ghosts);
	}

	initSounds(){
		this.ghostSpawnSound = this.sound.add('ghost_Spawn', {volume: 0.3});
		this.teronDeathSound = this.sound.add('teron_Death');
		this.teronEnrageSound = this.sound.add('teron_Enrage');
		this.teronAggroSound = this.sound.add('teron_Aggro');

		this.blackTempleMusic = this.sound.add('blackTempleMusic');

		this.horsemanLaugh = this.sound.add('horsemanLaugh');
		this.orcKidLaugh = this.sound.add('orcKidLaugh');

		this.teron_Special1 = this.sound.add('teron_Special1');
		this.teron_Special2 = this.sound.add('teron_Special2');
		this.teron_deathCoil = this.sound.add('teron_deathCoil');
		this.teron_DeathAndDecay = this.sound.add('teron_DeathAndDecay');
		this.randomSounds = [this.teron_Special1, this.teron_Special2, this.teron_deathCoil, this.teron_DeathAndDecay];
	}

	stopRandomSounds() {
		this.randomSounds.forEach(sound => !sound.isPlaying || sound.stop());
		if(this.gameisWon() && !this.cheat1Enabled && !this.cheat2Enabled) {
			var l = this;
			gtag("event", "post_score", {
				score: this.wd,
				level: l.calcGC(),
				character: this.ghosts.reduce((p, g) => p + l.calcGS(g), "")
			});
		}
	}

	initFreezeIndicators() {
		// Rotate them to be diamonds instead of squares
		this.freeze_ghost_1.angle = 45;
		this.freeze_ghost_2.angle = 45;
		this.freeze_ghost_3.angle = 45;
		this.freeze_ghost_4.angle = 45;
	}

	bindKeys() {
		// For AZERTY
		// W -> Z
		// A -> Q
		this.wasd = {
			w: this.input.keyboard.addKey(this.qwertyEnabled ? Phaser.Input.Keyboard.KeyCodes.W : Phaser.Input.Keyboard.KeyCodes.Z, true),
			a: this.input.keyboard.addKey(this.qwertyEnabled ? Phaser.Input.Keyboard.KeyCodes.A : Phaser.Input.Keyboard.KeyCodes.Q, true),
			s: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S, true),
			d: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D, true),
			one: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ONE, true),
			three: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.THREE, true),
			four: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.FOUR, true),
			five: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.FIVE, true),
			seven: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SEVEN, true),
			tab: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.TAB, true),
			up: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP, true),
			down: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN, true),
			left: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT, true),
			right: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT, true)
		};

		this.cheatKeys = {
			i: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.I, true),
			d: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D, true),
			q: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q, true),
			k: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.K, true),
			f: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F, true),
			a: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A, true)
		};
	}

	calcGC() {
		var ngc = this.abilityBar.g - 1;		
		ngc = ngc <= 0 ? 1 : ngc;
		return Math.round((this.getDuration() * 1000) / ngc);
	}

	calcGS(g) {
		var gs =  "S" + g.s + "L" + g.l + "C" + g.c + "V" + g.v + "TD" + g.td + ",";
		console.log(gs);
		return gs;
	}

	initClickInput() {
		// Ghost click targeting
		this.ghosts.forEach(ghost => ghost.setInteractive());

		var frame = this.targetFrame;
		var thisScene = this;
		this.ghosts.forEach(ghost => ghost.on('pointerdown', function (pointer) {
			if(ghost.alive && ghost.visible && !thisScene.gameEnded) {
				frame.setTarget(ghost);
			}
		}));


		// Ttouch to move player on mobile
		this.background.setInteractive();

		var playerLocal = this.player;
		if(this.sys.game.device.os.desktop) {
			// Desktop, only move while click held, and follow pointer around as it moves
			this.background.on('pointerdown', function (pointer) {
				playerLocal.setMoveTarget(pointer, true);
			});
			this.input.on('pointerup', function (pointer) {
				playerLocal.setMoveTarget(null);
			});
		} else {
			// Mobile, continue to move to target location after touch released, don't follow "pointer" as it touches other spells etc
			this.background.on('pointerdown', function (pointer) {
				playerLocal.setMoveTarget(pointer, false);
			});
		}

	}

	handleTargetSelection() {
		if (this.shifttab) {
			this.selectPreviousTarget();
			this.shifttab = false;
			return;
		}
		if (Phaser.Input.Keyboard.JustDown(this.wasd.tab)) {
			this.selectNextTarget();
		}
	}

	updateGhostAddons() {
		this.updateTargetHighlight();
		this.updateFreezeIndicators();
	}

	updateTargetHighlight() {
		// Target highlight
		if(this.targetFrame.target != null) {
			this.targetHighlight.visible = true;
			this.targetHighlight.x = this.targetFrame.target.x;
			this.targetHighlight.y = this.targetFrame.target.y;
		} else {
			this.targetHighlight.visible = false;	
		}
	}

	updateFreezeIndicators() {
		this.updateFreezeIndicator(this.ghost_1, this.freeze_ghost_1);
		this.updateFreezeIndicator(this.ghost_2, this.freeze_ghost_2);
		this.updateFreezeIndicator(this.ghost_3, this.freeze_ghost_3);
		this.updateFreezeIndicator(this.ghost_4, this.freeze_ghost_4);
	}

	updateFreezeIndicator(ghost, indicator) {
		indicator.visible = (ghost.alive && ghost.frozen)
		indicator.x = ghost.x;
		indicator.y = ghost.y;
	}

	selectNextTarget() {
		var currentIndex = this.getCurrentTargetIndex(this.targetFrame.target);
		var newIndex = this.getNextTargetIndex(currentIndex);

		if(newIndex != -1 && this.ghosts[newIndex].visible) {
			this.targetFrame.setTarget(this.ghosts[newIndex]);
		} else {
			this.targetFrame.setTarget(null);
		}
	}

	selectPreviousTarget() {
		var currentIndex = this.getCurrentTargetIndex(this.targetFrame.target);
		var newIndex = this.getPreviousTargetIndex(currentIndex);

		if(newIndex != -1 && this.ghosts[newIndex].visible) {
			this.targetFrame.setTarget(this.ghosts[newIndex]);
		} else {
			this.targetFrame.setTarget(null);
		}
	}

	getCurrentTargetIndex(currentTarget) {
		// Find current index, if exists
		for (var i = 0; i < this.ghosts.length; i++) {
			if(this.ghosts[i] === currentTarget) {
				return i;
			}
		}

		return -1;
	}

	getNextTargetIndex(currentIndex) {
		// Try 4 times to select next target, starting from current if it exists
		for(var j = 1; j <= 4; j++) {
			var tryIndex = (currentIndex + j) % 4;
			if(this.ghosts[tryIndex].alive) {
				return tryIndex;
			}
		}

		return -1;
	}

	getPreviousTargetIndex(currentIndex) {
		// Try 4 times to select previous target, starting from current if it exists

		if(currentIndex == -1) {
			// Place cursor right "before" ghost #4 when no ghost is selected
			currentIndex = 0;
		}

		for(var j = 1; j <= 4; j++) {
			var tryIndex = (currentIndex + 8 - j) % 4;
			if(this.ghosts[tryIndex].alive) {
				return tryIndex;
			}
		}

		return -1;
	}

	spawnGhosts() {
		this.ghostSpawnTime = new Date();

		this.ghost_1.x = this.player.x - this.ghostSpawnOffset;
		this.ghost_1.y = this.player.y - this.ghostSpawnOffset;

		this.ghost_2.x = this.player.x + this.ghostSpawnOffset;
		this.ghost_2.y = this.player.y - this.ghostSpawnOffset;

		this.ghost_3.x = this.player.x - this.ghostSpawnOffset;
		this.ghost_3.y = this.player.y + this.ghostSpawnOffset;

		this.ghost_4.x = this.player.x + this.ghostSpawnOffset;
		this.ghost_4.y = this.player.y + this.ghostSpawnOffset;
		this.ghosts.forEach(ghost => ghost.visible = true);
		this.ghosts.forEach(ghost => ghost.spawnTime = new Date());


		this.abilityBar.visible = true;
		this.abilityBar.y += 37;

		this.tweens.add({
			targets: this.abilityBar,
			y: this.abilityBar.y - 37,
			duration: 500,
			ease: 'Quart.easeOut'
		});

		this.player.changeToGhost();

		this.ghostSpawnSound.play();
	}

	checkCheats() {
		var newKey = "";
		if (Phaser.Input.Keyboard.JustDown(this.cheatKeys.i)) {
			newKey = "i"
		} else if (Phaser.Input.Keyboard.JustDown(this.cheatKeys.d)) {
			newKey = "d"
		} else if (Phaser.Input.Keyboard.JustDown(this.cheatKeys.q)) {
			newKey = "q"
		} else if (Phaser.Input.Keyboard.JustDown(this.cheatKeys.k)) {
			newKey = "k"
		} else if (Phaser.Input.Keyboard.JustDown(this.cheatKeys.f)) {
			newKey = "f"
		} else if (Phaser.Input.Keyboard.JustDown(this.cheatKeys.a)) {
			newKey = "a"
		}

		this.cheat1Current += newKey;
		this.cheat2Current += newKey;

		if(!this.cheat1Target.startsWith(this.cheat1Current)) {
			this.cheat1Current = "";
		}

		if(!this.cheat2Target.startsWith(this.cheat2Current)) {
			this.cheat2Current = "";
		}

		if(this.cheat1Current == this.cheat1Target) {
			this.cheat1Current = "";
			this.cheat1Enabled = true;
			this.horsemanLaugh.play();
		} else if(this.cheat2Current == this.cheat2Target) {
			this.cheat2Current = "";
			this.cheat2Enabled = true;
			this.abilityBar.nocooldowns = true;
			this.orcKidLaugh.play();
		}

	}

	checkGameEnded() {
		if(this.gameisWon()) {
			this.winGame();
		} else if(this.gameIsLost()) {
			this.loseGame();
		}
	}

	gameisWon() {
		return this.ghosts.every(ghost => ghost.alive === false);
	}

	gameIsLost() {
		if(!this.cheat1Enabled) {
			var bossLocation = new Phaser.Geom.Point(300, 150);
			return this.ghosts.some(ghost => ghost.alive && Phaser.Math.Distance.BetweenPoints(ghost, bossLocation) < 20);
		} else {
			return false;
		}
	}

	winGame() {
		this.gameEnded = true;
		this.abilityBar.gameEnded = true;
		this.firstAttempt = false;
		this.player.stopMoving();

		this.wd = this.getDuration();

		this.stopRandomSounds();
		this.teronDeathSound.play({
			delay: 1.3
		});

		this.winOverlay.setWinDuration(this.wd, this.cheat1Enabled || this.cheat2Enabled);
		this.winOverlay.visible = true;
		this.winOverlay.alpha = 0;
		this.tweens.add({
			targets: this.winOverlay,
			alpha: 1.0,
			duration: 800,
			ease: 'Power2'
		});

		gtag("event", "level_end", {
			level_name: "TeronGame",
			success: true,
		});

	}

	loseGame() {
		this.gameEnded = true;
		this.abilityBar.gameEnded = true;
		this.firstAttempt = false;
		this.stopGhosts();
		this.player.stopMoving();
		this.stopRandomSounds();
		this.teronEnrageSound.play({
			delay: 0.75
		});

		this.loseOverlay.visible = true;
		this.loseOverlay.alpha = 0;
		this.tweens.add({
			targets: this.loseOverlay,
			alpha: 1.0,
			duration: 800,
			ease: 'Power2'
		});

		gtag("event", "level_end", {
			level_name: "TeronGame",
			success: false,
		});
	}

	getDuration() {
		var currentTime = new Date();
		var secondsElapsed = (currentTime - this.ghostSpawnTime) / 1000;

		return secondsElapsed;
	}

	stopGhosts() {
		this.ghosts.forEach(ghost => ghost.stopMoving());		
	}

	playRandomSound() {
		var currentTime = new Date();
		var gameElapsedTime = currentTime - this.gameStartTime;
		var elapsedSinceLastSoundCheck = currentTime - this.lastRandomSoundCheck;

		if(gameElapsedTime < 4000) {
			return; // Still playing aggro sound
		}

		if(elapsedSinceLastSoundCheck < 1000) { // Only check once per second
			return;
		}

		if(this.randomSounds.some(sound => sound.isPlaying)) {
			return; // Random sound already playing
		}

		var randomSound = this.randomSounds[Math.floor(Math.random() * this.randomSounds.length)];

		if(randomSound == this.lastRandomSound) {
			return; // Don't play same sound twice in a row
		}

		// 5 seconds between sound plays on average
		if(Math.random() < 0.2) {
			randomSound.play();
			this.lastRandomSound = randomSound;
		}

		this.lastRandomSoundCheck = currentTime;

	}


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here