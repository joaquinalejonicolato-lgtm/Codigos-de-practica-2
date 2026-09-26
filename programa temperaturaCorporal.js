//1) Crear un programa que solicite el ingreso de la temperatura corporal y muestre un mensaje en caso de tener fiebre 

programa temperaturaCorporal
iniciar
    var float temperatura
    mostrar: "ingresar temperatura actual"
    ingresar: temperatura
    si temperatura <36.50 entonces 
        mostrar: "Su temperatura es adecuada"
        sino si temperatura >=38.60
            mostrar: "Su temperatura indica fiebre"
        fin si
    fin si
fin

//2) Crear un programa que pida la cantidad la cantidad de puertas que tiene un vehículo y valida si es coupé y muestre un mensaje en forma afirmativa
programa autoCupe
iniciar
    var integrer numeroDePuertas
    mostrar: "Cantidad de Puertas"
    ingresar: numeroDePuertas
    si numeroDePuertas == 2 entonces 
        mostrar: "El Auto si es coupe"
    fin si
fin

//3) Crear un programa que solicite el ingreso de una edad e indique si puede votar (a partir de los 16 años)
programa aptoVotar
iniciar
    var integrer votante
    mostrar: "Ingrese edad"
    ingresar: votante
    si votante >= 16 entonces
        mostrar: "Si puede votar"
    fin si
fin

//4) Crear un programa que solicite el ingreso de la altura de una persona e informe si puede acceder a un juego mecánico (el mínimo para ingresar es 1,20 metros) 

programa alturaAutorizada
iniciar
    var float altura
    mostrar: "Ingrese su Altura"
    ingresar: altura
    si altura >= 1.20 entonces
        mostrar: "Puede disfrutar del juego"
        sino
            mostrar: "Tendras que esperar..."
        fin si
    fin si
fin

//5) Crear un programa que pida el ingreso de una clave, valide contra una clave guardada si coincide o no y que lo informe, sea caso afirmativo o negativo

programa contraseniaActual
iniciar
    var integrer contrasenia = 46612819
    mostrar: "Ingrese Contraseña"
    ingresar: contrasenia
    si contrasenia == 46612819 entonces
        mostrar: "Bienvenido"
        sino
            mostrar: "Contraseña equivocada"
        fin si
    fin si
fin

//6) Crear un programa que pida el ingreso de la cantidad de puertas de un auto, las valide e informe si se trata o no de un auto tipo sedán 
programa autoSedan
Inicio 
    var integrer puertas
    mostrar: "Ingresar Cantidad de Puertas"
    ingresar: puertas
    si puertas >= 4 entonces
        mostrar: "Su Auto es Sedan"
        sino
            mostrar: "Su auto no es sedan"
        fin si
    fin si
fin

//7) Crear un programa que valide si los últimos 3 números de la patente es un número par o no. Si es par, indicar que puede circular. Si no es par, indicar que no puede circular.
programa patentePar
iniciar
    var integrer patente
    mostrar: "¿Su patente termina par?"
    ingresar: patente
    si patente == 
fin

//8) Crear un programa que pida el ingreso de la edad de una persona y que indique si es o no es mayor de edad 
programa mayorEdad
iniciar
    var integrer edad
    mostrar: "Ingresar edad"
    ingresar: edad
    si edad >= 18 entonces
        mostrar: "Esta Autorizado"
        sino 
            mostrar: "Te falta edad"
        fin si
    fin si
fin

//9) Crear un programa que, dada la altura de una persona ingresada por el usuario, indique si se trata de una persona alta (más de 1,7 metros), una persona de altura media (entre 1,50 metros y 1,70 metros) o una persona de altura baja (menos de 1,5 metros). 
programa altoABajo
iniciar 
    var float alturaTotal
    mostrar: "Ingrese altura"
    ingresar: alturaTotal
    si alturaTotal >= 1.70 entonces
        mostrar: "Sos alto!!"
        sino
            si alturaTotal >= 1.60 entonces
                mostrar: "Sos Mediano!!"
                sino
                    si alturaTotal <1.60 o <= 1.50 entonces
                        mostrar: "Sos medio bajito"    
                    fin si
                fin si
            fin si
        fin si
    fin si
fin si

//10) Crear un programa que pida el ingreso de un año y que valide si se encuentra dentro entre el año 2000 y el año 2010. Informar caso afirmativo o casos negativos. 
programa controlDeAnios
iniciar
    var date anios
    mostrar: "Ingrese el año"
    ingresar: anios
    si anios >= 2000 entonces
            si anios <= 2010 entonces
                mostrar: "Estas dentro!!"
                sino
                    mostrar: "No Entraste!!"
                fin si
            fin si
        fin si
    fin si
fin

//11) Crear un programa que, a partir del ingreso de la edad de una persona informe si está obligada a votar (más de 18 años), si no está obligada (más de 70 años) o si no puede votar.
programa calcularEdad
iniciar
    var integrer edades
    mostrar: "Ingresar edades porfavor"
    ingresar: edades
    si edades >= 18 entonces
        si <=70 entonces
            mostrar: "Tenes que votar si o si"
            sino
                mostrar: "Lamentablemente No Podes Votar"
            fin si
        fin si
    fin si
fin


//Entrega de login
programa LoginTp
Inicio
    nombre = "Joaquin01"
    clave = "patitas01"
    intentos = 0
    
    ingresar = nombreValido
    ingresar = claveValida
    ingresar = intentos + 1

    si clave = claveValida Y nombre = nombreValido Y intentos < 3 entonces
        mostrar: "los datos que ingreso son correctos, aguarde un momento"
    sino si clave != claveValida O nombre != nombreValido Y intentos <= 2 entonces
        mostrar: "Uno de los datos no es correcto, intente nuevamente"
    sino si clave != claveValida O nombre != nombreValido Y intentos  = 3 entonces
        mostrar: "Se a quedado sin intentos, intente nuevamente mas tarde"
    fin si
fin

    