document.write("<h1>Hello world</h1>");
//Esta linea sirve para mostrar en la página algo. Básicamente, le decimos al documento, que escriba "Hello world" en formato HTML. 

// Tipos de datos. 

// "Hello world",'Hello world'      //String
// 1,2,3,100,1000000,98.1,4.5,-4.8  //Numbers
// true,false                       //Booleano (lógico, 0 o 1).
// //array o arreglo, sirve para agrupar un conjunto de datos, es una lista.
    // ["joe","ryan","martha"]
    // [1,2,3]
    // [true,false,true,false]
//object, datos en relación a algo o alguien. Así es como luce un objeto:
    // {   
    //     "username";ryan,
    //     "score":95,
    //     "hours":65,
    //     "proffesional":true
    // }
    // {   
    //     "username": "joe",
    //     "score": 0.4,
    //     "hours": 1,
    //     "proffesional": false
    // }

//Variables: Su valor puede cambiar a través del tiempo, varían.
//A tener en cuenta: Las variables no pueden empezar con números, ni caracteres extraños, excepto los siguientes: "$","_". Las variables se escriben con la nomenclatura camelCase.
var nombreDelUsuario = "John";
let apellido = "Travolta";

nombreDelUsuario="pepe";
console.log(nombreDelUsuario);
console.log(apellido);

//Constantes: Su valor no cambia, se mantiene en un Estado único.
const PI=3.14;
const id="123091958375";
console.log(PI);

//Operadores

let numberOne = 60;
let numberTwo = 100;
//Creamos dos variables que almacenan un dato de tipo numérico.
let result= numberOne+numberTwo;
//Los almacenamos en una variable que contiene su suma://
console.log(result);
//Y mostramos el mensaje en la consola.
let resta= numberOne-numberTwo;
//También podemos restarlos
console.log(resta);
let multiplicacion= numberOne*numberTwo; //multiplicacion
let division= numberOne/numberTwo;      //resta
console.log(multiplicacion);
console.log(division);

//CONCATENAR STRINGS
let name="Lucas";
let lastName="Romero";
//Creamos dos strings, por ejemplo un nombre completo.
let completeName=name+""+lastName;
console.log(completeName);

//COMPARAR NUMEROS
numberOne = 100;
numberTwo = 500;

result= numberOne > numberTwo;
//Preguntamos si 100 es mayor que 500.
console.log(result);
//Y nos devolvería en la consola un booleano, en este caso "false".

result= numberOne == numberTwo;
//Preguntamos si 100 es igual a 500
console.log(result);
//Obviamente nos devolvería un "false" en la consola.

result= numberOne != numberTwo;
//¿Es 100 diferente de 500?
console.log(result);
//En este caso nos devolvería un "true", ya que 100 es diferente de 500.

result= numberOne <= numberTwo;
//¿Es 100 menor o igual a 500?
console.log(result);
//Y nos devuelve true, ya que 100 es menor a 500.

result= numberOne >= numberTwo;
//¿Es 100 mayor o igual a 500?
console.log(result);
//Y nos devuelve lo contrario; false.

//Lo aplicamos en un ejemplo cotidiano.

let passwordDB="pepe123"
//Creamos una contraseña y la almacenamos.
let input="pepe134"
//Creamos otra contraseña que vendría a ser errónea.

let arrive=input==passwordDB;
//¿Es la contraseña ingresada igual a la que tenemos en la base de datos?
console.log(arrive);
//Y obviamente daría false... Ya que lógicamente no son iguales. Por lo tanto la contraseña es errónea.

//CONDICIONALES:
