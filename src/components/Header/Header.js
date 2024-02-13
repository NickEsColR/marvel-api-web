import { Menu } from "semantic-ui-react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Header.scss";

export const Header = () => {
  const currentPath = useLocation();
  const finalCurrentPath = currentPath.pathname.replace("/", "");

  const [activeItem, setActiveItem] = useState(
    finalCurrentPath === "" ? "inicio" : finalCurrentPath
  );
  const navigate = useNavigate();

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
    navigate(`/${name}`);
  };
  return (
    <div className="header-menu">
      <Menu secondary>
        <Menu.Item className="icon-container">
        <span className="icon"/>
        </Menu.Item>
        <Menu.Item
          name="inicio"
          active={activeItem === "inicio"}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="series"
          active={activeItem === "series"}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="comics"
          active={activeItem === "comics"}
          onClick={handleItemClick}
        />
      </Menu>
    </div>
  );
};
