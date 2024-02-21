import React from 'react';

export const NavbarComponent = (): JSX.Element => {
  return (
    <div className='flex flex-row border'>
      <div className='p-2'>
        <h3>Home</h3>
      </div>
      <div className='p-2'>
        <h3>login</h3>
      </div>
    </div>
  );
};
