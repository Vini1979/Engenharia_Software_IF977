//import useState hook to create menu collapse state
import React, { useState } from "react";
import { Link } from "react-router-dom";
//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent
} from "react-pro-sidebar";

import { BiCog } from "react-icons/bi";

import {
  FiHome,
  FiLogOut,
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiUsers,
  FiMonitor,
  FiPlus
} from "react-icons/fi";

//import sidebar css from react-pro-sidebar module and our custom css
import "react-pro-sidebar/dist/css/styles.css";
import "./Header.css";

const SideBar = () => {
  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(true);

  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <div id="header">
        {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="closemenu" onClick={menuIconClick}>
              {/* changing menu collapse icon on click */}
              {menuCollapse ? (
                <FiArrowRightCircle />
              ) : (
                <>
                  <h3>Menu</h3> <FiArrowLeftCircle />
                </>
              )}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem icon={<FiHome />}>
                Inicial
                <Link exact to="/" />
              </MenuItem>
              <MenuItem icon={<FiPlus />}>
                Cadastrar
                <Link to="/cadastrarRelacao" />
              </MenuItem>
              <MenuItem icon={<FiUsers />}>
                Funcionários
                <Link to="listarFuncionarios" />
              </MenuItem>
              <MenuItem icon={<FiMonitor />}>
                Equipamentos
                <Link to="/listarEquipamentos" />
              </MenuItem>
              <MenuItem icon={<BiCog />}>Configurações</MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}>Sair</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default SideBar;
