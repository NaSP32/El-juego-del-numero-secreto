alert('Vas a iniciar a jugar un juego de adivinanzas'); //lo que va entre () es el parámetro, puede venir de otro proceso, pero por ahora sera estatico
//el alert es un pop up
//un prompt le permite al usuario ingresar datos
/*Console.log imprime mensajes por consola. Cuando el proyecto esté disponible para todas las personas, 
en el  "entorno de producción", los comandos console.log deben eliminarse o desactivarse, 
ya que pueden causar problemas de rendimiento y seguridad.*/
//variables: let, const, var 
// utilizaremos let
/*
let numeroSecreto = 3; //variable para comparar 
let numeroUsuario = 0;
let contador = 1;
let cantidadVeces = 'vez';


while (numeroUsuario != numeroSecreto) {

    numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor:"); // método prompt de Js 
    console.log(numeroUsuario);

    //Comparacion: un signo igual es una asignacion. Dos == es una comparacion
    if (numeroUsuario == numeroSecreto) { 
        //Acertamos, la condicion es verdadera
        alert('Acertaste, el número es: ' + numeroUsuario); 
        //Segunda opcion necesito el $ para avisarle que lo que continua es una variable
        alert(`Acertaste, el numero que pense es: ${numeroUsuario}. Acertase en ${contador} ${cantidadVeces} `);
    
    } else {
        if (numeroUsuario > numeroSecreto){
            alert('El número que yo pense es menor al que escribiste');
            alert('¿Deseas volver a intentarlo?');
        
        }else{
            alert('El número que yo pense es mayor al que escribiste')
            }
        }
        //incrementamos el contador luego del 1° intento
        contador = contador + 1;
        cantidadVeces = 'veces';

}*/

let qtdNumeros = prompt('Digite la cantidad de números para el cálculo del promedio:');
let soma = 0;
let contador = qtdNumeros;

while(contador > 0){
    let numero = parseInt(prompt('Digite el numero:'));
    soma += numero;
    contador = qtdNumeros --;
}

let promedio = soma / qtdNumeros;

console.log(promedio);
