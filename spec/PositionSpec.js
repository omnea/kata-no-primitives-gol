describe("Position", () => {
	var position;

	beforeEach(() => {
		position = new Position();

		aliveCell = new Cell();
		aliveCell.setState(new Alive());

		deadCell = new Cell();
		deadCell.setState(new Dead());

		position.setCell(aliveCell);
	});

	it("Should be an instance of Position", () => {
		expect(position instanceof Position).toEqual(true);
	});

	it("Should have a Cell", () => {
		expect(position.cell instanceof Cell).toEqual(true);
	});

	it("Should have Neighbors", () => {
		position.setNeighbors([aliveCell])
		expect(position.neighbors).not.toBeFalsy();
	});
});