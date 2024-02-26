import * as Utils from '../../utils/utils';

export const NavbarComponent = (): JSX.Element => {
  const obj = {};

  Utils.setObjValue(obj, 'test.atest', 12);

  console.log(obj);

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
