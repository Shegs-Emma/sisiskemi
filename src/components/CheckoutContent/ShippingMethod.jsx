import React from 'react';

const ShippingMethod = () => {
  return (
    <div>
      <section className='px-5 pt-6'>
        <div className='mb-6'>
          <h2 className='font-semibold mb-2'>Shipping method</h2>
        </div>
        <div
          id='contact information'
          className='p-[13px] border border-grey-border rounded'
        >
          <div className='flex justify-between items-start'>
            <div className=''>
              <input
                type='radio'
                id='1'
                name='shipping_method'
                value='Shipping Method 1'
                className='mr-2'
              />
              <label className='inline-flex flex-col gap-4 md:flex-row '>
                <p className='font-semibold text-sm'>Shipping Method 1</p>
                <p className='text-sm'>Shipping Duration</p>
              </label>
            </div>
            <p className='font-semibold'>N5,000</p>
          </div>
          <hr className='border-grey-border h-[0.4px] my-3' />
          <div className='flex justify-between items-start'>
            <div className=''>
              <input
                type='radio'
                id='1'
                name='shipping_method'
                value='Shipping Method 1'
                className='mr-2'
              />
              <label className='inline-flex flex-col gap-4 md:flex-row '>
                <p className='font-semibold text-sm'>Shipping Method 2</p>
                <p className='text-sm'>Shipping Duration</p>
              </label>
            </div>
            <p className='font-semibold'>N10,000</p>
          </div>
          <hr className='border-grey-border h-[0.4px] my-3' />
          <div className='flex justify-between items-start'>
            <div className=''>
              <input
                type='radio'
                id='1'
                name='shipping_method'
                value='Shipping Method 1'
                className='mr-2'
              />
              <label className='inline-flex flex-col gap-4 md:flex-row '>
                <p className='font-semibold text-sm'>Shipping Method 3</p>
                <p className='text-sm'>Shipping Duration</p>
              </label>
            </div>
            <p className='font-semibold'>N15,000</p>
          </div>
        </div>
        <button className='w-full bg-primary text-white py-[18px] rounded mt-8 uppercase'>
          Continue to Shipping
        </button>
      </section>
    </div>
  );
};

export default ShippingMethod;
