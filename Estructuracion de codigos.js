// Variables, Son recipientes donde colocamos distintos elementos
minumero = 1126716143
nombredemimascota = "Patitas"
// Cada variable tiene una funcion diferente 
// Ejemplo de como asignar una Variable

programa DeclaracionDeVariables
inicio
    var date fechaDeNacimiento = "23/11/2005"
    var string nombre
    nombre = "Joaquin"
    var integer edad = 20
    var float altura = 1.68
    var boolean tieneHijos
    tieneHijos = falso
fin

//Estructuras de Secuencias
...
instruccion1
instruccion2
instruccion3
...

//Estructura condicional
si (condicion) entonces
Instruccion2
Instruccion3
sino
Instruccion1
fin si

//Estructura repetitiva
mientras <<condicion>> hacer
    Instruccion1
fin mientras
instruccion2 

//Condicion simple
programa NumeroPositivo
inicio
    var integer numero
    mostrar: "Ingrese un numero"
    ingresar: numero
    si numero < 0 entonces
        numero = numero * (-1)
    fin si
fin

//Condicion doble
programa NumeroPositivo
inicio
    var integrer numero
    mostrar: "Ingrese numero"
    ingresar: numero
    si numero < 0 entonces
        numero = numero * (-1)
    sino
        mostrar: "Es positivo"
    fin si
fin
