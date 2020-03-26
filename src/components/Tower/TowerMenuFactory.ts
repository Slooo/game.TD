// Возвращает некое меню, с набором элементов
import {TowerMenuFactoryInterface} from 'interfaces'

export abstract class TowerMenuFactory {
	$el: HTMLElement

	protected constructor() {
		this.$el = document.createElement('div')
		this.$el.classList.add('towerMenu')
	}

	public abstract towerMenuFactory(): TowerMenuFactoryInterface

	get towerMenu() {
		return this.towerMenuFactory().towerMenuInterface()
	}

	render() {
		return this.$el
	}

	upgrade() {
		// будет запускаться generator имитирующий апргрейд башни
		function* up() {
			yield 1
			yield 5
			yield 15

		}
	}
}
