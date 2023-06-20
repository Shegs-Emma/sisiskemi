import React from 'react';
import { Link } from 'react-router-dom';
import InputBox from '../InputBox';
import InputCheckboxReverse from '../InputBox/InputCheckboxReverse';

const ContactForm = () => {
  return (
    <div>
      <div>
        <div>
          <h2>Contact Information</h2>
          <div>
            <p>Already have an account?</p>
            <Link>Log in</Link>
          </div>
        </div>
        {/* <InputBox placeholder='Email Address' />
        <InputCheckboxReverse title='I agree to receive news and offers' /> */}
      </div>
      <div>
        <h2>Shipping Address</h2>
        <div>
          {/* <InputBox placeholder='First Name' />
          <InputBox placeholder='Last Name' /> */}
        </div>
        {/* <InputBox classname='Address' />
        <InputBox classname='Town/city' />
        <InputBox classname='Postal code' /> */}
        <button>Continue to Shipping</button>
      </div>
    </div>
  );
};

export default ContactForm;
