// prompt.jsx
function journeyCmd(location, numOfPeople, day, theme){ 
    return `List a traveling plan with at ${location} city for a group of ${numOfPeople} people for ${day} days in the ${theme} theme and must use this JSON format look like this
example (Please keep the same key name, do not change them), 
:
{
    "tripName": "Pasadena Trip", 
    "travelers": ${numOfPeople}, 
    "duration": ${day}, 
    "theme": "${theme}",
    "itinerary": 
    [
        {
            "day": 1, 
            "activities": 
            [
                {
                    "name": "Visit the Huntington Library, Art Museum, and Botanical Gardens", 
                    "location_name: Huntington Library, San Marino, CA":,
                    "type": "palette", 
                    "duration": "9am - 12pm", 
                    "description": "Explore beautiful gardens, art exhibits, and historical manuscripts."
                }, 

                {
                    "name": "Dinner at The Royce at The Langham", 
                    "location_name: The Royce Wood Fired Steakhouse, Pasadena, CA":,
                    "type": "utensils", 
                    "duration": "12:30pm - 2pm", 
                    "description": "Enjoy fine dining with stunning views at this elegant restaurant."
                }
            ]
        }, 
    ]
}
    
Note: Each activity's type should match one of the following values. The corresponding value will be used as the icon identifier:

- **Food & Drink**: "utensils", "coffee", "cocktail", "beer"
- **Museum**: "landmark"
- **Entertainment**: "film", "music", "theater-masks", "landmark", "paw", "ferris-wheel", "dice"
- **Outdoor Activities**: "hiking", "campground", "fish", "bicycle", "umbrella-beach", "tree"
- **Sports & Fitness**: "dumbbell", "spa", "running", "swimmer", "table-tennis", "futbol", "basketball-ball"
- **Shopping**: "shopping-bag", "shopping-cart", "store", "store-alt"
- **Travel**: "plane", "train", "car", "ship"
- **Education**: "chalkboard-teacher", "tools", "user-graduate", "users"
- **Wellness**: "hands", "om"
- **Social**: "glass-cheers", "handshake", "network-wired"
- **Work**: "briefcase", "laptop", "chart-line"`;
};

export default journeyCmd;
