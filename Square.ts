import { Rectangle } from "./Rectangel";
export class Square extends Rectangle {
    constructor(size: number){
        super(size, size);
    }
}