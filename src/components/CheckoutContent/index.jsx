import React from 'react';
import OrderSummary from './OrderSummary';
import ContactForm from './ContactForm';

const CheckoutContent = () => {
  return (
    <div>
      <OrderSummary />
      <ContactForm />
    </div>
  );
};

export default CheckoutContent;
