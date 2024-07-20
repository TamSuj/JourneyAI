function DisplayResponse(response){
    function showCards() {
        const cardContainer = document.getElementById("card-container");
        cardContainer.innerHTML = "";

        response.itinerary.forEach(day => {
            day.activities.forEach(activity => {
                const newCard = createCard(activity);
                cardContainer.appendChild(newCard);
            });
    });
}

    function createCard(activity) {
        const cardTemplate = document.createElement('div');
        cardTemplate.className = "card";

        cardTemplate.innerHTML = `
        <div class="card-content">
            <h2>${activity.name}</h2>
            <div class="card-type">${activity.type}</div>
            <div class="card-duration">${activity.duration}</div>
            <div class="card-description">${activity.description}</div>
        </div>
    `;

        return cardTemplate;
    }

    document.addEventListener("DOMContentLoaded", showCards);
    return (
        <div>
            <p>{response}</p>
        </div>
    )
}


export default DisplayResponse;