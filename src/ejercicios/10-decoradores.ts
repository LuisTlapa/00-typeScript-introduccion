function reportableClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      reportingURL = "http://www...";
    };
  }

  @reportableClassDecorator

class MySuperClase{
    public miPropiedad: string ='ABCD';
    imprimir(){
        console.log('Hola My Super Clase')
    }
}

const miClase = new MySuperClase();
console.log(miClase.miPropiedad);