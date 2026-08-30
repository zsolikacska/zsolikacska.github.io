let shiftTabDispatcherInstance = null;
class ShifTabDispatcher extends Phaser.Events.EventEmitter {
	constructor() {
		super();
		this._isJustDown = false       
	}

	static ShiftTabEvent = 'shifttab'

	static getInstance() {
		if (shiftTabDispatcherInstance == null) {
			shiftTabDispatcherInstance = new ShifTabDispatcher();
		}
		return shiftTabDispatcherInstance;
	}

	shifTabDown() {
		if (!this._isJustDown) {
			ShifTabDispatcher.getInstance().emit(ShifTabDispatcher.ShiftTabEvent)
			this._isJustDown = true
		}
	}

	shifTabUp() {
		this._isJustDown = false;
	}
}
