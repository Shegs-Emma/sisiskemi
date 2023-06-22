import { AiOutlineShoppingCart, AiOutlineQuestionCircle } from 'react-icons/ai';
import { FiChevronDown } from 'react-icons/fi';
import Aisha from '../../assets/images/aisha.svg';
import { useState } from 'react';

const OrderSummary = () => {
  const [showList, setShowList] = useState(true);

  const showListHandler = () => {
    // setShowList((current) => !current);
  };
  return (
    <div className='h-full md:-mt-16'>
      {/* Drop Down Toggler */}
      <div
        className='flex justify-between items-center w-full px-5 py-4 bg-[#F2F2F2] md:hidden'
        onClick={showListHandler}
      >
        <div
          className='flex items-center text-[#A41E1E] gap-2.5 
'
        >
          {/* Cart */}
          <AiOutlineShoppingCart size={18} />
          <div className='flex items-center gap-1.5'>
            <h2 className='text-sm sm:text-base'>Show order summary</h2>
            {/* Chevron down */}
            <FiChevronDown size={12} />
          </div>
        </div>
        <p className='font-semibold text-sm sm:text-base'>N89,000</p>
      </div>
      {showList && (
        <div className='bg-[#E0E0E0] md:bg-[#f2f2f2] px-5 pt-[18px] pb-14 h-full'>
          {/* Order List */}
          <div className='mb-10'>
            <div className='flex justify-between items-center'>
              <div className='flex gap-3 items-center text-xs sm:text-base'>
                {/* Badge and Image */}
                <div className='relative'>
                  {/* Badge */}
                  <div className='absolute inline px-[7px] rounded-full bg-grey-title text-white -right-2 -top-2'>
                    2
                  </div>
                  <div className='w-10 h-14'>
                    <img src={Aisha} alt='product' />
                  </div>
                </div>
                {/* Item name and size */}
                <div className='text-xs sm:text-base'>
                  <p className=''>Item Name</p>
                  <p className=''>Size</p>
                </div>
              </div>
              {/* Amount */}
              <p className='text-grey-title font-semibold'>N240,000</p>
            </div>
          </div>
          {/* Apply Input */}
          <div className='flex gap-3 border-y border-grey-border py-5 mb-16 md:mb-0'>
            <input
              placeholder='ENTER DISCOUNT CODE'
              className='w-full text-grey-input p-3 rounded-lg bg-transparent border border-[#BDBDBD] outline-none '
            />
            <button className='bg-grey-input px-6 py-4.5 rounded-lg outline-none text-white'>
              Apply
            </button>
          </div>
          <hr className='md:hidden border-[0.6px] border-grey-input mb-6 ' />
          <div>
            <div className=' md:border-y md:border-grey-border md:py-5 md:mb-5'>
              <div className='flex justify-between mb-3 text-xs sm:text-sm'>
                <p>Sub total </p>
                <p className=''>N720,000</p>
              </div>
              <div className='flex justify-between mb-5 text-xs md:mb-0 sm:text-sm'>
                <div className='flex justify-between items-center gap-2'>
                  <p className=''>Shipping </p>
                  <AiOutlineQuestionCircle size={10} />
                </div>
                <p>N720,000</p>
              </div>
            </div>
            <div className='flex justify-between'>
              <p>Total </p>
              <p className='text-sm font-semibold sm:text-base md:text-[1.0625rem]'>
                N720,000
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderSummary;
