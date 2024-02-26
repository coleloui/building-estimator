// Import React and Components
import { useSelector } from 'react-redux';

// Import our Components
import { LoggedIn, LogIn } from './components/';
import { selectMember } from '../../redux/slices/member';
import * as Utils from '../../utils/utils';

export const NavbarComponent = (): JSX.Element => {
  const member = useSelector(selectMember);

  return (
    <div className='flex flex-row border text-white'>
      <div className='p-2'>
        <h3>Home</h3>
      </div>
      <div className='p-2'>{member ? <LoggedIn /> : <LogIn />}</div>
    </div>
  );
};
