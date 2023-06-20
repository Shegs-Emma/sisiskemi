import React from 'react';
import ShippingContent from '../components/CheckoutContent/ShippingContent';
import CartLayout from '../components/Cart/CartLayout';

const Shipping = () => {
  return (
    <CartLayout>
      <ShippingContent />
    </CartLayout>
  );
};

export default Shipping;
