interface SuperHeroe{
    nombre:string,
    edad: number;
    direccion : Direccion;
    mostrarDireccion: () => string;

}

interface Direccion {
    calle:string;
    pais:string;
    ciudad:string;
}

const superHeore: SuperHeroe = {
    nombre: 'spiderman',
    edad: 25,
    direccion :{
        calle: 'Miguel Aleman',
        pais: 'Mexico',
        ciudad: 'veracruz'
    },
    mostrarDireccion(){
        return this.nombre + ',' + this.direccion.ciudad + ',' + this.direccion.pais
    }

}

const direccion = superHeore.mostrarDireccion();
console.log(direccion)