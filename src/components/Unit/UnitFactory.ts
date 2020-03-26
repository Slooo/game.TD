import {UnitFactoryInterface} from 'interfaces'

export abstract class UnitFactory {
	protected constructor() {

	}

	public abstract unitFactory(): UnitFactoryInterface

	get unit() {
		return this.unitFactory().unitInterface()
	}
}
