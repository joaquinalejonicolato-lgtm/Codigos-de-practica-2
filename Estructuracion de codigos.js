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

//Acumular Ej 2
programa cuentaPropinas
inicio
    var integrer propinasAcumuladas
    var integrer cantidad
    var integrer propinasAcumuladas

    //Comienzo de Bloque A
    propinasAcumuladas = 0
    cantidad = 1
    propina = 0
    //fin de bloque A de codigo

    //Comienzo de bloque B del codigo
    mientras cantidad <= 7 hacer //Cantidad representa la cantidad de dias de la semana.
        mostrar: "Ingrese propina del dia"
        ingresar: propina
        propinasAcumuladas = propinasAcumuladas + propina
        cantidad = cantidad + 1
    fin mientras
    //fin de bloque B del codigo
fin

// Funcion "Y";"O"
programa condiciones
inicio
    si valor > 22 O < 20 entonces
         //Entran los valores mayores o iguales a 23 o menores o iguales a 19
         //Quedan eliminados los valores 20, 21 o 22.
    fin si
fin

//Ejemplo 2
programa condiciones
inicio
    si valor < 22 y valor > 20 entonces
        //entra si el valor es 21 o mas grande o si el valor es 21
        // o mas chico, o sea, es lo mismo que preguntar "valor = 21"
    fin si
fin

//Ejemplo 3 mas complejo
programa condiciones
inicio
    nombre = "cosme"
    clave = "fulanito" 
    intentos = 0

    ingresar = nombreDeUsuario
    ingresar = claveDeUsuario
    intentos = intentos + 1

    si nombre = nombreDeUsuario Y clave = claveDeUsuario Y intentos < 3 entonces
        mostrar: "acceso concedido" //se accede solo cumpliendo con las 3 condiciones
    sino
        mostrar: "Acceso denegado" 
    fin si
fin

//Ejemplo 4 con combinacion de"Y" U "O"
programa condiciones
inicio
    si (nombre != nombreDeUsuario O clave != claveDeUsuario) Y intentos = 4 entonces
        mostrar: "Clave bloqueada" //entra si no se cumple alguna de las 2 primeras condiciones
                                   // y si se cumple la tercera ("intentos = 4")
        //En estos casos es conveniente valerse de paréntesis para dividir correctamente los términos de la condición compuesta. 
    fin si
fin
