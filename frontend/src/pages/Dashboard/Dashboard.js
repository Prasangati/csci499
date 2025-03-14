import React from "react";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";


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
      <Avatar className="user-profile" /> // need to click so user can edit profile/log out
      </nav>
      // How do I fetch data from the backend?


   </div>
       )
}


export default Dashboard;
