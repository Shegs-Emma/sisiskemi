import { Link } from 'react-router-dom';
import InputBox from '../InputBox';

const ContactForm = () => {
  return (
    <section
      className='px-5 md:pb-32 md:px-7 lg:px-12 xl:px-16'
      id='contact_form'
    >
      <div>
        <div className='mb-6'>
          <h2 className='font-semibold mb-2'>Contact Information</h2>
          <div className=' flex gap-2'>
            <p>Already have an account?</p>
            <Link className='text-[#FDCB2A]'>Log in</Link>
          </div>
        </div>
        <InputBox placeholder='Email Address' />
        <div className='flex items-center gap-1.5 mt-2 mb-8'>
          <input type='checkbox' className='' />
          <label className='text-grey-input text-xs'>
            I agree to receive news and offers
          </label>
        </div>
        {/* <InputCheckboxReverse title='I agree to receive news and offers' /> */}
      </div>
      <div className='flex flex-col gap-5'>
        <h2 className='font-semibold'>Shipping Address</h2>
        <select
          placeholder='Country/Region'
          className=' text-xs px-4 py-5 border-[0.8px] border-grey-border rounded w-ful outline-none'
        >
          <option
            value=''
            className='text-xs p-3 border-[0.8px] border-grey-border rounded w-ful outline-none'
          >
            Country/Region
          </option>
        </select>

        <div className='flex gap-5 '>
          <InputBox placeholder='First Name' classname='basis-1/2 ' />
          <InputBox placeholder='Last Name' classname='basis-1/2 ' />
        </div>
        <div className='flex flex-col gap-5 lg:flex-row'>
          <InputBox placeholder='Address' />
          <InputBox placeholder='Town/city' />
          <InputBox placeholder='Postal code' />
        </div>
        <button className='bg-primary text-white py-[18px] rounded mt-4 uppercase'>
          Continue to Shipping
        </button>
      </div>
    </section>
  );
};

export default ContactForm;
