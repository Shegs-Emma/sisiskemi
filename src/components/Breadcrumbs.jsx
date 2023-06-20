import { Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();
  const paths = location.pathname.split('/').filter((path) => path !== '');

  return (
    <nav className='flex items-center space-x-2 text-sm text-gray-500'>
      {paths.map((path, index) => (
        <Fragment key={path}>
          {index > 0 && <span className='text-gray-400'>/</span>}
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
  );
};

export default Breadcrumbs;
