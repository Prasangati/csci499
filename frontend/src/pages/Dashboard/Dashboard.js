import React from "react";
import { Button } from '@/components/ui/button';

function Dashboard() {
   // need to figure out how to fetch data from the backend based on the database being used
   return (

   // features needed: nav bar, sections: journal entries, progress tracking, etc
   // nav bar needs to be able to switch bw the diff parts of our app
   <div className="dashboard-container">
      <h1>Dashboard After logging in</h1>
      // nav bar
      <nav className="nav-bar">
         <div className="dashboard-buttons">
            <Button variant ="outline">Journal</Button>
            <Button variant="outline">Progress</Button>
            <Button variant="outline">Resources</Button>
         </div>
       // need to click on user profile so user can edit profile/log out

      </nav>



   </div>
       )
}


export default Dashboard;
