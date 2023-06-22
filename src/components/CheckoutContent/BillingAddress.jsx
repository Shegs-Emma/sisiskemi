const BillingAddress = () => {
  return (
    <section
      className='px-5 pt-6 md:px-7 lg:px-12 xl:px-16'
      id='payment-method'
    >
      <div className='mb-6'>
        <h2 className='font-semibold mb-2'>Billing Address</h2>
        <p>Select the address that matches your card or payment method.</p>
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
              name='billing_address'
              value='card'
              className='mr-2'
            />
            <label className='inline-flex flex-col gap-4 md:flex-row '>
              Same as shipping address{' '}
            </label>
          </div>
        </div>
        <hr className='border-grey-border h-[0.4px] my-3' />
        <div className='flex justify-between items-start'>
          <div className=''>
            <input
              type='radio'
              id='2'
              name='billing_address'
              value='paystack'
              className='mr-2'
            />
            <label className='inline-flex flex-col gap-4 md:flex-row '>
              Use a different billing address{' '}
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BillingAddress;
