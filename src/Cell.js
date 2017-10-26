class Cell {
    constructor() {
        this.neighbours = [];
    }

    addNeighbour(cell) {
        this.neighbours.push(cell);
    }

    countAliveNeighbours() {
        return this.neighbours.filter(cell => cell instanceof LiveCell).length;
    }
}