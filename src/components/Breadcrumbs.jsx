import { Fragment } from 'react';
import Logo from '@/assets/images/logo.svg';
import { Link, useLocation } from 'react-router-dom';

const pagePaths = ['Cart', 'Information', 'Shipping', 'Payment'];

const Breadcrumbs = () => {
  const location = useLocation();
  const paths = location.pathname.split('/').filter((path) => path !== '');

  return (
    <div className='mt-[30px] px-5 mb-8'>
      <div className='hidden md:block md:w-20 md:h-12 mb-4'>
        <img src={Logo} alt='logo' />
      </div>
      <nav className='flex items-center space-x-2 text-sm text-gray-500 md:justify-center sm:text-base'>
        {pagePaths.map((path, index) => (
          <Fragment key={path}>
            {index > 0 && <span>{'>'}</span>}
            {index < paths.length ? (
              <Link
                to={`/${paths.slice(0, index + 1).join('/')}`}
                className={`${
                  index === paths.length - 1 ? 'font-semibold' : 'text-red-500'
                }`}
              >
                {path}
              </Link>
            ) : (
              <span>{path}</span>
            )}
          </Fragment>
        ))}
      </nav>
    </div>
  );
};

export default Breadcrumbs;
