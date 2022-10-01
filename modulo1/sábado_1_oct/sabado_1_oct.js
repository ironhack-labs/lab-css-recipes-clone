let hijos; 

function tengoHijos(params){
    if (params) {
        return 'Soy verdadero';
    } else {
        return 'soy falso';
    } 
}

console.log('El famoso Hola mundo')

let name = 'david';  
// vamos a convertir el string a un arreglo 
console.log('value: ', name);
// Paso 1 convertir a un arreglo string -> array
// .split
name = name.split('');
console.log('value2: ', name);
// Detectar la posición y cambiarlo 
name[2] = 'V';
// Regresar de arreglo a string array -> string
name = name.join('');
// Resultado 
console.log('Resultado de alterar un valor del str convirtiéndolo a array y de vuelta: ', name);

