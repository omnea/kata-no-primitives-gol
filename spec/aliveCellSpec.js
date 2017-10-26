describe("AliveCell", function() {
  var aliveCell;

  beforeEach(function() {
  	aliveCell = new AliveCell();
  })

  it("should have an Alive cell created", function() {

    expect(aliveCell).toBeDefined();

  });

  it('should say its alive', function() {
      expect(aliveCell.alive()).toBeTruthy();
  });

});