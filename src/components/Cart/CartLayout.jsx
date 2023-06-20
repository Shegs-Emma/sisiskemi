import Navback from '../Navback';

const CartLayout = ({ children }) => {
  return (
    <div className='relative'>
      <Navback />
      <div>{children}</div>
    </div>
  );
};

export default CartLayout;
