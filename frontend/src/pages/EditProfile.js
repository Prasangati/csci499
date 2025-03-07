import React from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import "../App.css";
import "../EditProfile.css";

const EditProfile = () => {
    const navigate = useNavigate();
    return (
        <div className="edit-profile-container">
            <form className="edit-profile-form">
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" placeholder="Enter your username"/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" placeholder="Enter your password"/>
                </div>
                <div className="form-group">
                    <label htmlFor="bio">Bio:</label>
                    <textarea id="bio" name="bio" placeholder="Write a short bio about yourself"></textarea>
                </div>
                <button type="submit" className="edit-profile-btn">Save Changes</button>
            </form>
        </div>
    );
}