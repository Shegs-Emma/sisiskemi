import { useLocation, Link } from 'react-router-dom';

export default function Breadcrumbs() {
  const location = useLocation();
  const paths = location.pathname.split('/').filter((path) => path !== '');

  console.log(paths);

  return (
    <nav aria-label='Breadcrumb'>
      <ol className='breadcrumb'>
        {paths?.length === 1 ? (
          <li className='breadcrumb-item'>
            <Link to='/'>Continue shopping</Link>
          </li>
        ) : (
          <>
            {paths.map((path, index) => (
              <li className='breadcrumb-item' key={index}>
                {index === paths.length - 1 ? (
                  <span>{path}</span>
                ) : (
                  <Link to={`/${paths.slice(0, index + 1).join('/')}`}>
                    {path}
                  </Link>
                )}
              </li>
            ))}
          </>
        )}
      </ol>
    </nav>
  );
}
