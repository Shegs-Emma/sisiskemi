import { Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';

const pagePaths = ['Cart', 'Information', 'Shipping', 'Payment'];

const Breadcrumbs = () => {
  const location = useLocation();
  const paths = location.pathname.split('/').filter((path) => path !== '');

  return (
    <div className='mt-[30px]  px-5 mb-8 '>
      <nav className='flex items-center space-x-2 text-sm text-gray-500 md:justify-center'>
        {pagePaths.map((path, index) => (
          <Fragment key={path}>
            {index > 0 && <span className='text-gray-400'>{'>'}</span>}
            <Link
              // key={path}
              to={`/${paths.slice(0, index + 1).join('/')}`}
              className={`${
                index === paths.length - 1 ? 'font-semibold' : 'text-red-500'
              }`}
              // to={path}
            >
              {path}
            </Link>
          </Fragment>
        ))}
      </nav>
    </div>
  );
};

export default Breadcrumbs;

{
  /* <div className='mt-[30px]  px-5 '>
      <nav className='flex items-center space-x-2 text-sm text-gray-500'>
        {paths.map((path, index) => (
          <Fragment key={path}>
            {index > 0 && <span className='text-gray-400'>{'>'}</span>}
            <Link
              to={`/${paths.slice(0, index + 1).join('/')}`}
              className={`${
                index === paths.length - 1 ? 'font-semibold' : 'text-red-500'
              }`}
            >
              {path}
            </Link>
          </Fragment>
        ))}
      </nav>
    </div> */
}
