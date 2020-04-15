import {TowerFire, TowerAqua} from 'UI'
import {Grid} from 'components'
import {level1} from './UI/gameMap'
import './UI/app.css'
import {MenuBuy} from './UI/menu/MenuBuy'


(function() {
	const app = document.getElementById('app')
	app.append(new MenuBuy().render())
	const grid = new Grid({box: 50, height: 7, width: 12, map: level1}).create()


	// 1) первый клик по areaOpen открываем меню и сохраняем ссылку на элемент
	// 2) клик если по меню, то закрываем меню и вставляем в сохраненный объект новый html и очищаем ссылку
	app.addEventListener('click', function(e) {
		if (e.target.closest('.areaOpen')) {
			const area = document.getElementById(e.target.id)
			if (area && !area.dataset.modify) {
				area.dataset.modify = true
			}
		} else if (e.target.closest('.menuBuy')) {
			const area = grid.querySelector('[data-modify="true"]')
			if (area) {
				area.style.backgroundColor = getComputedStyle(e.target).backgroundColor
				area.dataset.modify = false
			}
		} else {
			const area = grid.querySelector('[data-modify="true"')
			if (area) {
				area.removeAttribute('data-modify')
			}
		}
	})

	// const towerFire = new TowerFire()
	// const towerAqua = new TowerAqua()
	//
	// towerFire.click(() => {
	// 	console.log('CHEBUREK')
	// })
	// towerAqua.click(() => {
	// 	console.log('KORONA')
	// })
	// app.appendChild(towerFire.render())
	// app.appendChild(towerAqua.render())
	console.log('GRID', grid)
	app.append(grid)
	// const runUnits = () => setInterval(() => {
	// 	unit.style.left = `${unit.getBoundingClientRect().left + 50}px`
	// }, 1000)
	//
	// window.requestAnimationFrame(runUnits);
})()


