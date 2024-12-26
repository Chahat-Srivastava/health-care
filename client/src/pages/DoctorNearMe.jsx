import React from 'react';

const DoctorNearMe = () => {
  return (
    <div class="hero is-fullheight is-royal-blue"> 
  <section class="section">
    <div class="container">
      <div className="column has-text-centered">
        <h1 className="title has-text-white is-1">Doctor Near Me</h1> 
      </div>
      <br/>
      <br/>
      <br/>
      <div class="columns is-multiline is-vcentered"> 
        <div class="column is-one-half"> 
          <a href="#" class="button  is-fullwidth">
            <div class="box has-text-centered">
              <figure class="image is-128x128"> 
                <img src="https://i.pinimg.com/736x/5b/a1/a3/5ba1a398ac0aa7fe01480166fd2b818f.jpg" alt="Breast Cancer" /> 
              </figure>
              <p>Dr. Ankur Sen</p>
            </div>
          </a>
        </div>

        <div class="column is-one-half"> 
          <a href="#" class="button is-fullwidth">
            <div class="box has-text-centered">
              <figure class="image is-128x128">
                <img src="https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-young-afro-professional-doctor-png-image_10148632.png" alt="Diabetes" />
              </figure>
              <p>Dr. Ahmad Khan</p>
            </div>
          </a>
        </div>

        <div class="column is-one-half"> 
          <a href="#" class="button is-fullwidth">
            <div class="box has-text-centered">
              <figure class="image is-128x128">
                <img src="https://png.pngtree.com/png-clipart/20230918/ourmid/pngtree-photo-men-doctor-physician-chest-smiling-png-image_10132895.png" alt="Kidney" />
              </figure>
              <p>Dr. Ravi Sen</p>
            </div>
          </a>
        </div>

        <div class="column is-one-half"> 
          <a href="#" class="button is-fullwidth">
            <div class="box has-text-centered">
              <figure class="image is-128x128">
                <img src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsb2ZmaWNlMV9waG90b2dyYXBoeV9vZl9hbl9zb3V0aF9pbmRpYW5fd29tZW5fYXNfYV9kb2N0b19kMzAxMDM3Zi03MDUzLTQxNDAtYmYyZS1lZDFlYWE0YTM3NDRfMS5qcGc.jpg" alt="Parkinson's" />
              </figure>
              <p>Dr. Heena</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</div>
  );
};

export default DoctorNearMe;
