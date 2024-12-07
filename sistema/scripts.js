document.addEventListener('DOMContentLoaded', function () {
    const calendarEl = document.getElementById('calendar');
    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        headerToolbar: {
            start: 'prev,next today',
            center: 'title',
            end: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        events: [],
        dateClick: function (info) {
            openModal(info.dateStr);
        }
    });

    calendar.render();

    // Formulario de citas
    const appointmentForm = document.getElementById('appointmentForm');
    appointmentForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const title = document.getElementById('title').value;
        const veterinarian = document.getElementById('veterinarian').value;
        const date = document.getElementById('date').value;
        const notes = document.getElementById('notes').value;

        // Agregar evento al calendario
        calendar.addEvent({
            title: `${title} - ${veterinarian}`,
            start: date,
            extendedProps: {
                notes
            }
        });

        // Limpiar formulario y cerrar modal
        appointmentForm.reset();
        closeModal();
    });
});

// Modal
function openModal(date) {
    document.getElementById('appointmentModal').classList.add('active');
    document.getElementById('date').value = date + "T10:00"; // Hora por defecto
}

function closeModal() {
    document.getElementById('appointmentModal').classList.remove('active');
}
