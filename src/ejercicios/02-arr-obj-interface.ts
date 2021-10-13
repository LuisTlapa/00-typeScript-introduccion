let habilidades  = ['Bash', 'Counter', 'Cantar'];

interface Personaje{
    nombre:string;
    hp:number;
    habilidades: string[];
    puebloNatal?:string;
}

const personaje: Personaje = {
    nombre: 'Luis',
    hp:100, 
    habilidades
}

personaje.puebloNatal = 'Cosautlan'

console.table(personaje)