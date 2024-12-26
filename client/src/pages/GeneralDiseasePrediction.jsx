import React from 'react';
import '../style/generaldiseaseprediction.css'

const GeneralDiseasePrediction = () => {
  return (
    <div class="hero is-royal-blue">
        <section class="section">
          <div class="container">
            <div class="field has-addons">
              <div class="control is-expanded">
                <input class="input" type="text" placeholder="Enter your symptoms"/>
              </div>
              <div class="control">
                <button class="button is-my-custom-blue">Predict</button>
              </div>
            </div>

            <div class="box">
              <div class="columns">
                <div class="column is-one-third">
                  <figure class="image is-128x128">
                    <img src="shield-icon.png" alt="Shield Icon"/> 
                  </figure>
                </div>
                <div class="column">
                  <h2 class="title is-4">Predicted Disease</h2>
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
            </div>

            <div class="has-text-right">
              <a class="button is-large is-my-custom-blue">Full Report</a>
  
            </div>
          </div>
        </section>
    </div>
  );
};

export default GeneralDiseasePrediction;
