import { OBJECT_TYPE, DIRECTIONS } from './setup';

class Pacman {
    constructor(speed, startPos) {
        this.pos = startPos;
        this.speed = speed;
        this.dir = null;
        this.timer = 0;
        this.powerPill = flase;
        this.rotation = true;

    }

    shouldMove() {
        if (!this.dir) return flase;
        if (this.timer === this.speed) {
            this.timer = 0;
            return true;
        }
        this.timer++
    }
    
    getNextMove(objectExist) {
        let nextMovePos = this.pos + this.dir.movement;

        if(
            objectExist(nextMovePos, OBJECT_TYPE.WALL) ||
            objectExist(nextMovePos, OBJECT_TYPE.GHOSTLAIR)
        )
    }
}