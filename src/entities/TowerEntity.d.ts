import {Level} from 'types'

type TowerEntity = {
	damage: number;
	level: Level;
}


// 1) клик обрабатывается towerFire
// 2) передать это в TowerFactory чтобы он выполнял клик 
