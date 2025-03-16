import React, { useState, useEffect } from "react";
import "./Dashboard.css";
//import { useAuthContext } from "../../context/AuthContext"; 
import LogOut from "../../components/Auth/LogOut"; //logout Button

function Dashboard() {
   const [activeTab, setActiveTab] = useState("Journal");
   //const { user } = useAuthContext(); 
   const [sidebarOpen, setSidebarOpen] = useState(true); 
   const [entries, setEntries] = useState([]); // storing journal entries
   const [newEntry, setNewEntry] = useState(""); // current input 
   const [showEntries, setShowEntries] = useState(false); // toggle past entries

   const handleInputChange = (e) => {
      setNewEntry(e.target.value);
   };

   const toggleSidebar = () => {
      setSidebarOpen(!sidebarOpen);
   };
   

   const quotes = [
      "“Be not afraid of growing slowly, be afraid only of standing still.” — Chinese Proverb",
      "“The only person you are destined to become is the person you decide to be.” — Ralph Waldo Emerson",
      "“Do your best until you know better. Then when you know better, do better.” — Maya Angelou",
      "Strive for progress, not perfection.  ― David Perlmutter",
      "“Your future is hidden in your daily routine.” — Mike Murdock", 
      "“The difference between who you are and who you want to be is what you do.”",
      "“We are what we repeatedly do. Excellence, then, is not an act, but a habit.” — Will Durant"
   ];
   const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);


// Change quote only when the tab changes
useEffect(() => {
   setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
}, [activeTab]); // Runs only when activeTab changes

   const handleSaveEntry = () => {
      if (newEntry.trim() !== "") {
         const entry = {
            id: entries.length + 1,
            text: newEntry,
            date: new Date().toLocaleString(),
         };
         setEntries([entry, ...entries]);
         setNewEntry(""); 
      }
   };

   return (
      <div className="dashboard">
         {/* Sidebar */}
         <aside className={`sidebar ${sidebarOpen ? "" : "collapsed"}`}>
            <img src="/logo.png" alt="spooons Logo" className="sp-logo" />
            <ul>
               <li className={activeTab === "Journal" ? "active" : ""} onClick={() => setActiveTab("Journal")}>Journal</li>
               <li className={activeTab === "Progress" ? "active" : ""} onClick={() => setActiveTab("Progress")}>Progress</li>
               <li className={activeTab === "Resources" ? "active" : ""} onClick={() => setActiveTab("Resources")}>Resources</li>
            </ul>
            <div className="logout-container">
               <LogOut />
            </div>
         </aside>

         {/* Arrow Button */}
         <button className={`sidebar-toggle ${sidebarOpen ? "" : "collapsed"}`} onClick={toggleSidebar}>
            {sidebarOpen ? "◄" : "►"}
         </button>

         {/* Main Content */}
         <main className="main-content">
            <header className="dashboard-header">
            <h1 className="greeting">{quotes[currentQuoteIndex]}</h1>
            </header>

            <section className="dashboard-content"> 
               {/* Journal Tab */}
               {activeTab === "Journal" && (
                  <div className="journal-container">
                     {!showEntries ? (
                        <>
                           {/* Input Box */}
                           <div className="journal-input-box">
                              <textarea
                                 className="journal-input"
                                 placeholder="Write your thoughts ..."
                                 value={newEntry}
                                 onChange={handleInputChange}
                              />
                              <button className="save-btn" onClick={handleSaveEntry}>Save Entry</button>
                           </div>
                           <button className="view-entries-btn" onClick={() => setShowEntries(true)}>View Past Entries</button>
                        </>
                     ) : (
                        <>
                           {/* Past Entries */}
                           <h3 className="entries-title">Past Journal Entries</h3>
                           <div className="entries-list">
                              {entries.length > 0 ? (
                                 entries.map((entry) => (
                                    <div key={entry.id} className="entry-card">
                                       <span className="entry-date">{entry.date}</span>
                                       <p className="entry-text">{entry.text}</p>
                                    </div>
                                 ))
                              ) : (
                                 <p className="no-entries">No past entries yet.</p>
                              )}
                           </div>
                           <button className="back-btn" onClick={() => setShowEntries(false)}>Back to Journal</button>
                        </>
                     )}
                  </div>
               )}

               {/* Progress Tab */}
               {activeTab === "Progress" && <p>Track your progress here</p>}

               {/* Resources Tab */}
               {activeTab === "Resources" && <p>Personalized mental health resources</p>}
            </section>
         </main>
      </div>
   );
}

export default Dashboard;