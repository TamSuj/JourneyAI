import React, { useEffect, useState } from 'react';
import SavedPlanCard from "../components/SavedPlanCard.jsx";
import Heading from "../components/Heading.jsx"
import { db } from '../firebase/firebase.js';
import { collection, doc, getDocs, getDoc} from 'firebase/firestore';


function SavedPlanPage() {
  const [savedPlan, setSavedPlan] = useState(null);
  const [userId, setUserId] = useState(null);

  // Function to fetch user's saved plans by userId
  const fetchUserSavedPlansById = async (userId) => {
    try {
        // Reference to the user's document
        const userDocRef = doc(db, "users", userId);
        
        // Fetch the document
        const userDoc = await getDoc(userDocRef);
        
        if (userDoc.exists()) {
            // Document data
            console.log("User Data:", userDoc.data().saved_plans);
        } else {
            console.log("No such document!");
        }

        return userDoc.data();
    } catch (error) {
        console.error("Error fetching user document:", error);
    }
};




  useEffect(() => {
    const fetchData = async () => {
      const FirebaseuserID = 'CcWfiQnbF3U58cGm19oP'; // Should be a string to match your server logic
      const data =  await fetchUserSavedPlansById(FirebaseuserID);
      setSavedPlan(data);
      setUserId(FirebaseuserID);
    }
    // const userID = '1';
    // const fetchDataById = async () => {
    //   try {
    //     const response = await fetch(`/api/saved_plan/${userID}`);
    //     if (!response.ok) {
    //       throw new Error(`HTTP error! status: ${response.status}`);
    //     }

    //     const data = await response.json();
    //     setSavedPlan(data);
    //     setUserId(userID)
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };
    // fetchDataById();
    fetchData();
  }, []);

  if (!savedPlan) {
    return <p>Loading...</p>; // Show a loading state while data is being fetched
  }

  return (
    <div className='flex flex-col pt-10 justify-center'>
      <Heading className=""/>

      <div className='flex flex-col pt-36'>
          <div className='flex flex-col'>
            <div className='flex text-4xl tracking-tight text-gray-900 sm:text-4xl justify-center'>
              Saved Plans
            </div>

            <div className='flex justify-center'>
              <p className='text-gray-900 tracking-tight pt-2'>Find your previous itinerary here</p>
            </div>
          </div>
              
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mx-auto max-w-screen-lg py-20'>

            {savedPlan.saved_plans && savedPlan.saved_plans.length > 0 ? (
                savedPlan.saved_plans.map(plan => (
                  <div key={plan.plan_id}>
                    <SavedPlanCard tripname={plan.tripname} city={plan.city} days={plan.duration} userId={userId} planId={plan.plan_id} saved_plans_data={savedPlan.saved_plans}/>
                    {/* Display other plan details */} 
                  </div>
              ))
            ) : (
              <p>No saved plans found.</p>
            )}
          </div>
      </div>

    </div>
  );
}

export default SavedPlanPage;
