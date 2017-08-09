class Persona {
    constructor(name, surname) {
        this._name = name;
        this._surname = surname;
    }

    getName() {
        return this._name + this._surname;
    }
}

export default Persona;