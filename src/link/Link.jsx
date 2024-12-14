import React from 'react';



function Link({route}) {
    return (
        <div className='mr-8'>
           <li><a href={route.path}>{route.name}</a></li>
        </div>
    );
}

// Link.propTypes = {
  
// };

export default Link;