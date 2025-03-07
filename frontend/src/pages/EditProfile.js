import React from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import "../App.css";
import "../EditProfile.css";

const EditProfile = () => {
    const navigate = useNavigate();
    return (
        <div className="edit-profile-container">
            <h1>Edit Profile</h1>
        </div>
    );
}