import Navback from '../Navback';

const CartLayout = ({ children }) => {
  return (
    <div>
      <Navback />
      <div>{children}</div>
    </div>
  );
};

export default CartLayout;
