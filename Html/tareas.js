
        document.addEventListener('DOMContentLoaded', function() {
            var calendarEl = document.getElementById('calendar');
            var calendar = new FullCalendar.Calendar(calendarEl, {
                initialView: 'dayGridMonth', // Vista mensual
                locale: 'es', // Configurar en español
                headerToolbar: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
                },
                events: [
                    {
                        title: 'Evento de prueba',
                        start: '2024-06-10'
                    },
                    {
                        title: 'Otro evento',
                        start: '2024-06-15',
                        end: '2024-06-17'
                    }
                ]
            });
            calendar.render();
        });

  function confirmarAccion(){
    Swal.fire({
      icon: "question",
      title: "Salir?",
      text: "Seguro desea salir?",
      showCancelButton: true
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = "Login.html";
    } else {
      Swal.fire("Salida cancelada", "", "info");
    }
  });
}
function atras(){
  window.location.href = "Task.html";
}