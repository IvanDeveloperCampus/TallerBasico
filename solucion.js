const notas = [
  { equivalencia: "A", mensaje: "Exceeds proficiency", rango: [12, 14], traditional:[90,100], sbg: 4 },
  { equivalencia: "B", mensaje: "Demonstrates profiencicy", rango: [9, 11], traditional:[80,89], sbg: 3 },
  { equivalencia: "C", mensaje: "Approaches profiencicy", rango: [6, 8], traditional:[70,79], sbg: 2 },
  { equivalencia: "D", mensaje: "Falls well below profiencicy", rango: [3, 5], traditional:[60,69], sbg:1 },
  { equivalencia: "E", mensaje: "Lacks all proficiency", rango: [1, 2], traditional:[1,60], sbg:0},
  { equivalencia: "Z", mensaje: "No attempt made", rango: [0, 0], traditional:[0,0], sbg:0 }
];

let opcion=Number(prompt(`Por favor ingresa el tipo de nota que va a ingresar\n\t1.Por rango\n\t2.Tradicional\n\t3.sbg`))


let calificacion = "";
let ingresoNota =0
switch (opcion) {
  
  case 1:
    ingresoNota = parseInt(
      prompt("Por favor ingresa su nota entre el rango 12 - 14 ")
    );
    notas.forEach((element) => {
      if (ingresoNota >= element.rango[0] && ingresoNota <= element.rango[1]) {
        calificacion = element.equivalencia;
    
      } 
    });
    break;
  case 2:
     ingresoNota = parseInt(
      prompt("Por favor ingresa su nota entre el rango 0 - 100 ")
    );
    notas.forEach((element) => {
      if (ingresoNota>=element.traditional[0] && ingresoNota<= element.traditional[1]) {
        calificacion=element.equivalencia;
    
      }
    });
    
    break;
  case 3:
   ingresoNota = parseInt(
      prompt("Por favor ingresa su nota entre el rango 0 - 4 ")
    );
    notas.forEach((element) => {
      if (ingresoNota===element.sbg) {
        calificacion=element.equivalencia;
      } 
    });
    
    break;
}



if (calificacion.length > 0) {
  let rta = notas.find((nota) => nota.equivalencia === calificacion);

  console.log(`Su calificacion es ${calificacion} ${rta.mensaje}`);
} else {
  console.log("Por favor ingrese un numero valido");
}
