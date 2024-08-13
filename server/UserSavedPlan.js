const data = {
    username: 'Jack',
    id: 1,
    saved_plan: [
      {
        plan_id: 1,
        tripname: 'Paris Day Trip',
        city: 'Paris',
        duration: 4,  //4 days in total
        itinerary: [
          {
            day: 1,
            activities: [
              {
                location_name: 'Louvre Museum',
                type: 'landmark',
                duration: '9am - 12pm',
                description: 'Explore beautiful gardens, art exhibits, and historical manuscripts.',
                place_detail: {
                  location: '[48.860716976300566, 2.3376654576711653]',
                  place_id: 'ChIJD3uTd9hx5kcR1IQvGfr8dbk',
                  photo_url: 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=175&maxheight=175&photo_reference=AelY_CvPpHMgkwOvCK6BMj_28bqjQjzZgzpUvMjrcM5gf7xS_Zj87_vMQc0FKY9_E6Qt5b0zh0lhG7NZCBYy9LQDh1IV83qppGsFaIcLJOb39iUWehVWx_1Xcz64DfzZFN1lB8LRK6tk8HZan5bY0xZs805uJWoRwE94MRd_igKvbV7xuLGe&key=AIzaSyCUGy6ckR2hcn__IZ4ckW5nGvaHUAL3DJQ',
                  price_level: 4,
                  rating: 5,
                  formatted_address: '71 Rue Saint-Jacques, 75001 Paris, France',
                  formatted_phone_number: '01 40 20 53 17',
                  website: 'https://www.louvre.fr/',
                  opening_hours: {
                    weekday_text: [
                      'Monday: 9:00 AM – 6:00 PM',
                      'Tuesday: Closed',
                      'Wednesday: 9:00 AM – 9:00 PM',
                      'Thursday: 9:00 AM – 6:00 PM',
                      'Friday: 9:00 AM – 9:00 PM',
                      'Saturday: 9:00 AM – 6:00 PM',
                      'Sunday: 9:00 AM – 6:00 PM',
                    ],
                  },
                  reviews: [
                    {
                      rating: 5,
                      relative_time_description: 'a week ago',
                      text: 'Visiting the louvre and seeing the Mona Lisa has always been one thing on my bucket list',
                    },
                  ],
                },
              },
            ],
          },
        ],
      },

      {
        plan_id: 2,
        tripname: 'Paris Day Trip',
        city: 'Paris',
        duration: 4,  //4 days in total
        itinerary: [
          {
            day: 1,
            activities: [
              {
                location_name: 'Louvre Museum',
                type: 'landmark',
                duration: '9am - 12pm',
                description: 'Explore beautiful gardens, art exhibits, and historical manuscripts.',
                place_detail: {
                  location: '[48.860716976300566, 2.3376654576711653]',
                  place_id: 'ChIJD3uTd9hx5kcR1IQvGfr8dbk',
                  photo_url: 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=175&maxheight=175&photo_reference=AelY_CvPpHMgkwOvCK6BMj_28bqjQjzZgzpUvMjrcM5gf7xS_Zj87_vMQc0FKY9_E6Qt5b0zh0lhG7NZCBYy9LQDh1IV83qppGsFaIcLJOb39iUWehVWx_1Xcz64DfzZFN1lB8LRK6tk8HZan5bY0xZs805uJWoRwE94MRd_igKvbV7xuLGe&key=AIzaSyCUGy6ckR2hcn__IZ4ckW5nGvaHUAL3DJQ',
                  price_level: 4,
                  rating: 5,
                  formatted_address: '71 Rue Saint-Jacques, 75001 Paris, France',
                  formatted_phone_number: '01 40 20 53 17',
                  website: 'https://www.louvre.fr/',
                  opening_hours: {
                    weekday_text: [
                      'Monday: 9:00 AM – 6:00 PM',
                      'Tuesday: Closed',
                      'Wednesday: 9:00 AM – 9:00 PM',
                      'Thursday: 9:00 AM – 6:00 PM',
                      'Friday: 9:00 AM – 9:00 PM',
                      'Saturday: 9:00 AM – 6:00 PM',
                      'Sunday: 9:00 AM – 6:00 PM',
                    ],
                  },
                  reviews: [
                    {
                      rating: 5,
                      relative_time_description: 'a week ago',
                      text: 'Visiting the louvre and seeing the Mona Lisa has always been one thing on my bucket list',
                    },
                  ],
                },
              },
            ],
          },
        ],
      },
      
      {
        plan_id: 3,
        tripname: 'Paris Day Trip',
        city: 'New York',
        duration: 4,  //4 days in total
        itinerary: [
          {
            day: 1,
            activities: [
              {
                location_name: 'Louvre Museum',
                type: 'landmark',
                duration: '9am - 12pm',
                description: 'Explore beautiful gardens, art exhibits, and historical manuscripts.',
                place_detail: {
                  location: '[48.860716976300566, 2.3376654576711653]',
                  place_id: 'ChIJD3uTd9hx5kcR1IQvGfr8dbk',
                  photo_url: 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=175&maxheight=175&photo_reference=AelY_CvPpHMgkwOvCK6BMj_28bqjQjzZgzpUvMjrcM5gf7xS_Zj87_vMQc0FKY9_E6Qt5b0zh0lhG7NZCBYy9LQDh1IV83qppGsFaIcLJOb39iUWehVWx_1Xcz64DfzZFN1lB8LRK6tk8HZan5bY0xZs805uJWoRwE94MRd_igKvbV7xuLGe&key=AIzaSyCUGy6ckR2hcn__IZ4ckW5nGvaHUAL3DJQ',
                  price_level: 4,
                  rating: 5,
                  formatted_address: '71 Rue Saint-Jacques, 75001 Paris, France',
                  formatted_phone_number: '01 40 20 53 17',
                  website: 'https://www.louvre.fr/',
                  opening_hours: {
                    weekday_text: [
                      'Monday: 9:00 AM – 6:00 PM',
                      'Tuesday: Closed',
                      'Wednesday: 9:00 AM – 9:00 PM',
                      'Thursday: 9:00 AM – 6:00 PM',
                      'Friday: 9:00 AM – 9:00 PM',
                      'Saturday: 9:00 AM – 6:00 PM',
                      'Sunday: 9:00 AM – 6:00 PM',
                    ],
                  },
                  reviews: [
                    {
                      rating: 5,
                      relative_time_description: 'a week ago',
                      text: 'Visiting the louvre and seeing the Mona Lisa has always been one thing on my bucket list',
                    },
                  ],
                },
              },
            ],
          },
        ],
      },
      
      {
        plan_id: 2,
        tripname: 'Paris Day Trip',
        city: 'Caribean',
        duration: 4,  //4 days in total
        itinerary: [
          {
            day: 1,
            activities: [
              {
                location_name: 'Louvre Museum',
                type: 'landmark',
                duration: '9am - 12pm',
                description: 'Explore beautiful gardens, art exhibits, and historical manuscripts.',
                place_detail: {
                  location: '[48.860716976300566, 2.3376654576711653]',
                  place_id: 'ChIJD3uTd9hx5kcR1IQvGfr8dbk',
                  photo_url: 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=175&maxheight=175&photo_reference=AelY_CvPpHMgkwOvCK6BMj_28bqjQjzZgzpUvMjrcM5gf7xS_Zj87_vMQc0FKY9_E6Qt5b0zh0lhG7NZCBYy9LQDh1IV83qppGsFaIcLJOb39iUWehVWx_1Xcz64DfzZFN1lB8LRK6tk8HZan5bY0xZs805uJWoRwE94MRd_igKvbV7xuLGe&key=AIzaSyCUGy6ckR2hcn__IZ4ckW5nGvaHUAL3DJQ',
                  price_level: 4,
                  rating: 5,
                  formatted_address: '71 Rue Saint-Jacques, 75001 Paris, France',
                  formatted_phone_number: '01 40 20 53 17',
                  website: 'https://www.louvre.fr/',
                  opening_hours: {
                    weekday_text: [
                      'Monday: 9:00 AM – 6:00 PM',
                      'Tuesday: Closed',
                      'Wednesday: 9:00 AM – 9:00 PM',
                      'Thursday: 9:00 AM – 6:00 PM',
                      'Friday: 9:00 AM – 9:00 PM',
                      'Saturday: 9:00 AM – 6:00 PM',
                      'Sunday: 9:00 AM – 6:00 PM',
                    ],
                  },
                  reviews: [
                    {
                      rating: 5,
                      relative_time_description: 'a week ago',
                      text: 'Visiting the louvre and seeing the Mona Lisa has always been one thing on my bucket list',
                    },
                  ],
                },
              },
            ],
          },
        ],
      },
      
    ],
  };
  
  export default data;
  

//users (Collection)
// │
// ├── uid1234 (Document)
// │   ├── username: "Jack"
// │   ├── email: "jack@example.com"
// │   └── saved_plans (Subcollection)
// │       ├── plan_id_1 (Document)
// │       │   ├── tripname: "Paris Day Trip"
// │       │   ├── city: "Paris"
// │       │   ├── duration: 4
// │       │   └── itinerary: [ ... ]
// │       └── plan_id_2 (Document)
// │           ├── tripname: "New York Getaway"
// │           ├── city: "New York"
// │           ├── duration: 3
// │           └── itinerary: [ ... ]
// │
// └── uid5678 (Document)
//     ├── username: "Jane"
//     ├── email: "jane@example.com"
//     └── saved_plans (Subcollection)
//         └── plan_id_1 (Document)
//             ├── tripname: "Tokyo Adventure"
//             ├── city: "Tokyo"
//             ├── duration: 7
//             └── itinerary: [ ... ]

