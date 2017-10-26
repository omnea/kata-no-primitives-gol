describe("Cell", () => {
	var cell;

	beforeEach(() => {
		cell = new Cell();
	});

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
});