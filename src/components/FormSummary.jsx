import React from 'react';
import './FormSummary.css';

const FormSummary = ({ formData, onClose }) => {
    if (!formData) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>Form Summary</h2>
                <p><strong>Name:</strong> {formData.name}</p>
                <p><strong>Email:</strong> {formData.email}</p>
                <p><strong>Age:</strong> {formData.age}</p>
                <p><strong>Attending with a guest:</strong> {formData.isAttendingWithGuest}</p>
                {formData.isAttendingWithGuest === 'Yes' && (
                    <p><strong>Guest Name:</strong> {formData.guestName}</p>
                )}
            </div>
        </div>
    );
};

export default FormSummary;
