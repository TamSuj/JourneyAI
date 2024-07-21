import React, { useEffect } from 'react';

function DisplayResponse({ response }) {
    useEffect(() => {
        function showCards() {
            let parsedResponse;

            try {
                parsedResponse = typeof response === 'string' ? JSON.parse(response) : response;
            } catch (error) {
                console.error('Error parsing response:', error);
                return;
            }

            const cardContainer = document.getElementById('card-container');
            cardContainer.innerHTML = '';

            if (parsedResponse && parsedResponse.itinerary) {
                parsedResponse.itinerary.forEach((day, index) => {
                    const dayCard = createDayCard(day, index + 1);
                    cardContainer.appendChild(dayCard);
                });
            }
        }

        function createDayCard(day, dayNumber) {
            const dayCardTemplate = document.createElement('div');
            dayCardTemplate.className = 'day-card';

            dayCardTemplate.innerHTML = `
                <h2>Day ${dayNumber}</h2>
            `;

            if (day.activities) {
                day.activities.forEach(activity => {
                    const activityCard = createActivityCard(activity);
                    dayCardTemplate.appendChild(activityCard);
                });
            }

            return dayCardTemplate;
        }

        function createActivityCard(activity) {
            const activityCardTemplate = document.createElement('div');
            activityCardTemplate.className = 'card';

            activityCardTemplate.innerHTML = `
                <div class="card-content">
                    <h2>${activity.name}</h2>
                    <div class="card-type">${activity.type}</div>
                    <div class="card-duration">${activity.duration}</div>
                    <div class="card-description">${activity.description}</div>
                </div>
            `;

            return activityCardTemplate;
        }

        if (response) {
            showCards();
        }
    }, [response]);

    return <div id="card-container"></div>;
}

export default DisplayResponse;
