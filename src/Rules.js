class Rules {
	willBeAlive(position) {
		const cell = position.cell;
		const neighbors = position.neighbors;

		const aliveNeigbors = neighbors.filter((neighbor) => 
			neighbor.state instanceof Alive
		);

		const aliveCount = aliveNeigbors.length;

		if (cell.state instanceof Alive) {
			if (aliveCount < 2) return false;
			if (aliveCount > 3) return false;
			if (aliveCount === 2 || aliveCount === 3) return true;
		} else if (cell.state instanceof Dead ) {
			if (aliveCount === 3) return true;
		}
	}
}