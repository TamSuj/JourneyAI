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
  const [totalEstimation, setTotalEstimation] = useState(null);
  const [itinerary, setItinerary] = useState([]);


  //Add each activity into the whole itinerary
  const addNewActivity = (activity, dayIndex, activityIndex) => {
    //update itinerary
    setItinerary(prevItinerary => {
      //recieve current itinerary
      const updatedItinerary = [...prevItinerary];
  
      if (dayIndex >= 0 && dayIndex < updatedItinerary.length) {
        // Ensure activities are added at the correct position
        const dayActivities = [...updatedItinerary[dayIndex].activities];
        dayActivities[activityIndex] = activity;
        updatedItinerary[dayIndex].activities = dayActivities;
      }
  
      return updatedItinerary;
    });
  };
  
  //get number of saved plan to create planId
  const getSavedPlanCount = async (userUid) => {
    //retrieve the doc reference base on Userid
    const userDocRef = doc(db, "users", userUid);

    //get a snapshot/infor about the doc
    const userDocSnap = await getDoc(userDocRef);
    if (userDocSnap.exists()) {
      //access the data array
      const userData = userDocSnap.data();
      const savedPlanCount = userData.saved_plans ? userData.saved_plans.length : 0;
      // console.log(`Number of saved plans for user ${userUid}:`, savedPlanCount);
      return savedPlanCount;
    } else {
        console.log("No such document!");
        return 0;
    }
  }

  //Save the new itinerary into the associate doc
  const savePlan = async () => {    
    // console.log("Itinerary that is going to get saved");
    // console.log(itinerary);

    //Check count to get new planId
    const savedPlanCount = await getSavedPlanCount(userUid);

    //Formatted Data to add to Firebase
    const newPlan = {
        city: city,
        duration: duration,
        itinerary: itinerary, // Correctly use the `itinerary` state
        tripname: tripName,
        plan_id: savedPlanCount + 1,
        estimated_total: totalEstimation
    };

    //Refer to the doc with specific userUid
    const userRef = doc(db, "users", userUid);

    try { 
      //Gain access to the Doc
      const userDoc = await getDoc(userRef);
      if(!userDoc.exists()){
        // Create a new document if it doesn't exist
        await setDoc(userRef, {
            saved_plans: [newPlan],  // Initialize with the new plan
        });
        // console.log("User document created with new plan");
      } else {
        // Document exists, add new plan to the existing document
        await updateDoc(userRef, {
            saved_plans: arrayUnion(newPlan)
        });
        // console.log("New plan added to existing document");
      }
      // Resetting the states after saving
      setCity(null);
      setDuration(null);
      setTripName(null);
      setTotalEstimation(null);
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
        totalEstimation, setTotalEstimation,
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
