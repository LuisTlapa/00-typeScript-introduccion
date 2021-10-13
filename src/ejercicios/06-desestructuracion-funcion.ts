export interface Producto{
    descuento:string;
    precio:number;
}
const telefono :Producto ={
    descuento: "Xaomin",
    precio: 6000
}

const telefono2 :Producto ={
    descuento: "Sansung",
    precio: 3000
}

export function CalcularISV(productos: Producto[]):[number, number] {
    let total = 0;
    productos.forEach(({precio}) =>{
        total+= precio;
    })
    return [total, total*0.15]

}

const articulos =[telefono, telefono2]
const [total, isv] = CalcularISV(articulos)
console.log('Total', total)
console.log('ISV', isv)