import React, { useState, useEffect } from 'react';
const apiKey = 'S7A-KlzAW3rU8ZBTRMo6BxnKP40l8-HRcMwBEWk3GVo'; // Replace with your actual API key
const DoctorNearMe = () => {
  const [hospitals, setHospitals] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
    const [isLocating, setIsLocating] = useState(false); // State for location fetching
    const [num, setNum] = useState('+919152987821')
  
    const fetchHospitals = async (latitude, longitude) => {
      try {
        const url = `https://discover.search.hereapi.com/v1/discover?apikey=${apiKey}&at=${latitude},${longitude}&q=hospitals&limit=5`;
        const response = await fetch(url);
        const data = await response.json();
        
        const contactNumbers = data.items.reduce((acc, hospital) => {
          // Check if contacts and phone exist
          if (hospital.contacts && hospital.contacts[0] && hospital.contacts[0].phone) {
            hospital.contacts[0].phone.forEach((contact) => {
              acc.push(contact.value);
            });
          }
          return acc;
        }, []);
    
        console.log(contactNumbers);
        setNum(contactNumbers[0] || '');  // Safely set num if there's no contact number
        setHospitals(data.items);
      } catch (error) {
        console.error(error);
        setErrorMessage('Error fetching hospitals.');
      }
    };
    
    const getLocation = async () => {
      setIsLocating(true); // Set locating state to true
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            fetchHospitals(latitude, longitude);
            setIsLocating(false); // Set locating state to false after successful fetch
          },
          (error) => {
            console.error(error);
            setErrorMessage('Error fetching location.');
            setIsLocating(false); // Set locating state to false after error
          }
        );
      } else {
        setErrorMessage('Geolocation is not supported by this browser.');
        setIsLocating(false); // Set locating state to false if not supported
      }
    };
  
    const dialEmergency = () => {
      // Check for browser support for Phone Dialer API
      if (navigator.dialer) {
        navigator.dialer.dial(num); // Replace 'emergency' with actual emergency number
      } else {
        // Fallback for non-supporting browsers (open emergency number in dial pad)
        window.location.href = 'tel:'+num; // Replace 'emergency' with actual emergency number
      }
    };
  
    useEffect(() => {
      getLocation();
    }, []); // Empty dependency array to fetch location only once on component mount
  
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
      {isLocating && <p>Locating your position...</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {hospitals.length > 0 && (
        <ul>
          {hospitals.map((hospital) => (
            <div class="column is-one-half"><li key={hospital.id} className="hospital">
              <h2>{hospital.title}</h2>
              {hospital.address && <p>{hospital.address.label}</p>}
              {hospital.phone && <p>Phone: {hospital.phone}</p>}
              {hospital.href && <a href={hospital.href}>Contact Hospital</a>}
            </li>
            </div>
          ))}
        </ul>
      )}
      <div class="column is-one-half">
      <button class="button is-info is-inverted" onClick={dialEmergency}>Call Emergency Services</button>
      </div>
      
      <button class="button is-info is-inverted" onClick={getLocation} disabled={isLocating}>
        {isLocating ? 'Locating...' : 'Find Hospitals Near Me'}
      </button> 
        {/* <div class="column is-one-half"> 
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
                <img src="https://png.pngtree.com/png-clipart/20230918/ourmid/pngtree-photo-men-doctor-physician-chest-smiling-png-image_10132895.png" alt="Kidney" /> */}
              {/* </figure>
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
        </div> */}
      </div>
    </div>
  </section>
</div>
  );
};

export default DoctorNearMe;
