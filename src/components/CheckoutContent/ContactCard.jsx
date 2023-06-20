import { Link } from 'react-router-dom';

const ContactCard = () => {
  return (
    <section className='px-5'>
      <div className='mb-6'>
        <h2 className='font-semibold mb-2'>Contact Information</h2>
        <div className=' flex gap-2'>
          <p>Already have an account?</p>
          <Link className='text-[#FDCB2A]'>Log in</Link>
        </div>
      </div>
      <div
        id='contact information'
        className='p-[13px] border border-grey-border rounded'
      >
        <div className='flex justify-between items-start'>
          <div className='flex flex-col gap-4 md:flex-row'>
            <p className='font-semibold text-sm'>Contact:</p>
            <p className='text-sm'>Joyoluzzz@gmail.com</p>
          </div>
          <button className='text-[#2f80ed]'>Change</button>
        </div>
        <hr className='border-grey-border h-[0.4px] my-3' />
        <div className='flex justify-between items-start'>
          <div className='flex flex-col gap-4 md:flex-row'>
            <p className='font-semibold text-sm'>Ship to:</p>
            <p className='text-sm'>50 Oduduwa Way, Ikeja</p>
          </div>
          <button className='text-[#2f80ed]'>Change</button>
        </div>
      </div>
    </section>
  );
};

export default ContactCard;
