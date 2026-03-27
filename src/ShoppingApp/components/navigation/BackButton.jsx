import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import "./BackButton.css";

function BackButton() {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1); // go to previous page
    };

    return (
        <div className="back-btn" onClick={handleBack}>
            <ArrowLeft size={24} />
        </div>
    );
}

export default BackButton;