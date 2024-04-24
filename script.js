$(document).ready(function() {
    // Inicializar Parsley en el formulario
    $('#formularioPostulacion').parsley();
  
    // Aplicar validaciones a los campos del formulario
    $('#rut').parsley({
      pattern: /^.{9,10}$/,
      messages: {
        pattern: 'El RUT debe tener entre 9 y 10 caracteres.'
      }
    });
  
    $('#nombre, #apellidoPaterno, #apellidoMaterno').parsley({
      pattern: /^.{3,20}$/,
      messages: {
        pattern: 'Este campo debe tener entre 3 y 20 caracteres.'
      }
    });
  
    $('#edad').parsley({
      range: [18, 35],
      messages: {
        range: 'La edad debe estar entre 18 y 35 años.'
      }
    });
  
    $('#genero').parsley({
      required: true,
      messages: {
        required: 'Por favor seleccione su género.'
      }
    });
  
    $('#celular').parsley({
      pattern: /^.{9,12}$/,
      messages: {
        pattern: 'El celular debe tener entre 9 y 12 caracteres.'
      }
    });
  
    // Manejar el evento de clic en el botón "Crear Carta"
  $('#crearCarta').on('click', function() {
    // Recolectar los datos del formulario
    var rut = $('#rut').val();
    var apellidoPaterno = $('#apellidoPaterno').val();
    var apellidoMaterno = $('#apellidoMaterno').val();
    var nombre = $('#nombre').val();
    var fechaNacimiento = $('#fechaNacimiento').val();
    var edad = $('#edad').val();
    var genero = $('#genero').val();
    var email = $('#email').val();
    var celular = $('#celular').val();
    var profesion = $('#profesion').val();
    var motivacion = $('#motivacion').val();

    // Construir la carta de presentación
    var carta = "Estimado/a reclutador/a,\n\n";
    carta += "Mi nombre es " + nombre + " " + apellidoPaterno + " " + apellidoMaterno + " y mi rut es " + rut + ". ";
    carta += "Nací el " + fechaNacimiento + ", tengo " + edad + " años y me identifico como " + genero + ". ";
    carta += "Puede contactarme a través de mi correo electrónico " + email + " o mi número de celular " + celular + ".\n\n";
    carta += "Soy " + profesion + " de profesión y estoy muy interesado/a en el trabajo de apoyo ambiental en Chiloé. ";
    carta += "Me motiva el desafío de contribuir al cuidado del medio ambiente y estoy convencido/a de que mi experiencia y motivación me hacen un/a candidato/a ideal para esta posición.\n\n";
    carta += "A continuación, adjunto mi motivación para postular al trabajo:\n" + motivacion + "\n\n";
    carta += "Quedo a disposición para cualquier consulta o entrevista que deseen realizar.\n\n";
    carta += "Atentamente,\n" + nombre + " " + apellidoPaterno + " " + apellidoMaterno;

    // Mostrar la carta en el área de texto
    $('#carta').val(carta);
  });
});
  