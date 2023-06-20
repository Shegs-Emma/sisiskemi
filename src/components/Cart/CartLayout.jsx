import React from 'react';
import Breadcrumbs from '../Breadcrumbs';
import { Link, useLocation } from 'react-router-dom';

const CartLayout = ({ children }) => {
  const location = useLocation();

  // Check if the current path is '/cart'
  const isCartPage = location.pathname === '/cart';

  return (
    <div>
      <Breadcrumbs />
      <div>{children}</div>
    </div>
  );
};
//   return (
//     <div>
//       <Breadcrumbs />
//       {isCartPage ? (
//         <div>
//           <h1>Cart</h1>
//           {/* Additional Cart page content */}
//           <p>
//             Continue shopping <Link to='/'>here</Link>.
//           </p>
//         </div>
//       ) : (
//         <div>{children}</div>
//       )}
//     </div>
//   );
// };

export default CartLayout;
