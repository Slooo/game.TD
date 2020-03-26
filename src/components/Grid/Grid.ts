// генерировать сетку на всю страницу, где будут помечаться те где нельзя строить

type Props = {
	box: number;
	height: number;
	width: number;
	map: boolean[][];
}

export class Grid {
	box: number;
	height: number;
	width: number;
	map: boolean[][];

	constructor(props: Props) {
		this.box = props.box // 50;
		this.height = props.height //7;
		this.width = props.width // 12;
		this.map = props.map
	}

	create() {
		// 1) Создать матрицу по которой будет отрисовка
		// 2) див будет с классом на который нельзя будет ставить башни
		// 3) возможно в будущем сделать уже не boolean а объект

		const area = document.createElement('div')
		area.classList.add('area')
		this.map.forEach((cY, yI) => {
			const y = document.createElement('div')
			y.setAttribute('id', `areaY${yI}`)
			y.classList.add('areaY')
			area.append(y)
			cY.forEach((cX, xI) => {
				const x = document.createElement('div')
				// TODO: перенести ?
				x.style.width = x.style.height = `${this.box}px`

				x.setAttribute('id', `areaX${xI}`)
				x.classList.add('areaX', cX ? 'areaOpen' : 'areaClose')
				y.append(x)
			})
		})

		return area
	}
}
