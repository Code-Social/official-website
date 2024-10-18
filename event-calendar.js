document.addEventListener('DOMContentLoaded', () => {
    const events = [
        { date: '2024-10-06', title: 'React Workshop' },
        { date: '2024-10-14', title: 'Node.js Webinar' },
        { date: '2024-10-21', title: 'CSS Masterclass' },
    ];

    function generateCalendar() {
        const calendarGrid = document.getElementById('calendar-grid');
        const daysInMonth = new Date(2024, 9, 0).getDate(); // October 2024

        // Clear existing calendar
        calendarGrid.innerHTML = '';

        for (let day = 1; day <= daysInMonth; day++) {
            const dayElement = document.createElement('div');
            dayElement.className = 'calendar-day';
            dayElement.innerText = day;

            const event = events.find(e => new Date(e.date).getDate() === day);
            if (event) {
                const eventElement = document.createElement('div');
                eventElement.className = 'event';
                eventElement.innerText = event.title;
                dayElement.appendChild(eventElement);
            }

            calendarGrid.appendChild(dayElement);
        }
    }

    document.getElementById('add-event').addEventListener('click', () => {
        const date = document.getElementById('event-date').value;
        const title = document.getElementById('event-title').value;

        if (date && title) {
            events.push({ date, title });
            generateCalendar();
            document.getElementById('event-title').value = '';
        }
    });

    generateCalendar();
});