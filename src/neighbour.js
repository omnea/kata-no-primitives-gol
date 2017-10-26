'use strict'

class Neighbour {
    
    constructor(){
        this.neighbours = [];
    }

    hasNeighbours(){
        return this.neighbours.length;
    }
    add(cell){
        this.neighbours.push(cell);
    }
}