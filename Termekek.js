import {OBJECTS} from "./adatok.js"
import Termek from "./Termek.js"

class Termekek{
    constructor(){
        const TAROLO = $("#tarolo");
        for (let i = 0; i < OBJECTS.length; i++) {
            const TERMEK = new Termek(OBJECTS[i], TAROLO);
        }
    }
} export default Termekek;
