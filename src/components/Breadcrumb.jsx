import React from 'react';
import homelogo from '/home.png'; 
 
const Breadcrumb = ({ items }) => {
  return (  
    <nav aria-label="breadcrumb ">
      <ol className="breadcrumb flex ml-8 pt-6">
        {items.map((item, index) => (
          <li key={index} className="breadcrumb-item pr-2 pb-4 pt-4">
            {index === items.length - 1 ? (
              <span className='text-blue-800 font-semibold'>{item.label}</span> 
            ) : (
              <>
                {index === 0 ? <div className='flex'><a href={item.url}><img src={homelogo} alt="Home" style={{ width: '20px', height: '20px' }}/></a> {' > '}</div>: null} 
                {index !== 0 ? <><a href={item.url}>{item.label}</a>{' >'}</>: null }
                
              </>
            )}
            
          </li>
          
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
