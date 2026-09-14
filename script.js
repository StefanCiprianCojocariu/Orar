days = [
    {
        name: 'Luni',
        image: 'luni.jpg',
        schedule: {
            8: '6 A',
            9: '6 C',
            10: '8 B',
            12: '7 C',
            13: '8 A',
            14: '8 B'
        }
    },
    {
        name: 'Marți',
        image: 'marti.jpg',
        schedule: {
            9: '7 B',
            10: '8 C',
            11: '6 D',
            12: '6 B'
        }
    },
    {
        name: 'Miercuri',
        image: 'miercuri.jpg',
        schedule: {
            8: '6 B',
            9: '7 A',
            10: '7 C',
            12: '6 C'
        }
    },
    {
        name: 'Joi',
        image: 'joi.jpg',
        schedule: {
            12: '6 B',
            13: '7 B',
            14: '7 C',
        }
    },
    {
        name: 'Vineri',
        image: 'vineri.jpg',
        schedule: {
            8: '6 D',
            10: '7 A',
            11: '8 C',
            12: '8 A'
        }
    },
];


for (const day of days) {
    const day_div = document.createElement('div');
    const day_name_div = document.createElement('div');
    const schedule_div = document.createElement('div');
    const schedule_table = document.createElement('table');

    day_div.style.backgroundImage = "url('" + day.image + "')";
    day_div.classList.add('day');
    day_name_div.classList.add('day-name');
    schedule_div.classList.add('schedule');

    day_name_div.innerHTML = day.name;
    schedule_div.appendChild(schedule_table);

    // Set up the table;
    for (let i = 8; i < 15; i++) {
        const row = schedule_table.insertRow();
        cell = row.insertCell();
        cell.textContent = i;
        cell.className = 'hour';

        if (i in day.schedule) {
            cell = row.insertCell();
            cell.className = 'class';
            cell.textContent = day.schedule[i];
        }
    }


    day_div.appendChild(day_name_div);
    day_div.appendChild(schedule_div);
document.body.appendChild(day_div);
}