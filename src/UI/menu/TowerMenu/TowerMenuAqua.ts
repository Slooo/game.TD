import {TowerMenuFactory} from 'components'
import {TowerMenuFactoryInterface} from 'interfaces'
import {TowerMenuEntity} from 'entities'

export class TowerMenuAqua extends TowerMenuFactory {
	constructor() {
		super()
		this.$el.classList.add('menuAqua')
	}

	towerMenuFactory() {
		return new TowerMenuAquaVariant()
	}

	render() {
		return this.$el
	}
}

class TowerMenuAquaVariant implements TowerMenuFactoryInterface {
	towerMenuInterface(): TowerMenuEntity {
		return {
			level: 2,
			improved: false
		}
	}
}
