import React, { useState } from "react";
import "./Dashboard.css";
//import { Avatar } from "../../components/ui/Avatar";
//import { Button } from "../../components/ui/Button";



function Dashboard() {
   const [activeTab, setActiveTab] = useState("Journal");
   // need to figure out how to fetch data from the backend based on the database being used
   return (

   // features needed: nav bar, sections: journal entries, progress tracking, etc
   // nav bar needs to be able to switch bw the diff parts of our app
   <div className="dashboard-container">
 {/* nav bar */}
      <nav className="nav-bar">
        <div className="dashboard-buttons">
            <button className="outline-button">Journal</button>
            <button className="outline-button">Progress</button>
            <button className="outline-button">Resources</button>
        </div>
        <img 
            src="https://via.placeholder.com/50" 
            alt="User Profile" 
            className="user-profile"
        />
        {/* User can click this image to edit profile/log out */}
    </nav>
</div>
       )
}


export default Dashboard;
