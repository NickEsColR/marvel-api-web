import { Menu } from 'semantic-ui-react';
import './Header.scss';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const Header = () => {
  const currentPath = useLocation()
  const finalCurrentPath = currentPath.pathname.replace('/',"")

  const [activeItem, setActiveItem] = useState(finalCurrentPath)
  const navigate = useNavigate();

  const handleItemClick = (e, {name}) => {
    setActiveItem(name);
    navigate(`/${name}`);
  }
  return (
    <div className='header-menu'>
    <Menu secondary>
      <Menu.Item
        name='inicio'
        active={activeItem === 'inicio'}
        onClick={()=>{handleItemClick}}
      />
      <Menu.Item
        name='series'
        active={activeItem === 'series'}
        hrefonClick={()=>{handleItemClick}}
      />
      <Menu.Item
        name='comics'
        active={activeItem === 'comics'}
        hrefonClick={()=>{handleItemClick}}
      />
    </Menu>
    </div>
  )
}
