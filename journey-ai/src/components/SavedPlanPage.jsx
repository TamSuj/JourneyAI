import React, { useEffect, useState } from 'react';
import SavedPlanCard from "./SavedPlanCard.jsx";
import Heading from "./Heading.jsx"

function SavedPlanPage() {
  const [savedPlan, setSavedPlan] = useState(null);
  const [userId, setUserId] = useState(null);
  useEffect(() => {
    const userID = '1'; // Should be a string to match your server logic

    const fetchDataById = async () => {
      try {
        const response = await fetch(`/api/saved_plan/${userID}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setSavedPlan(data);
        setUserId(userID)
      } catch (error) {
        console.error(error);
      }
    };
    fetchDataById();
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

            {savedPlan.saved_plan && savedPlan.saved_plan.length > 0 ? (
                savedPlan.saved_plan.map(plan => (
                  <div key={plan.plan_id}>
                    <SavedPlanCard tripname={plan.tripname} city={plan.city} days={plan.duration} userId={userId} planId={plan.plan_id}/>
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
