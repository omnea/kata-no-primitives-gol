'use strict'

class DeadCell extends Cell {

	constructor(){
		super();
	}

    dead(){
        return this instanceof DeadCell;
    }

}