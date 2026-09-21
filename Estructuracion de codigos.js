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
// Condicion compuesta
inicio
    var integrer numero
    mostrar: "Ingrese numero"
    ingresar: numero
    si numero < 0 entonces
        numero = numero * (-1)
    sino si numero > 0 entonces
        mostrar: "Es cero"
    sino
        mostrar: "Es positivo"
    fin si
fin
//Condicion anidada
programa NumeroPositivo
inicio
    var integrer numero
    mostrar: "Ingrese numero"
    ingresar: numero
    si numero < 0 entonces
        numero = numero * (-1)
     sino
        si numero > 0 entonces
            mostrar: "Es cero"
         sino
             mostrar: "Es positivo" 
            
        sino
            mostrar: "No es un dato valido"
        fin si
    fin si
fin
 
//Asignaciones
programa Asignacion
inicio
    var integrer numero
    numero = 2
    mostrar : "El Numero es:"
    mostrar: numero
fin

//Contadores
programa Contador 
inicio
    var integrer i 
    var integrer cantidadDeCiclos

    mostrar: "Ingresar cantidad de ciclos"
    ingresar: cantidadDeCiclos
    i=0
    mintras i < cantidadDeCiclos hacer
        i = i + 1
    fin mientras
    mostrar: "El Ciclo se Ejecuto"
    mostrar: i
    mostrar: " Veces" 
fin

//Acumuladores
programa Acumuladores
inicio
    var integrer acumulado 
    var integrer maximo 
    var integrer acumuluar

    acumulado = 0
    maximo = 101
    acumular = 10
    mientras acumulado < maximo hacer
        acumulado = acumulado + acumular
    fin mientras
    mostrar: "El acumulado es "
    mostrar: acumulado
fin

