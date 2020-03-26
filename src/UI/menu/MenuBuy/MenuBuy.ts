// Меню пользователя
// возможность добавлять: башни, мины(взрыв по таймеру), магия героя (найм героя)

export class MenuBuy {
	$el: HTMLElement

	constructor() {
		this.$el = document.createElement('div')
		this.$el.classList.add('menuBuy')
	}

	render() {
		const towerFire = document.createElement('div')
			towerFire.setAttribute('id', 'buyTowerFire')
		const towerAqua = document.createElement('div')
			towerAqua.setAttribute('id', 'buyTowerAqua')
		const towerEarth = document.createElement('div')
			towerEarth.setAttribute('id', 'buyTowerEarth')
		const towerAir = document.createElement('div')
			towerAir.setAttribute('id', 'buyTowerAir')
		const towerLight = document.createElement('div')
			towerLight.setAttribute('id', 'buyTowerLight')
		this.$el.append(towerFire, towerAqua, towerEarth, towerAir, towerLight)
		return this.$el
	}
}
