const SaveInfo = () => {
  return (
    <section className='px-5 pt-6 md:px-7 lg:px-12 xl:px-16' id='remember-me'>
      <div className='mb-6'>
        <h2 className='font-semibold mb-2'>Remember Me</h2>
      </div>
      <div
        id='contact information'
        className='p-[13px] border border-grey-border rounded'
      >
        <div className='flex justify-start '>
          <input
            type='radio'
            id='1'
            name='billing_address'
            value='card'
            className='mr-2'
          />
          <label className=''>Save my information for a faster checkout </label>
        </div>
      </div>
      <button className='w-full bg-primary text-white py-[18px] rounded mt-8 '>
        Pay Now{' '}
      </button>
    </section>
  );
};

export default SaveInfo;
