class Termek{
    
    #adat
    #divElem
    #buttonElem

    constructor(adat, szuloElem){
        this.#adat = adat;
        szuloElem.append(`<div class="divElem">
                            <p>${this.#adat.id}</p>
                            <p>név: ${this.#adat.nev}</p>
                            <p>kategória: ${this.#adat.kategoria}</p>
                            <p>ár: ${this.#adat.ar}</p>
                            <button>Kedvencek</button>
                        </div>`);
        this.#divElem = $(".divElem:last-child");
        this.#buttonElem = this.#divElem.children("button");
    }
} export default Termek;
