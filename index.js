//inicializo variables
var sumaEdad = 0;
var edadPromedio = 0;
var cantidadJugadores = 0;
//pido nombre de equipo para despues poder ingresarlo a su respectiva categoria
var nombreEquipo = prompt("Ingrese el nombre del equipo");
for (let i = 1; i < 16; i++){
    // itero 15 veces (max num de jugadores) o hasta que se escriba ESC
    let jugador = prompt("Ingrese Nombre y apellido del jugador. Si no hay mas jugadores escriba ESC.");
    let edad = prompt("Ingrese la edad del jugador. Si no hay mas jugadores escriba ESC.");

    if( jugador == "ESC" || edad == "ESC"){
        // en caso de ESC finalizo iteracion e imprimo detalles
        console.log("Este es tu equipo final.");
        edadPromedio = promediante(sumaEdad, cantidadJugadores);
        console.log("Tu equipo llamado " + nombreEquipo + " esta conformado por " + (cantidadJugadores) + " jugadores y la edad promedio es de " + edadPromedio + " anios");
        break
    }
    else {
        // sigo iterando sumando jugadores y edades mientras los muestro en pantalla
        let anios = parseInt(edad);
        sumaEdad = sumaEdad + anios;
        cantidadJugadores = cantidadJugadores + 1;
        console.log("Jugador numero " + i + " " + jugador + ". Edad: " + anios);
    }
    }
// hago el promedio de edad
function promediante(sumEdad, cantJug){
return sumEdad / cantJug
}

// creo un array por cada categoria para meter los equipos ahi
const diviA = { }
const diviB = { }
const diviC = { }
const diviD = { }
const diviE = { }

// creo un array de categorias para poder imprimir todos los equipos de cada una
const categorias = [diviA, diviB, diviC, diviD, diviE];

// creo el objeto Equipos para poder meterlos adentro de cada categoria
function objEquipos(equipo, edadProm, cantJug, jugadores) {
    this.equipo = equipo;
    this.edadProm = edadProm;
    this.cantJug = cantJug;
    this.jugadores = jugadores;
  }
  
  var equipo1 = new objEquipos(equipo, edadProm, cantJug, jugadores);
  var equipo2 = new objEquipos(equipo, edadProm, cantJug, jugadores); 

// creo el objeto ObjJugador para poder meterlo dentro de cada equipo
function objJugador(nombre, edad, equipo) {
    this.nombre = nombre;
    this.edad = edad;
    this.equipo = equipo;
  }
  
  var jugador1 = new objJugador(nombre, edad, equipo);
  var jugador2 = new objJugador(nombre, edad, equipo); 