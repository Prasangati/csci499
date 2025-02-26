
//To CLEARIFY: THIS IS NOT THE ACTUAL SET UP. CSS has not been seperated.
import React, { useState } from "react";

function App() {
    const [entries, setEntries] = useState([
        { id: 1, title: "Feeling Overwhelmed", content: "Work has been stressful, and I feel like I have no time for myself.", date: "2025-02-25" },
        { id: 2, title: "Productive Day", content: "Today I managed to complete my to-do list and felt really accomplished!", date: "2025-02-24" }
    ]);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [date, setDate] = useState("");

    const handleAddEntry = (e) => {
        e.preventDefault();
        if (!title || !content || !date) return;
        const newEntry = {
            id: entries.length + 1,
            title,
            content,
            date
        };
        setEntries([newEntry, ...entries]);
        setTitle("");
        setContent("");
        setDate("");
    };

    return (
        <div className="container">
            <div className="journal-box">
                <h2>My Journal</h2>

                <form onSubmit={handleAddEntry} className="journal-form">
                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="input-field"
                    />
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="input-field"
                    />
                    <textarea
                        placeholder="Write your thoughts here..."
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="textarea-field"
                    />
                    <button type="submit" className="submit-btn">Add Entry</button>
                </form>

                <div className="entries-container">
                    {entries.length === 0 ? (
                        <p className="no-entries">No journal entries yet. Start writing!</p>
                    ) : (
                        entries.map((entry) => (
                            <div key={entry.id} className="journal-entry">
                                <h3>{entry.title}</h3>
                                <p>{entry.content}</p>
                                <span className="entry-date">{entry.date}</span>
                            </div>
                        ))
                    )}
                </div>
            </div>

            {/* Inline CSS for now */}
            <style>{`
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                    font-family: 'Arial', sans-serif;
                }

                body {
                    background: linear-gradient(to bottom, #4A90E2, #904E95);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                }

                .container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 100%;
                }

                .journal-box {
                    background: white;
                    padding: 40px;
                    border-radius: 12px;
                    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
                    width: 550px;
                    transition: all 0.3s ease-in-out;
                    text-align: center;
                }

                .journal-box h2 {
                    color: #333;
                    margin-bottom: 20px;
                    font-size: 24px;
                }

                .journal-form {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }

                .input-field,
                .textarea-field {
                    width: 100%;
                    padding: 12px;
                    border: 1px solid #ddd;
                    border-radius: 6px;
                    font-size: 16px;
                    resize: none;
                }

                .input-field:focus,
                .textarea-field:focus {
                    border-color: #4A90E2;
                    outline: none;
                }

                .submit-btn {
                    padding: 14px;
                    border: none;
                    border-radius: 6px;
                    background-color: #4A90E2;
                    color: white;
                    font-size: 18px;
                    font-weight: bold;
                    cursor: pointer;
                    transition: background 0.3s ease;
                }

                .submit-btn:hover {
                    background-color: #357ABD;
                }

                .entries-container {
                    margin-top: 25px;
                }

                .journal-entry {
                    background: #f9f9f9;
                    padding: 18px;
                    border-radius: 6px;
                    margin-top: 12px;
                    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.15);
                    text-align: left;
                    position: relative;
                }

                .journal-entry h3 {
                    color: #333;
                    margin-bottom: 8px;
                }

                .journal-entry p {
                    color: #666;
                    font-size: 15px;
                }

                .entry-date {
                    font-size: 13px;
                    color: #888;
                    position: absolute;
                    bottom: 12px;
                    right: 20px;
                }

                .no-entries {
                    color: #666;
                    font-size: 15px;
                    text-align: center;
                    margin-top: 20px;
                }
            `}</style>
        </div>
    );
}

export default App;
