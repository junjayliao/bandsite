document.addEventListener('DOMContentLoaded', () => {
    const showsSection = document.getElementById('shows');

    const shows = [
        { date: "Mon Sept 09 2024", venue: "Ronald Lane", location: "San Francisco, CA" },
        { date: "Tue Sept 17 2024", venue: "Pier 3 East", location: "San Francisco, CA" },
        { date: "Sat Oct 12 2024", venue: "View Lounge", location: "San Francisco, CA" },
        { date: "Sat Nov 16 2024", venue: "Hyatt Agency", location: "San Francisco, CA" },
        { date: "Fri Nov 29 2024", venue: "Moscow Center", location: "San Francisco, CA" },
        { date: "Wed Dec 18 2024", venue: "Press Club", location: "San Francisco, CA" }
    ];

    const renderShow = (show) => {
        const showElement = document.createElement('div');
        showElement.className = 'show';

        const dateLabel = document.createElement('p');
        dateLabel.className = 'show__label';
        dateLabel.textContent = 'DATE';
        
        const dateElement = document.createElement('p');
        dateElement.className = 'show__date';
        dateElement.textContent = show.date;

        const venueLabel = document.createElement('p');
        venueLabel.className = 'show__label';
        venueLabel.textContent = 'VENUE';

        const venueElement = document.createElement('p');
        venueElement.className = 'show__venue';
        venueElement.textContent = show.venue;

        const locationLabel = document.createElement('p');
        locationLabel.className = 'show__label';
        locationLabel.textContent = 'LOCATION';

        const locationElement = document.createElement('p');
        locationElement.className = 'show__location';
        locationElement.textContent = show.location;

        const buttonElement = document.createElement('button');
        buttonElement.className = 'show__button';
        buttonElement.textContent = 'BUY TICKETS';
        buttonElement.addEventListener('click', () => {
            alert(`Tickets for ${show.venue} are not available yet.`);
        });

        showElement.appendChild(dateLabel);
        showElement.appendChild(dateElement);
        showElement.appendChild(venueLabel);
        showElement.appendChild(venueElement);
        showElement.appendChild(locationLabel);
        showElement.appendChild(locationElement);
        showElement.appendChild(buttonElement);

        showsSection.appendChild(showElement);
    };

    shows.forEach(renderShow);

    showsSection.addEventListener('click', (event) => {
        const showElements = document.querySelectorAll('.show');
        showElements.forEach((showElement) => {
            showElement.classList.remove('show--selected');
        });

        if (event.target.classList.contains('show')) {
            event.target.classList.add('show--selected');
        } else if (event.target.closest('.show')) {
            event.target.closest('.show').classList.add('show--selected');
        }
    });
});
