import React, { useState } from 'react';
import { BiBorderLeft } from 'react-icons/bi';
import axios from 'axios';

const Appoint = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Perform booking submission logic here
    console.log('Booking submitted!');
    // Reset form fields
    setName('');
    setEmail('');
    setPhone('');
    setService('');
    setDate('');
    setTime('');
  };
  /*axios.post('/api/appointments', appointmentData)
  .then((response) => {
    console.log('Booking submitted:', response.data);
    // Reset form fields after successful submission
    setName('');
    setEmail('');
    setPhone('');
    setService('');
    setDate('');
    setTime('');
  })
  .catch((error) => {
    console.error('Error submitting booking:', error);
  });*/



  return (
    <div>
     
      <div>
        <h2 style={{ fontWeight: 'bold', textAlign: 'center' }}>BOOK APPOINTMENT</h2>
      </div>

      <div
        className='bookBody'
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
       
          <form onSubmit={handleSubmit}>
      
            <label htmlFor="name">Name:</label><br />
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '5px' }}
            />
            <br />

            <label htmlFor="email">Email:</label><br />
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '5px' }}
            />
            <br />

            <label htmlFor="phone">Phone:</label><br />
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '5px' }}
            />
            <br />

            <label htmlFor="service">Service:</label><br />
            <input
              type="text"
              id="service"
              value={service}
              onChange={(e) => setService(e.target.value)}
              required
              style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '5px' }}
            />
            <br />

            <label htmlFor="date">Date:</label><br />
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '5px' }}
            />
            <br />

            <label htmlFor="time">Time:</label><br />
            <input
              type="time"
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
              style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '5px' }}
            />
            <br />

            <div style={{ marginRight: '200px' }}>
              <button
                type="submit"
                style={{
                  backgroundColor: '#007bff',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  padding: '10px 20px',
                  cursor: 'pointer',
                }}
              >
                Submit
              </button>
              <br />
            </div>
          </form>
        </div>
      </div>
    
  );
};

export default Appoint;
