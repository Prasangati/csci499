import React, { useState } from "react";
import "./Dashboard.css";

function JournalEntries() {
  const [title, setTitle] = useState(""); // state for entry title
  const [entries, setEntries] = useState([]); // storing journal entries
  const [newEntry, setNewEntry] = useState(""); // current input 
  const [showEntries, setShowEntries] = useState(false); //  past entries

  //draft
  const handleSaveDraft = () => {
    if (title.trim() === "") {
      alert("Title is required to save.");
      return;
    }
    const draftEntry = {
      id: entries.length + 1,
      title,
      text: newEntry,
      date: new Date().toLocaleString(),
      status: "Draft",
    };
    setEntries([draftEntry, ...entries]);
    setTitle("");
    setNewEntry("");
  };
//submit entry

  const handleSendEntry = () => {
    if (title.trim() === "") {
      alert("Title is required to send.");
      return;
    }
    if (newEntry.trim() === "") {
      alert("Entry cannot be empty.");
      return;
    }
    const finalEntry = {
      id: entries.length + 1,
      title,
      text: newEntry,
      date: new Date().toLocaleString(),
      status: "Sent",
    };
    setEntries([finalEntry, ...entries]);
    setTitle("");
    setNewEntry("");
  };

  const handleInputChange = (e) => {
    setNewEntry(e.target.value);
  };

  return (
    <div className="journal-container">
      <nav className="journal-nav">
        <button
          className={!showEntries ? "active" : ""}
          onClick={() => setShowEntries(false)}
        >
          New Entry
        </button>
        <button
          className={showEntries ? "active" : ""}
          onClick={() => setShowEntries(true)}
        >
          Past Entries
        </button>
      </nav>

      {!showEntries ? (
        <>
          <input
            type="text"
            className="title-input"
            placeholder="Title *"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <div className="journal-input-box">
            <textarea
              className="journal-input"
              placeholder="Write your thoughts ..."
              value={newEntry}
              onChange={handleInputChange}
            />
          </div>
          <div className="button-group">
            <button className="save-draft-btn" onClick={handleSaveDraft}>
              Save as Draft
            </button>
            <button className="send-btn" onClick={handleSendEntry}>
              Send
            </button>
          </div>
        </>
      ) : (
        <>
          <h3 className="entries-title">Past Journal Entries</h3>
          <div className="entries-list">
            {entries.length > 0 ? (
              entries.map((entry) => (
                <div key={entry.id} className="entry-card">
                  <h4>{entry.title}</h4>
                  <span className="entry-date">
                    {entry.date} - <strong>{entry.status}</strong>
                  </span>
                  <p className="entry-text">{entry.text}</p>
                </div>
              ))
            ) : (
              <p className="no-entries">No past entries yet.</p>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default JournalEntries;
