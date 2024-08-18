import React, { createContext, useContext, useState } from 'react';
import { doc, updateDoc, arrayUnion, setDoc, getDoc } from "firebase/firestore";
import { db } from "./firebase/firebase.js";

// Create a UserContext
const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
  const [userUid, setUserUid] = useState(null);
  const [city, setCity] = useState(null);
  const [duration, setDuration] = useState(null);
  const [tripName, setTripName] = useState(null);
  const [itinerary, setItinerary] = useState([]);

  const addNewActivity = (activity, dayIndex) => {
    setItinerary(prevItinerary => {
      // Create a copy of the previous itinerary
      const updatedItinerary = [...prevItinerary];
      
      // Ensure the dayIndex is within bounds
      if (dayIndex >= 0 && dayIndex < updatedItinerary.length) {
        // Add the new activity to the appropriate day's itinerary
        updatedItinerary[dayIndex].activities = [...(updatedItinerary[dayIndex].activities || []), activity];
      }
      
      return updatedItinerary;
    });
  };

  // const resetActivity = () => {
  //   setActivities([]);
  // }

  const savePlan = async () => {    
    const newPlan = {
        city: city,
        duration: duration,
        itinerary: itinerary, // Correctly use the `itinerary` state
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
      // resetActivity();  // Clear activities after saving the plan
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
        addNewActivity, savePlan,
      }}>
        {children}
    </UserContext.Provider>
  );
};

// Create a custom hook to use the UserContext
export const useUser = () => {
  return useContext(UserContext);
};
