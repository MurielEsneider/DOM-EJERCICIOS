/* ejercicio 1 */


function suma (num1, num2){
    return num1 + num2
}
console.log(suma(12,12));

/* ejercicio 1 */

/* ejercicio 2 */

function Nprimo(numero){

    for (let w =2; w < numero; w++){
        if (numero % w ===0) {
            return console.log(`el numero ${numero} no es primo`);
        } else{
            return console.log(`el numero ${numero} ingresado es primo`);
        }
    }
}

Nprimo();
const resultado = Nprimo(8)
/* ejercicio 2 */


/* ejercicio 3 */



function promedio (num1, num2){
    return (num1 + num2) / 2;
}
console.log(promedio(6,11));
/* ejercicio 3 */

/* ejercicio 4 */

function Npares(){
    let inicio = 0;
    let par = [];
    do{
        if(inicio % 2 === 0){
        console.log(inicio)
        }
       
        inicio++;
    } while(inicio <= 60);
        return par;
}

Npares();
const numerosprimos = Npares 

/* ejercicio 4 */

/* ejercicio 5 */


function multiplicar () {
    let num1 = prompt("ingresa un numero");
       let multiplicacion = [];
       for (let r = 1; r <=10; r++){
    
           console.log(`${num1} x ${r} = ${num1 * r}`);
            
     } return multiplicacion;
            
     } 
     multiplicar();
     const tabla = multiplicar
    
/* ejercicio 5 */

/* ejercicio 6 */
     function numeroMayor(a, b, c) {
        if (a === b && a === c) {
          return "Son Iguales";
        } else {
          return Math.max(a, b, c);
        }
      }
      
      console.log(numeroMayor(30, 35, 20));
      

 /* ejercicio 6 */
       
      
 /* ejercicio 7 */
function generarcaracter(n, caracter){
    return caracter.repeat (n);
   }
    
 console.log(generarcaracter(20, 'm'));

 /* ejercicio 7 */

 /* ejercicio 8 */


    function sumanumeros(){
        let suma = 0;
        for (let i = 1; i <= 10; i++){
            suma += i;
        }
        return suma;
    }
    
    console.log(sumanumeros());

/* ejercicio 8 */
    
    
/* ejercicio 9 */

    function solicitarnum() {
        let numero;
        do {
            numero = prompt("Ingrese un número mayor que 100:");
            numero = Number(numero);
        } while (numero <= 100 || isNaN(numero));
        alert("Número correcto: " + numero);
    }
    
    solicitarnum();
    

 /* ejercicio 9 */

/* ejercicio 10 */


    function obtenersiete() {
        let numero;
        while (numero !== 7) {
            numero = Math.floor(Math.random() * 10) + 1;
            console.log(numero); 
        }
    }
    
    obtenersiete();
    
/* ejercicio 10 */
/* ejercicio 11 */
    
    
    function imprimirpares() {
    for (let i = 0; i <= 20; i += 2) {
        console.log(i);
    }
}

imprimirpares();

/* ejercicio 11 */ 
/* ejercicio 12 */   

    function pedirnumero() {
        let numero;
        do {
            numero = prompt("ingrese un número entre 1 y 5:");
            numero = parseInt(numero, 10);  
        } while (numero < 1 || numero > 5 || isNaN(numero)); 
    
        alert("Número ingresado correcto: " + numero);
    }
    
    pedirnumero();

/* ejercicio 12 */   
/*  ejercicio 13 */

   function imprimirfibonacci() {
    let a = 0, b = 1, c;
    console.log(a); 
    console.log(b); 
    for (let i = 2; i < 10; i++) {
        c = a + b;
        console.log(c);
        a = b;
        b = c;
    }
}

imprimirfibonacci();

/*  ejercicio 13 */
/* ejercicio 14 */


function validarcontrasena() {
    let contrasena;
    while (contrasena !== "contraseña123") {
        contrasena = prompt("Ingrese su contraseña:");
    }
    alert("Contraseña correcta!");
}

validarcontrasena();


/* ejercicio 14 */
/*  ejercicio 15 */

   function imprimirP(n) {
    for (let num = 2, count = 0; count < n; num++) {
      for (let i = 2, s = Math.sqrt(num); i <= s && num % i === 0;) i += 2;
      if (i > s) console.log(num), count++;
    }
  }
  
  imprimirP(5); // Imprime: 2 3 5 7 11 */

/*  ejercicio 15 */
/* ejercicio 16  */


function pedirnumeropositivo() {
    let numero;
    do {
      numero = prompt("Ingrese un número positivo:");
    } while (isNaN(numero) || numero <= 0);
    return numero;
  }
  
  const numeroIngresado = pedirnumeropositivo();
  console.log("Número ingresado:", numeroIngresado);

/* ejercicio 16  */
/* ejercicio 17 */

  function imprimirnumerosatras(inicio, fin) {
    for (let i = inicio; i >= fin; i--) console.log(i);
  }
  
  imprimirnumerosatras(10, 1); 

/* ejercicio 17 */
/* ejercicio 18 */ 

  function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
  }

  factorial();
 


/* ejercicio 18 */ 


/* ejercicio 20 */


function fizzbuzz() {
    for (let i = 1; i <= 100; i++) {
      const resultado = i % 3 === 0 ? "Fizz" : i % 5 === 0 ? "buzz" : i;
      console.log(resultado);
    }
  }
  
  fizzbuzz(); 


  /* ejercicio 20 */