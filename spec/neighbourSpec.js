describe('Neighbours', function() {
    var neighbours;

    beforeEach(function(){
        neighbours = new Neighbour();
    });

    it('should say if it has neighbours', function() {
        expect(neighbours.hasNeighbours()).toBe(0);
    });

    it('should add a neighbour', function() {
        neighbours.add(new AliveCell());
        expect(neighbours.hasNeighbours()).toBe(1);

    });

});