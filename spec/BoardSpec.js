describe("Board", function() {

  it("should exist", function() {
    let board = new Board();
    expect(board instanceof Board).toBe(true);
  });

  it("should set dimension", function() {
    let board = new Board(3,3);
    expect(board.dimension).toBe(9);
  });

});