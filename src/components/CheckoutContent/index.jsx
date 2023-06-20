import OrderSummary from './OrderSummary';
import ContactForm from './ContactForm';
import Breadcrumbs from '../Breadcrumbs';

const CheckoutContent = () => {
  return (
    <div className='md:flex flex-row-reverse w-full'>
      <div className='md:basis-[45%] md:bg-[#f2f2f2] md:flex md:flex-col justify-between'>
        <OrderSummary />
        <div className='hidden md:block px-5'>
          <hr className=' md:border-[0.6px] border-grey-input mb-3 ' />
        </div>
      </div>
      <div className='md:mr-auto md:basis-[55%]'>
        <Breadcrumbs />
        <ContactForm />
      </div>
    </div>
  );
};

export default CheckoutContent;
