import { Producto, CalcularISV  } from "./06-desestructuracion-funcion";


const carritoCompras: Producto[] = [
    {
        descuento: 'Xaomin',
        precio: 100
    },
    {
        descuento: 'Apple',
        precio: 200
    }
];

const [total, isv] = CalcularISV(carritoCompras);
console.log('Total', total)
console.log('ISV', isv)