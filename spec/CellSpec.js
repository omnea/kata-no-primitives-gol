describe("Cell", () => {
	var cell;
	var aliveCell;
	var deadCell;

	beforeEach(() => {
		cell = new Cell();

		aliveCell = new Cell();
		aliveCell.setState(Alive);

		deadCell = new Cell();
		deadCell.setState(Dead);
	})

	it("Should be an instance of Cell", () => {
		expect(cell instanceof Cell).toEqual(true);
	});

	it("Should be alive", () => {
		cell.setState(new Alive());
		expect(cell.state instanceof Alive).toEqual(true);
	});

	it("Should be dead", () => {
		cell.setState(new Dead());
		expect(cell.state instanceof Dead).toEqual(true);
	});

	it("Will be dead if it has less than 2 alive neighbors", () => {
		cell.state(Alive);
		
		cell.setNeighbors([
			aliveCell, deadCell, deadCell,
			deadCell ,		   , deadCell
			deadCell , deadCell, deadCell
		]);

		expect(cell.willBeAlive()).toEqual(false);
	});

	it("Will be dead if it has more than 3 alive neighbors", () => {
		cell.setNeighbors([
			aliveCell , aliveCell, aliveCell,
			aliveCell,		    , deadCell
			deadCell , deadCell, deadCell
		]);

		expect(cell.willBeAlive()).toEqual(false);
	});

	it("Will be alive if it has 2 or 3 alive neighbors", () => {
		cell.state(Alive);

		cell.setNeighbors([
			aliveCell, aliveCell, deadCell,
			deadCell ,		    , deadCell
			deadCell , deadCell , deadCell
		]);

		expect(cell.willBeAlive()).toEqual(true);

		cell.setNeighbors([
			aliveCell, aliveCell, aliveCell,
			deadCell ,		    , deadCell
			deadCell , deadCell  , deadCell
		]);

		expect(cell.willBeAlive()).toEqual(true);
	});

	it("Will be alive if it is dead and has 3 alive neighbors", () => {
		cell.state(Dead);

		cell.setNeighbors([
			aliveCell, aliveCell, aliveCell,
			deadCell ,		    , deadCell
			deadCell , deadCell  , deadCell
		]);

		expect(cell.willBeAlive()).toEqual(true);
	});
});