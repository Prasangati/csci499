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
      <h1 className="dashboard-heading">Dashboard</h1>

      <div className="tabs">
      <button 
               className={`tab-button ${activeTab === "Journal" ? "active" : ""}`} 
               onClick={() => setActiveTab("Journal")}
           >
               Journal
           </button>
           <button 
                       className={`tab-button ${activeTab === "Progress" ? "active" : ""}`} 
                       onClick={() => setActiveTab("Progress")}
                   >
                       Progress
                   </button>
                   <button 
                       className={`tab-button ${activeTab === "Resources" ? "active" : ""}`} 
                       onClick={() => setActiveTab("Resources")}
                   >
                       Resources
                   </button>
           </div>



            {/*</div><button className="outline-button">Journal</button>*/}
            {/*<button className="outline-button">Progress</button>*/}
            {/*<button className="outline-button">Resources</button>*/}
   
        <img 
            src="https://via.placeholder.com/50" 
            alt="User Profile" 
            className="user-profile"
        />
        {/* User can click this image to edit profile/log out */}
    </nav>
         {/* tabs*/}
         <div className="dashboard-content">
                {activeTab === "Journal" && <p>Journal entries</p>}
                {activeTab === "Progress" && <p>Track your progress here</p>}
                {activeTab === "Resources" && <p> personalized mental health resources</p>}
     
               </div>
               </div>

       );

      }
export default Dashboard;
