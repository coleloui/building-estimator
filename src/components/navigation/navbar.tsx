import React from 'react';

export const NavbarComponent = (): JSX.Element => {
  return (
    <div>
      <div className='flex flex-row h-5'>
        <div>
          <h3>Home</h3>
        </div>
        <div>
          <h3>login</h3>
        </div>
      </div>
    </div>
  );
};
