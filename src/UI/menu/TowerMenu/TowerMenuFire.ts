import {TowerMenuFactory} from 'components'
import {TowerMenuFactoryInterface} from 'interfaces'
import {TowerMenuEntity} from 'entities'

export class TowerMenuFire extends TowerMenuFactory {
	constructor() {
		super()
		this.$el.classList.add('menuFire')
	}

	towerMenuFactory() {
		return new TowerMenuFireVariant()
	}

	render() {
		return this.$el
	}
}

class TowerMenuFireVariant implements TowerMenuFactoryInterface {
	towerMenuInterface(): TowerMenuEntity {
		return {
			level: 2,
			improved: true
		}
	}
}
