import React, { useState } from 'react';
import FormSummary from './components/FormSummary';
import './App.css';
import FormFields from './components/FormFields';

function App() {
    const [submittedData, setSubmittedData] = useState(null);

    const handleFormSubmit = (data) => {
        setSubmittedData(data);
    };

    const handleCloseModal = () => {
        setSubmittedData(null);
    };

    return (
        <div className="App">
            <h1>Event Registration Form</h1>
            <FormFields onSubmit={handleFormSubmit} />
            {submittedData && (
                <>
                    <div className="blur" />
                    <FormSummary formData={submittedData} onClose={handleCloseModal} />
                </>
            )}
        </div>
    );
}

export default App;
