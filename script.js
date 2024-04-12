document.addEventListener("DOMContentLoaded", function() {
    // Cargar porcentajes de votos almacenados en localStorage al cargar la página
    var maestros = document.querySelectorAll(".maestro");
    maestros.forEach(function(maestro) {
        var maestroId = maestro.id;
        var porcentajeVotos = localStorage.getItem(maestroId);
        if (porcentajeVotos !== null) {
            maestro.querySelector(".votos").textContent = porcentajeVotos + "%";
        }
    });

    // Escuchar clics en las imágenes de los maestros
    var maestros = document.querySelectorAll(".maestro img");
    maestros.forEach(function(maestro) {
        maestro.addEventListener("click", function() {
            var maestroId = this.parentNode.id;
            var votosEstudiante = parseInt(localStorage.getItem("votosEstudiante")) || 0;
            var limiteVotos = document.getElementById("limiteVotos");

            // Verificar si el estudiante aún tiene votos disponibles
            if (votosEstudiante < 1 && !localStorage.getItem(maestroId)) {
                // Incrementar el porcentaje de votos del maestro
                var votosElement = this.parentNode.querySelector(".votos");
                var porcentajeVotos = parseInt(votosElement.textContent);
                porcentajeVotos += 13;
                votosElement.textContent = porcentajeVotos + "%";

                // Guardar el porcentaje de votos del maestro en localStorage
                localStorage.setItem(maestroId, porcentajeVotos);

                // Incrementar el contador de votos del estudiante
                votosEstudiante++;
                localStorage.setItem("votosEstudiante", votosEstudiante);
            } else {
                // Mostrar la alerta de límite de votos
                limiteVotos.classList.add("show");
                // Ocultar la alerta después de 3 segundos
                setTimeout(function() {
                    limiteVotos.classList.remove("show");
                }, 3000);
            }
        });

        
    });
});


document.addEventListener("DOMContentLoaded", function() {
    var mensajes = [
        "¡Hola! Soy Irin otra ves. vine a guiarte ya que mi desarrollador es muy bago para declarar una funtion de guia para la pagina",
        "puedes deslizar las fotos para buscar a tu maestro favorito",
        "si no ves a tu maestro es porque Steve no tiene su foto",
        "Recuerda que puedes votar por tus maestros favoritos. ¡Solo tienes 2 votos!",
        "Gracias por tu visita. ¡No dudes en volver para ver si ya esta tu maestro!"
    ];

    var indiceMensaje = 0;
    var mensajeElement = document.getElementById("mensaje");
    var siguienteBtn = document.getElementById("siguiente");

    // Función para actualizar el mensaje
    function actualizarMensaje() {
        mensajeElement.textContent = mensajes[indiceMensaje];
    }

    // Mostrar el primer mensaje al cargar la página
    actualizarMensaje();

    // Escuchar clics en el botón "Siguiente"
    siguienteBtn.addEventListener("click", function() {
        // Avanzar al siguiente mensaje
        indiceMensaje++;
        // Reiniciar al primer mensaje si hemos alcanzado el último
        if (indiceMensaje >= mensajes.length) {
            indiceMensaje = 0;
        }
        // Actualizar el contenido de la burbuja de diálogo
        actualizarMensaje();
    });
});


