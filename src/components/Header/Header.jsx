import './Header.css';
import HeaderIcon from './HeaderIcon/HeaderIcon';
import { House,Heart,CircleUser  } from 'lucide-react';

const Header = () => {
  return (
    <header className='header'>
      <HeaderIcon Icon={House} className="header-icon">Product House</HeaderIcon>
      <HeaderIcon Icon={Heart} className="header-icon">Welcome</HeaderIcon>
      <HeaderIcon Icon={CircleUser} className="header-icon">User Profile</HeaderIcon>
    </header>
  );
};

export default Header;
