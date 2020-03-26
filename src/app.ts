import {TowerFire, TowerAqua} from 'UI'
import {Grid} from 'components'
import {level1} from './UI/gameMap'
import './UI/app.css'
import {MenuBuy} from './UI/menu/MenuBuy'


(function() {
	const app = document.getElementById('app')
	app.append(new MenuBuy().render())

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
	app.append(new Grid({box: 50, height: 7, width: 12, map: level1}).create())
	// const runUnits = () => setInterval(() => {
	// 	unit.style.left = `${unit.getBoundingClientRect().left + 50}px`
	// }, 1000)
	//
	// window.requestAnimationFrame(runUnits);
})()
