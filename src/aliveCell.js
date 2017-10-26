'use strict'

class AliveCell extends Cell {

	constructor() {
		super();
	}
    alive(){
        return this instanceof AliveCell;
    }
} 