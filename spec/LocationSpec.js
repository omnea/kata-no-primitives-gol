describe("Location", function() {

  it("should exist", function() {
    let location = new Location();
    expect(location instanceof Location).toBe(true);
  });

  it("should have position", function() {
    let location = new Location(1,1);
    expect(location.x).toBe(1);
    expect(location.y).toBe(1);
  });

  it("should have a cell", function() {
    let cell = new LiveCell();
    let location = new Location(1);
    location.addCell(cell);
    expect(location.cell instanceof Cell).toBe(true);
  });


});