// import './TowerFire.css'
import {TowerFactory} from 'components'
import {TowerFactoryInterface} from 'interfaces'
import {TowerEntity} from 'entities'
import {TowerMenuFire} from '../../menu/TowerMenu'


export class TowerFire extends TowerFactory {
	constructor() {
		super()
	}

	towerFactory() {
		return new TowerFireVariant()
	}

	render() {
		this.$el.classList.add('towerFire')
		return this.$el
	}

	click(fn: () => void) {
		const fireMenu = new TowerMenuFire()
		this.$el.addEventListener('click', () => {
			console.log('FIRE MENU', fireMenu)
		})
		return this
	}
}

class TowerFireVariant implements TowerFactoryInterface {
	towerInterface(): TowerEntity {
		return {
			damage: 55,
			level: 1
		}
	}
}
