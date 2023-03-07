//establezco un array de objetos
const notas = [
  { equivalencia: "A", mensaje: "Exceeds proficiency", rango: [12, 14] },
  { equivalencia: "B", mensaje: "Demonstrates profiencicy", rango: [9, 11] },
  { equivalencia: "C", mensaje: "Approaches profiencicy", rango: [6, 8] },
  { equivalencia: "D", mensaje: "Falls well below profiencicy", rango: [3, 5] },
  { equivalencia: "E", mensaje: "Lacks all proficiency", rango: [1, 2] },
  { equivalencia: "Z", mensaje: "No attempt made", rango: [0, 0] },
];

//entra de datos
let ingresoNota = parseInt(
  prompt("Por favor ingresa su nota entre el rango de 0 a 14")
);
let calificacion = "";
//recorro el array
notas.forEach((element) => {
  //si la nota ingresada esta entre los rangos
  if (ingresoNota >= element.rango[0] && ingresoNota <= element.rango[1]) {
    //guardo en la variable la equivalencia del rango en que se encuentra
    calificacion = element.equivalencia;
  }
});

//valido
if (calificacion.length > 0) {
  //uso la funcion "find" para encontrar el objeto de donde se encuentra la equivalencia
  let rta = notas.find((nota) => nota.equivalencia === calificacion);
  //imprimo la equivalencia y el mensaje de ese objeto
  console.log(`Su calificacion es ${calificacion} ${rta.mensaje}`);
} else {
  console.log("Por favor ingrese un numero valido");
}
