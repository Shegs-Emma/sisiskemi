const PaymentMethod = () => {
  return (
    <section className='px-5 pt-6' id='payment-method'>
      <div className='mb-6'>
        <h2 className='font-semibold mb-2'>Payment method</h2>
        <p>All transactions are encrypted and secured</p>
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
              name='payment_method'
              value='card'
              className='mr-2'
            />
            <label className='inline-flex flex-col gap-4 md:flex-row '>
              Pay with Card
            </label>
          </div>
        </div>
        <hr className='border-grey-border h-[0.4px] my-3' />
        <div className='flex justify-between items-start'>
          <div className='inline'>
            <input
              type='radio'
              id='1'
              name='payment_method'
              value='paystack'
              className='mr-2'
            />
            <label className='inline-flex flex-col gap-4 md:flex-row '>
              Pay with paystack
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentMethod;
