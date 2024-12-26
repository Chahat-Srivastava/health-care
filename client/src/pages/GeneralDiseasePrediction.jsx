import React, { useState } from 'react';
import '../style/generaldiseaseprediction.css';

const GeneralDiseasePrediction = () => {
  const [symptoms, setSymptoms] = useState('');
  const [showPrediction, setShowPrediction] = useState(false);

  const handleInputChange = (event) => {
    setSymptoms(event.target.value);
  };

  const handlePredictClick = () => {
    // Simulate prediction logic (replace with actual prediction function)
    // For example, you could perform simple string matching or 
    // use a basic rule-based system.

    // For this example, we'll simply set showPrediction to true
    setShowPrediction(true); 
  };

  return (
    <div className="hero is-royal-blue"> 
      <section className="section">
        <div className="container">
          <div className="column has-text-centered">
            <h1 className="title has-text-white is-1">General Disease</h1>
          </div>
          <div className="field has-addons">
            <div className="control is-expanded">
              <input className="input" type="text" placeholder="Enter your symptoms" 
                     value={symptoms} onChange={handleInputChange} />
            </div>
            <div className="control">
              <button className="button is-my-custom-blue" onClick={handlePredictClick}>Predict</button>
            </div>
          </div>

          {showPrediction && ( 
            <div className="box">
              <div className="columns">
                <div className="column is-half">
                  <figure className="image is-3by3">
                    <img src="https://media.istockphoto.com/id/843333778/vector/heartbeat-line-icon-medicine-and-healthcare-pulse-sign-vector-graphics-a-linear-pattern-on-a.jpg?s=1024x1024&w=is&k=20&c=5CdEP7GCUB3q8wJik8YHOMESrI7xMs6PcEDwLJzWIwQ=" alt="heart Icon" /> 
                  </figure>
                </div>
                <div className="column">
                  <h2 className="title is-4">Predicted Disease</h2> 
                  <p><strong>Disease Description</strong></p>
                  <p><strong>Medication</strong></p>
                  <p>Details of medication</p>
                  <p><strong>Precautions</strong></p>
                  <p>Details of precautions</p>
                  <p><strong>Workouts</strong></p>
                  <p>Details of workouts</p>
                  <p><strong>Diets</strong></p>
                  <p>Details of diet</p>
                
                </div>
              </div>
                  <div className="has-text-right">
                <a className="button  is-my-custom-blue">Full Report</a>
              </div>
            </div>
          )}

          
        </div>
      </section>
    </div>
  );
};

export default GeneralDiseasePrediction;
