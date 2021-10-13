class PersonaNormal{
    constructor(
        public nombre:string,
        public direccion: string
    ){}
}

class Heroe extends PersonaNormal{
    //public alterEgo:string;
    //edad: number;
    //nombreReal:number;

    constructor(
        public alterEgo: string,
        public edad:number,
        public nombreReal:string
        ){
            super(nombreReal, 'New York');
        }
}



const iroman = new Heroe('Iroman', 50, 'Tony Start');

console.log(iroman)