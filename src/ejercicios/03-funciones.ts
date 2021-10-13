function sumar (a:number,b:number): number{
    return a + b;
}

const sumarFelcha = (a:number,b:number): number => {
    return a + b;
}

function multiplicar (numero: number, numero2?:number, base:number =2):number{
    return numero * base
}

/* const result = multiplicar(5,0,8);
console.log(result)

const resultado = sumar(5,8);
console.log(resultado)*/


interface PersonajeCLASH{
    nombre: string;
    puntosDeVida: number;
    mostrarPuntos:() => void;
}

function curar (personaje:PersonajeCLASH, curarX:number): void {
    personaje.puntosDeVida += curarX;
    //console.log(personaje) 
}

const nuevoPersonaje:PersonajeCLASH = {
    nombre: 'Luis',
    puntosDeVida:50,
    mostrarPuntos(){
        console.log('Puntos de vida: ' ,this.puntosDeVida )
    }

}

curar(nuevoPersonaje,10)
nuevoPersonaje.mostrarPuntos();