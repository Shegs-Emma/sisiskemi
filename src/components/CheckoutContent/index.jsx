import React from 'react';
import OrderSummary from './OrderSummary';
import ContactForm from './ContactForm';
import Breadcrumbs from '../Breadcrumbs';

const CheckoutContent = () => {
  return (
    <div>
      <OrderSummary />
      <Breadcrumbs />
      <ContactForm />
    </div>
  );
};

export default CheckoutContent;
