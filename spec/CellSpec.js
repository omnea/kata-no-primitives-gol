describe("Cell", function() {

  it("should exist", function() {
    let cell = new Cell();
    expect(cell instanceof Cell).toBe(true);
  });

  it("should be living", function() {
    let livecell = new LiveCell();
    expect(livecell instanceof LiveCell).toBe(true);
  });

  it("should be dead", function() {
    let deadcell = new DeadCell();
    expect(deadcell instanceof DeadCell).toBe(true);
  });

  it("should have a neighbours collection", function() {
    let cell = new LiveCell();
    expect(Array.isArray(cell.neighbours)).toBe(true);
  });

  it("should add neighbours", function() {
    let cell = new LiveCell();
    let otherCell = new LiveCell();
    cell.addNeighbour(otherCell);
    otherCell.addNeighbour(cell);
    expect(cell.neighbours.length).toBe(1);
  });

  it("should know how many living neighbours it has", function() {
    let cell = new LiveCell();
    let otherCell1 = new LiveCell();
    let otherCell2 = new LiveCell();
    let otherCell3 = new LiveCell();
    cell.addNeighbour(otherCell1);
    cell.addNeighbour(otherCell2);
    cell.addNeighbour(otherCell3);
    expect(cell.getAliveNeighbours().length).toBe(3);
  });

  it("should know how many dead neighbours it has", function() {
    let cell = new LiveCell();
    let otherCell1 = new DeadCell();
    let otherCell2 = new DeadCell();
    let otherCell3 = new DeadCell();
    cell.addNeighbour(otherCell1);
    cell.addNeighbour(otherCell2);
    cell.addNeighbour(otherCell3);
    expect(cell.getDeadNeighbours().length).toBe(3);
  });

  /*it("shouldn't survive next generation", function() {
    let cell = new LiveCell();
    let otherCell = new LiveCell();
    cell.addNeighbour(otherCell);
    expect(cell.survives()).toBe(typeof LiveCell);
  });
*/
});

/*Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
Any live cell with more than three live neighbours dies, as if by overcrowding.
Any live cell with two or three live neighbours lives on to the next generation.
Any dead cell with exactly three live neighbours becomes a live cell.*/