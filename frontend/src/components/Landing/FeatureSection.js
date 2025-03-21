import React from "react";
import "./FeatureSection.css";

function FeatureSection() {
    return (
        <section className="feature">
            <div className="feature-container">
                {/* Left Side - Image */}
                <div className="feature-image">
                    <img src="/illustration.png" alt="Illustration" />
                </div>

                {/* Right Side - Text Content */}
                <div className="feature-text">
                    <h2>Journaling Made Easy</h2>
                    <p>Write journal entries daily to track your thoughts and emotions.</p>
                </div>
            </div>
        </section>
    );
}

export default FeatureSection;
