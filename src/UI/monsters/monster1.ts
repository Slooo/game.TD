import {UnitFactory} from 'components'
import {UnitFactoryInterface} from 'interfaces'
import {UnitEntity} from 'entities'


export class Monster1 extends UnitFactory {
	moveSpeed: UnitEntity['moveSpeed']
	hitPoint: UnitEntity['hitPoint']

	constructor(props: UnitEntity) {
		super()

		this.moveSpeed = props.moveSpeed
		this.hitPoint = props.hitPoint
	}

	unitFactory() {
		const {moveSpeed, hitPoint} = this
		return new Monster({moveSpeed, hitPoint})
	}
}

class Monster implements UnitFactoryInterface {
	moveSpeed: UnitEntity['moveSpeed']
	hitPoint: UnitEntity['hitPoint']

	constructor(props: UnitEntity) {
		this.moveSpeed = props.moveSpeed
		this.hitPoint = props.hitPoint
	}

	unitInterface(): UnitEntity {
		return {
			moveSpeed: this.moveSpeed,
			hitPoint: this.hitPoint
		}
	}
}

