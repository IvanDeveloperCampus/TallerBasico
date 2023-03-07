const notas = [
    { equivalencia: "A", mensaje: "Exceeds proficiency", rango: [12, 14] },
    { equivalencia: "B", mensaje: "Demonstrates profiencicy", rango: [9, 11] },
    { equivalencia: "C", mensaje: "Approaches profiencicy", rango: [6, 8] },
    { equivalencia: "D", mensaje: "Falls well below profiencicy", rango: [3, 5] },
    { equivalencia: "E", mensaje: "Lacks all proficiency", rango: [1, 2] },
  ];
  
  let ingresoNota = parseInt(prompt("Por favor ingresa su nota"));
  let calificacion = "";
  notas.forEach((element) => {
    if ( ingresoNota >= element.rango[0] && ingresoNota<=element.rango[1]) {
          calificacion = element.equivalencia;
    }
  });
  
  let rta=notas.find(nota=>nota.equivalencia===calificacion)
  console.log(`Su calificacion es ${rta.equivalencia} ${rta.mensaje}`);
