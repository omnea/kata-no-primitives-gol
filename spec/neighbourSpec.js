describe('Neighbours', function() {
    var neighbours;

    beforeEach(function(){
        neighbours = new Neighbour();
    });

    it('should say if it has neighbours', function() {
        expect(neighbours.hasNeighbours()).toBe(0);
    });

});