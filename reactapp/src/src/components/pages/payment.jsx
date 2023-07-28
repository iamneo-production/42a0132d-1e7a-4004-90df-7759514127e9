import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './payment.css';
import { clearCart } from '../../controller/action';

const PaymentPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartReducer.carts);

  const handlePayment = () => {
    // Simulate payment processing (Replace this with actual payment processing code)
    setTimeout(() => {
      alert('Payment successful!');
      dispatch({ type: clearCart }); // Clear the cart after successful payment
    }, 1500);
  };

  // Function to calculate the total price of the cart items
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.qty, 0);
  };

  const totalStyle = {
    fontSize: '30px',
    fontWeight: 'bold',
    textAlign: 'right',
    marginTop: '20px',
    marginBottom: '30px',
    backgroundColor: '#f0f0f0',
    padding: '10px',
    borderRadius: '4px',
  };

  const itemContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  };

  const imageStyle = {
    width: '100px',
    height: '100px',
    marginRight: '20px',
  };

  return (
    <div>
      <h2>Payment Page</h2>
      <div>
        <div className='orderheading'>
          <h3>Order Summary:</h3>
        </div>
        <div className='ul'>
          <ul>
            {cartItems.map((item) => (
              <div key={item.id} style={itemContainerStyle}>
                <img src={item.image} alt={item.title} style={imageStyle} />
                <div>
                  <h4>{item.title}</h4>
                  <p>Price: ${item.price}</p>
                  <p>Quantity: {item.qty}</p>
                  <p>Total Price: ${item.price * item.qty}</p>
                </div>
              </div>
            ))}
          </ul>
        </div>
        <p style={totalStyle}>Total: ${calculateTotalPrice().toFixed(2)}</p>
      </div>
      <div className='paynow'>
        <button onClick={handlePayment}>Pay Now</button>
      </div>
      <div className='goback'>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
};

export default PaymentPage;
