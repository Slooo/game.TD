import {TowerFire} from './TowerFire'

const _ = new TowerFire()

describe('should return boolean array', () => {
	const fn = ():void => undefined

	test('equal array boolean', () => {
		expect(_.click(fn)).toEqual(_)
	})
})
