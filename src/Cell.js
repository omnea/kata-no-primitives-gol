class Cell {
    constructor() {
        this.neighbours = [];
    }

    addNeighbour(cell) {
        this.neighbours.push(cell);
    }

    getAliveNeighbours() {
        return this.neighbours.filter(cell => cell instanceof LiveCell);
    }

    getDeadNeighbours() {
        return this.neighbours.filter(cell => cell instanceof DeadCell);
    }

    survives() {
        
    }
}