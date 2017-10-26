describe("Rules", () => {
	var rules;
	var aliveCell;
	var deadCell;

	beforeEach(() => {
		rules = new Rules();

		aliveCell = new Cell();
		aliveCell.setState(new Alive());

		deadCell = new Cell();
		deadCell.setState(new Dead());
	});

	it("Should be an instance of Rules", () => {
		expect(rules instanceof Rules).toEqual(true);
	});

	it("Will be dead if it has less than 2 alive neighbors", () => {
		const position = new Position();

		position.setCell(aliveCell);
		
		position.setNeighbors([
			aliveCell, deadCell, deadCell,
			deadCell 		   , deadCell,
			deadCell , deadCell, deadCell
		]);

		expect(rules.willBeAlive(position)).toEqual(false);
	});

	it("Will be dead if it has more than 3 alive neighbors", () => {
		const position = new Position();

		position.setCell(aliveCell);

		position.setNeighbors([
			aliveCell , aliveCell, aliveCell,
			aliveCell		    , deadCell,
			deadCell , deadCell, deadCell
		]);

		expect(rules.willBeAlive(position)).toEqual(false);
	});

	it("Will be alive if it has 2 or 3 alive neighbors", () => {
		const position = new Position();

		position.setCell(aliveCell);

		position.setNeighbors([
			aliveCell, aliveCell, deadCell,
			deadCell 		    , deadCell,
			deadCell , deadCell , deadCell
		]);

		expect(rules.willBeAlive(position)).toEqual(true);

		position.setNeighbors([
			aliveCell, aliveCell, aliveCell,
			deadCell 		    , deadCell,
			deadCell , deadCell  , deadCell
		]);

		expect(rules.willBeAlive(position)).toEqual(true);
	});

	it("Will be alive if it is dead and has 3 alive neighbors", () => {
		const position = new Position();

		position.setCell(deadCell);

		position.setNeighbors([
			aliveCell, aliveCell, aliveCell,
			deadCell 		    , deadCell,
			deadCell , deadCell  , deadCell
		]);

		expect(rules.willBeAlive(position)).toEqual(true);
	});
});