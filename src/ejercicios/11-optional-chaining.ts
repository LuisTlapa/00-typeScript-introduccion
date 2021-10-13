interface Pasajero {
    nombre:string;
    hijos?:string[];
}

const pasajero1:Pasajero = {
    nombre: 'Luis'
}

const pasajero2:Pasajero ={
    nombre: 'Lesli',
    hijos: ['Andrew', 'Natalia']
}

function imprimeHijos(pasajero:Pasajero):void{
    const cuantosHijos = pasajero.hijos?.length || 0;
    console.log(cuantosHijos)
}
imprimeHijos(pasajero1)