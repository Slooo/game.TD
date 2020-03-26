import {TowerFactoryInterface} from 'interfaces'

export abstract class TowerFactory {
	$el: HTMLElement

	protected constructor() {
		this.$el = document.createElement('div')
		this.$el.classList.add('tower')
		// this.$el.addEventListener('click', props.onClick)
	}

	public abstract towerFactory(): TowerFactoryInterface

	get tower() {
		return this.towerFactory().towerInterface()
	}

	render() {
		return this.$el
	}

	public abstract click(fn: () => void): this
}

