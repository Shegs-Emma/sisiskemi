import { AiOutlineShoppingCart, AiOutlineQuestionCircle } from 'react-icons/ai';
import { FiChevronDown } from 'react-icons/fi';
import Aisha from '../../assets/images/aisha.svg';

const OrderSummary = () => {
  return (
    <div>
      {/* Drop Down Toggler */}
      <div className='flex justify-between items-center w-full px-5 py-4 bg-[#F2F2F2]'>
        <div
          className='flex items-center text-[#A41E1E] gap-2.5
'
        >
          {/* Cart */}
          <AiOutlineShoppingCart size={18} />
          <div className='flex items-center gap-1.5'>
            <h2 className='text-sm'>Show order summary</h2>
            {/* Chevron down */}
            <FiChevronDown size={12} />
          </div>
        </div>
        <p className='font-semibold'>N89,000</p>
      </div>
      <div className='bg-[#BDBDBD]'>
        {/* Order List */}
        <div>
          <div className='flex justify-between'>
            <div className='flex gap-3 items-center'>
              {/* Badge and Image */}
              <div className='relative'>
                {/* Badge */}
                <div className='absolute inline px-[7px] rounded-full bg-[#4f4f4f] text-white'>
                  2
                </div>
                <div className='w-10 h-14'>
                  <img src={Aisha} alt='product' />
                </div>
              </div>
              {/* Item name and size */}
              <div>
                <p className='text-xs'>Item Name</p>
                <p className='text-xs'>Size</p>
              </div>
            </div>
            {/* Amount */}
            <div>N240,000</div>
          </div>
        </div>
        {/* Apply Input */}
        <div className='flex gap-3'>
          <input
            placeholder='ENTER DISCOUNT CODE'
            className='p-3 rounded-lg bg-transparent'
          />
          <button>Apply</button>
        </div>
        <hr />
        <div>
          <div>
            <p>Sub total </p>
            <p>N720,000</p>
          </div>
          <div>
            <div>
              <p>Shipping </p>
              <AiOutlineQuestionCircle />
            </div>
            <p>N720,000</p>
          </div>
          <div>
            <p>Total </p>
            <p>N720,000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
