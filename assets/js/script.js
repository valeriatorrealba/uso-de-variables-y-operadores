//////////////////////////////////////////////////////////////// Ejercicio 2////////////////////////////////////////////////////////////////////////////////////////////////////////

// se crean dos variables

// var num1 = prompt("Ingrese un número");
// var num2 = prompt("Ingrese un segundo número");

// //Se realiza las operaciones Suma,Resta,División,Multiplicación,Módulo

// var suma = parseInt(num1) + parseInt(num2);
// var resta = parseInt(num1) - parseInt(num2);
// var multiplica = parseInt(num1) * parseInt(num2);
// var division = parseInt(num1) / parseInt(num2);
// var modulo = parseInt(num1) % parseInt(num2);

// //Se muestra el resultado de cada operación

// if (num1 == num2){
//     alert("Ingrese un numero diferente");
// }else{
//     if(num1 == 0){
//         alert("Ingrese un numero mayor a cero");
//     }else{
//         if(num2 == 0){
//             alert("Ingrese un numero mayor a cero");
//         }else{
//             document.write(`<p> La suma de los números ${num1} y ${num2} es: ${suma}.</p>`);
//             document.write(`<p> La resta de los números ${num1} y ${num2} es: ${resta}.</p>`);
//             document.write(`<p> La multiplicación de los números ${num1} y ${num2} es: ${multiplica}.</p>`);
//             document.write(`<p> La division de los números ${num1} y ${num2} es: ${division}.</p>`);
//             document.write(`<p> El modulo de los números ${num1} y ${num2} es: ${modulo}.</p>`);
//         }
//     }
// }

//////////////////////////////////////////////////////////////// Ejercicio 3////////////////////////////////////////////////////////////////////////////////////////////////////////

// Solicitar que ingresen temperatura actual

// var datoCelsius = parseFloat(prompt("Ingresa temperatura en °Celcius"));

// //Conversion
// var Kelvin = datoCelsius + 273.15;
// var Fahrenheit = (datoCelsius *9/5) + 32;

// //Se muestra la conversion en pantalla

// document.write(`<p> La  ${datoCelsius}°C, equivale a ${Kelvin.toFixed(2)}K</p>`);
// document.write(`<p> La  ${datoCelsius}°C, equivale a ${Fahrenheit.toFixed(2)}°F</p>`);


//////////////////////////////////////////////////////////////// Ejercicio 4////////////////////////////////////////////////////////////////////////////////////////////////////////

//Solicitar que ingrese dias

// var dias = parseInt(prompt("Ingrese cantidad de días"));

// //Se realiza el calculo

// var years = Math.floor(dias/365);
// var semanas = Math.floor((dias % 365) / 7);
// var diasRestantes = dias - (years * 365) - (semanas * 7);

// // se muestra en pantalla el resultado
// document.write(`<p>${dias} días equivalen a : ${years} años, ${semanas} semanas y ${diasRestantes} día(s).</p>`);

//////////////////////////////////////////////////////////////// Ejercicio 5////////////////////////////////////////////////////////////////////////////////////////////////////////

// var num1 = prompt("Ingrese primer número");
// var num2 = prompt("Ingrese segundo número");
// var num3 = prompt("Ingrese tercer número");
// var num4 = prompt("Ingrese cuarto número");
// var num5 = prompt("Ingrese quinto número");

// var suma = parseInt(num1) + parseInt(num2) + parseInt(num3) + parseInt(num4) + parseInt(num5);
// var divide = (parseInt(num1) + parseInt(num2) + parseInt(num3) + parseInt(num4) + parseInt(num5)) / 5;



// document.write(`<p>La suma de los numeros ingresado es ${suma}.</p>`);
// document.write(`<p>El promedio de la suma  de los números ingresado es ${divide}.</p>`);