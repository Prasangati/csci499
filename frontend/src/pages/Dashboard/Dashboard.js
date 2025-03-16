import React, { useState } from "react";
import "./Dashboard.css";
import { useAuthContext } from "../../context/AuthContext"; 
import LogOut from "../../components/Auth/LogOut"; //logout Button

//import { Avatar } from "../../components/ui/Avatar";
//import { Button } from "../../components/ui/Button";



function Dashboard() {
   const [activeTab, setActiveTab] = useState("Journal");
   const { user } = useAuthContext(); 
   const [sidebarOpen, setSidebarOpen] = useState(true); 

   const toggleSidebar = () => {
      setSidebarOpen(!sidebarOpen);
   };
   const quotes = [
      "“Be not afraid of growing slowly, be afraid only of standing still.” — Chinese Proverb",
      "“The only person you are destined to become is the person you decide to be.” — Ralph Waldo Emerson ",
      "“Do your best until you know better. Then when you know better, do better.” — Maya Angelou ",
      "Strive for progress, not perfection.  ― David Perlmutter" ,
      "“Your future is hidden in your daily routine.” — Mike Murdock ", 
      "“The difference between who you are and who you want to be is what you do.”",
      "“We are what we repeatedly do. Excellence, then, is not an act, but a habit.” — Will Durant"


   ];
   
   const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

   return (


   <div className="dashboard">


 {/* nav bar */}

 <aside className={`sidebar ${sidebarOpen ? "" : "collapsed"}`}>
    <img src="/logo.png" alt="spooons Logo" className="sp-logo" />
 <ul>
                   <li className={activeTab === "Journal" ? "active" : ""} onClick={() => setActiveTab("Journal")}>Journal</li>
                   <li className={activeTab === "Progress" ? "active" : ""} onClick={() => setActiveTab("Progress")}>Progress</li>
                   <li className={activeTab === "Resources" ? "active" : ""} onClick={() => setActiveTab("Resources")}>Resources</li>
               </ul>

               <div className="logout-container">
               <LogOut /> </div>
           </aside>



    
      {/* an arrow shape button to open close sidebar  */}
      <button className={`sidebar-toggle ${sidebarOpen ? "" : "collapsed"}`} onClick={toggleSidebar}>
            {sidebarOpen ? "◄" : "►"}
         </button>

         <main className="main-content">



      <header className="dashboard-header">


   <h1 className="greeting">{randomQuote}</h1>               </header>

<section className="dashboard-content"> 

         {/* dynamic tabs area*/}
                {activeTab === "Journal" && <p>Journal entries</p>}
                {activeTab === "Progress" && <p>Track your progress here</p>}
                {activeTab === "Resources" && <p>Personalized mental health resources</p>}
                </section> </main>
               </div>
       

       );

      }
export default Dashboard;
