describe("DeadCell", function() {
  var deadCell;

  beforeEach(function() {
  	deadCell = new DeadCell();
  })

    it("should have a Dead Cell created", function() {
            expect(deadCell).toBeDefined();
      });
    it('should say its dead', function() {
        expect(deadCell.dead()).toBeTruthy();
    });

});
