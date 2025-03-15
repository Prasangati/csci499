import React, { useState } from "react";
import "./Dashboard.css";
import { useAuthContext } from "../../context/AuthContext"; 
import LogOut from "../../components/Auth/LogOut"; //logout Button

//import { Avatar } from "../../components/ui/Avatar";
//import { Button } from "../../components/ui/Button";



function Dashboard() {
   const [activeTab, setActiveTab] = useState("Journal");
   const { user } = useAuthContext(); 
      const [sidebarOpen, setSidebarOpen] = useState(true); // State to toggle sidebar


   return (


   <div className="dashboard">

 {/* nav bar */}

 <aside className="sidebar">
 <img src="/logo.png" alt="spooons Logo" className="sp-logo" />
 <ul>
                   <li className={activeTab === "Journal" ? "active" : ""} onClick={() => setActiveTab("Journal")}>Journal</li>
                   <li className={activeTab === "Progress" ? "active" : ""} onClick={() => setActiveTab("Progress")}>Progress</li>
                   <li className={activeTab === "Resources" ? "active" : ""} onClick={() => setActiveTab("Resources")}>Resources</li>
               </ul>

               <div className="logout-container">
               <LogOut /> </div>
           </aside>



      <main className="main-content">
      <header className="dashboard-header">

      <h1 className="greeting">Welcome, {user?.first_name || "User"}!</h1>
               </header>








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
