// import React from 'react';
// import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { BsChevronLeft } from 'react-icons/bs';

const Navback = () => {
  const [pageHistory, setPageHistory] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  //   useEffect(() => {
  //     setPageHistory((prevHistory) => [...prevHistory, location.pathname]);
  //   }, [location]);
  const paths = location.pathname.split('/').filter((path) => path !== '');
  let previousPage;
  if (paths.length > 1) {
    previousPage = paths[paths.length - 2];
  } else {
    previousPage = 'Continue shopping';
  }

  const handleNavback = () => {
    if (paths.length > 1) {
      navigate(`/${paths[paths.length - 2]}`);
    } else navigate('/');
  };

  return (
    <div className='text-gray-500 px-5 mb-[26px] mt-4'>
      <button onClick={handleNavback} className='flex items-center gap-3.5'>
        <BsChevronLeft />
        Back to {previousPage}
      </button>
    </div>
  );
};

export default Navback;
