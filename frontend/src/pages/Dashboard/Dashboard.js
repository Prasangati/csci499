import React, { useState } from "react";
import { useAuthContext } from "../../context/AuthContext"; 
import "./Dashboard.css";
import LogOut from "../../components/Auth/LogOut"; //logout Button
import Journal from "./Journal"; // journal component

function Dashboard() {
   const [activeTab, setActiveTab] = useState("Journal");
   const { user } = useAuthContext(); // greet user using auth context
  

   // const quotes = [
   //    "“Be not afraid of growing slowly, be afraid only of standing still.” — Chinese Proverb",
   //    "“The only person you are destined to become is the person you decide to be.” — Ralph Waldo Emerson",
   //    "“Do your best until you know better. Then when you know better, do better.” — Maya Angelou",
   //    "Strive for progress, not perfection.  ― David Perlmutter",
   //    "“Your future is hidden in your daily routine.” — Mike Murdock", 
   //    "“The difference between who you are and who you want to be is what you do.”",
   //    "“We are what we repeatedly do. Excellence, then, is not an act, but a habit.” — Will Durant"
   // ];
   // const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);


// // Change quote only when the tab changes
// useEffect(() => {
//    setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
// }, [activeTab]); 

   return (
      <div className="dashboard">
         {/* navbar */}
         <nav className="navbar">
            <img src="/logo.png" alt="spooons Logo" className="sp-logo" />
            <span className="greeting">Hello, {user?.name || "Guest"}!</span>
            <ul className="nav-links">
               <li className={activeTab === "Journal" ? "active" : ""} onClick={() => setActiveTab("Journal")}>Journal</li>
               <li className={activeTab === "Progress" ? "active" : ""} onClick={() => setActiveTab("Progress")}>Progress</li>
               <li className={activeTab === "Resources" ? "active" : ""} onClick={() => setActiveTab("Resources")}>Resources</li>
            </ul>
               <LogOut />
               </nav>


         {/* Main Content */}
         <main className="main-content">
            <section className="dashboard-content">
            {/* <h1 className="greeting">{quotes[currentQuoteIndex]}</h1> */}

      {/* journal tab */}
            
               {activeTab === "Journal" && <Journal />}
               {activeTab === "Progress" && <p>Track your progress here</p>}
               {activeTab === "Resources" && <p>Personalized mental health resources</p>}
            </section>
         </main>
      </div>
   );
}

export default Dashboard;