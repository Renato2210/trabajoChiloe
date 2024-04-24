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
      // Aquí iría la lógica para crear la carta de presentación
    });
  });
  