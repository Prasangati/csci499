import React, { useState } from "react";
import "./Dashboard.css";
//import { Avatar } from "../../components/ui/Avatar";
//import { Button } from "../../components/ui/Button";



function Dashboard() {
   const [activeTab, setActiveTab] = useState("Journal");

   return (


   <div className="dashboard">

 {/* nav bar */}

 <aside className="sidebar">
               <h2>Dashboard</h2>
               <ul>
                   <li className={activeTab === "Journal" ? "active" : ""} onClick={() => setActiveTab("Journal")}>Journal</li>
                   <li className={activeTab === "Progress" ? "active" : ""} onClick={() => setActiveTab("Progress")}>Progress</li>
                   <li className={activeTab === "Resources" ? "active" : ""} onClick={() => setActiveTab("Resources")}>Resources</li>
               </ul>
           </aside>



      <main className="main-content">
      <header className="dashboard-header">
                   <h1 className="heading">Dashboard</h1>
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
           </header>



            {/*</div><button className="outline-button">Journal</button>*/}
            {/*<button className="outline-button">Progress</button>*/}
            {/*<button className="outline-button">Resources</button>*/}
{/*    
        <img 
            src="https://via.placeholder.com/50" 
            alt="User Profile" 
            className="user-profile"
        /> */}
        {/* User can click this image to edit profile/log out */}
<section className="dashboard-content"> 

         {/* dynamic tabs area*/}
                {activeTab === "Journal" && <p>Journal entries</p>}
                {activeTab === "Progress" && <p>Track your progress here</p>}
                {activeTab === "Resources" && <p> personalized mental health resources</p>}
                </section> </main>
               </div>
       

       );

      }
export default Dashboard;
