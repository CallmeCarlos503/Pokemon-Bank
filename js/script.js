function guardarDatos() {
    // Obtener los valores de los campos de texto
    var numero_cuenta = document.getElementById("numero_cuenta").value;
    var detalle = document.getElementById("detalle").value;
    var estado = document.getElementById("estado").value;
    var fecha_hora = document.getElementById("fecha_hora").value;
    
    // Crear un objeto con los datos
    var datos = {
      numero_cuenta: numero_cuenta,
      detalle: detalle,
      estado: estado,
      fecha_hora: fecha_hora
    };
    
    // Obtener los datos guardados en el LocalStorage
    var datosGuardados = localStorage.getItem("datos");
    if (datosGuardados === null) {
      datosGuardados = [];
    } else {
      datosGuardados = JSON.parse(datosGuardados);
    }
    
    // Agregar los nuevos datos al arreglo
    datosGuardados.push(datos);
    
    // Guardar los datos actualizados en el LocalStorage
    localStorage.setItem("datos", JSON.stringify(datosGuardados));
    
    // Actualizar la tabla de datos
    actualizarTablaDatos();
  }
  
  function actualizarTablaDatos() {
    // Obtener los datos guardados en el LocalStorage
    var datosGuardados = localStorage.getItem("datos");

    if (datosGuardados === null) {
      datosGuardados = [];
    } else {
      datosGuardados = JSON.parse(datosGuardados);
    }
    
    // Obtener la tabla de datos
    var tablaDatos = document.getElementById("tabla_datos");
    
    // Limpiar la tabla de datos
    tablaDatos.getElementsByTagName("tbody")[0].innerHTML = "";
    
    // Llenar la tabla de datos con los datos guardados
    for (var i = 0; i < datosGuardados.length; i++) {
      var fila = tablaDatos.insertRow();
      var celdaNumero = fila.insertCell(0);
      var celdaNumeroCuenta = fila.insertCell(1);
      var celdaDetalle = fila.insertCell(2);
      var celdaEstado = fila.insertCell(3);
      var celdaFechaHora = fila.insertCell(4);
      celdaNumero.innerHTML = i+1;
      celdaNumeroCuenta.innerHTML = datosGuardados[i].numero_cuenta;
      celdaDetalle.innerHTML = datosGuardados[i].detalle;
      celdaEstado.innerHTML = datosGuardados[i].estado;
      celdaFechaHora.innerHTML = datosGuardados[i].fecha_hora;
    }
  }
  
  // Actualizar la tabla de datos al cargar la página
  actualizarTablaDatos();