import React, { createContext, useContext, useState } from 'react';
import {doc, updateDoc, arrayUnion, arrayRemove, getDoc, setDoc} from "firebase/firestore"
import { db } from "./firebase/firebase.js"
// Create a UserContext
const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
  const [userUid, setUserUid] = useState(null);
  const [city, setCity] = useState(null);
  const [duration, setDuration] = useState(null);
  const [tripName, setTripName] = useState(null);
  const [itinerary, setItinerary] = useState([]);
  const [activities, setActivities] = useState([]);
  // const [newActivity, setNewActivity] = useState(null);



const addNewActivity = (activity) => {
    console.log("Activity to add:", activity); // Check if activity is correctly passed
    // Assuming activities is a state variable holding the list of activities
    setActivities((prevActivities) => [...prevActivities, activity]);
};

  //Reset activity
  const resetActivity = () => {
    setActivities([]);
  }

  //Save a new plan
  const savePlan = async () => {
    console.log("Activities list after add: ", activities);
    
    const newPlan = {
        city: city,
        duration: duration,
        itinerary: [...itinerary, {activities}],
        tripname: tripName
    };

    const userRef = doc(db, "users", userUid);

    try { 
      const userDoc = await getDoc(userRef);
      if(!userDoc.exists()){
          // Create a new document if it doesn't exist
        await setDoc(userRef, {
            saved_plans: [newPlan],  // Initialize with the new plan
        });
        console.log("User document created with new plan");
      } else {
        // Document exists, add new plan to the existing document
        await updateDoc(userRef, {
            saved_plans: arrayUnion(newPlan)
        });
        console.log("New plan added to existing document");
      }
      // Resetting the states after saving
      setCity(null);
      setDuration(null);
      setTripName(null);
      setItinerary([]);
      // setNewActivity(null);
      resetActivity();  // Clear activities after saving the plan
    } catch (error) {
      console.error("Error saving plan:", error);
    }
  }

  return (
    <UserContext.Provider value={{
        userUid, setUserUid,
        city, setCity,
        duration, setDuration,
        tripName, setTripName,
        itinerary, setItinerary,
        activities, setActivities,
        addNewActivity, savePlan,
        // setNewActivity
      }}>
        {children}
      </UserContext.Provider>
  );
};

// Create a custom hook to use the UserContext
export const useUser = () => {
  return useContext(UserContext);
};

// saved_plans : [
//     {
//         city: "Paris", yes
//         duration: 4, yes
//         tripName: "paris day trip", yes
//         itinerary : [
//             {
//                 activities: [
//                 {
//                     location_name: 'Louvre Museum',
//                     type: 'landmark',
//                     duration: '9am - 12pm',
//                     description: 'Explore beautiful gardens, art exhibits, and historical manuscripts.',
//                     place_detail: {
//                     location: '[48.860716976300566, 2.3376654576711653]',
//                     place_id: 'ChIJD3uTd9hx5kcR1IQvGfr8dbk',
//                     photo_url: 'https://maps.googleapis.com/maps/api/place/photo?...',
//                     price_level: 4,
//                     rating: 5,
//                     formatted_address: '71 Rue Saint-Jacques, 75001 Paris, France',
//                     formatted_phone_number: '01 40 20 53 17',
//                     website: 'https://www.louvre.fr/',
//                     opening_hours: {
//                         weekday_text: [
//                         'Monday: 9:00 AM – 6:00 PM',
//                         'Tuesday: Closed',
//                         'Wednesday: 9:00 AM – 9:00 PM',
//                         'Thursday: 9:00 AM – 6:00 PM',
//                         'Friday: 9:00 AM – 9:00 PM',
//                         'Saturday: 9:00 AM – 6:00 PM',
//                         'Sunday: 9:00 AM – 6:00 PM',
//                         ],
//                     },
//                     reviews: [
//                         {
//                         rating: 5,
//                         relative_time_description: 'a week ago',
//                         text: 'Visiting the Louvre and seeing the Mona Lisa has always been one thing on my bucket list',
//                         },
//                     ],
//                     }
//                 }
//             ] 
//             }
//         ]
//     }
// ]




  
