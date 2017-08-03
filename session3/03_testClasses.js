class HomeModule {

    static __numVisitasGlobales = 0;

    constructor() {
        this.__numLlamadasUsuario = 0;
    };

    __IncNumLlamadasUsuario(inc) {
        this.__numLlamadasUsuario += inc;
    };

    GetNumLlamadasUsuario() {
        return this.__numLlamadasUsuario;
    };

    GetNumVisitasGlobales() {
        return HomeModule.__numVisitasGlobales;
    };
     
    IncNumLlamadasUsuario(inc) {
        this.__IncNumLlamadasUsuario(inc);
    }

    IncNumVisitasGlobales(inc) {
        HomeModule.__numVisitasGlobales += inc;
    }
}

let home1 = new HomeModule();
let home2 = new HomeModule();

home1.IncNumLlamadasUsuario(10);
home2.IncNumLlamadasUsuario(20);
console.log('home1:',home1.GetNumLlamadasUsuario());
console.log('home2:',home2.GetNumLlamadasUsuario());

home1.IncNumVisitasGlobales(10);
home2.IncNumVisitasGlobales(20);
console.log('home1:',home1.GetNumVisitasGlobales());
console.log('home2:',home2.GetNumVisitasGlobales());