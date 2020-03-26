import './TowerAqua.css'
import {TowerFactory} from 'components'
import {TowerFactoryInterface} from 'interfaces'
import {TowerEntity} from 'entities'
import {TowerMenuAqua} from '../../menu/TowerMenu'


export class TowerAqua extends TowerFactory {
	constructor() {
		super()
	}

	towerFactory() {
		return new TowerAquaVariant()
	}

	render() {
		this.$el.classList.add('TowerAqua')
		return this.$el
	}

	click(fn: () => void) {
		const aquaMenu = new TowerMenuAqua()
		this.$el.addEventListener('click', () => {
			console.log('MENU AQUA', aquaMenu)
		})
		return this
	}
}

class TowerAquaVariant implements TowerFactoryInterface {
	towerInterface(): TowerEntity {
		return {
			damage: 105,
			level: 3
		}
	}
}
