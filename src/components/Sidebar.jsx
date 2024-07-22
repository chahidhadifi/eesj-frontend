"use client";
import { useEffect, useState } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@assets/css/font-awesome.min.css";
import Link from "next/link";
import Image from "next/image";
import { dashboard, doctor, logout, menuicon10, menuicon08, baricon, baricon1 } from "./imagepath";
import Scrollbars from "react-custom-scrollbars-2";
import 'boxicons';

const Sidebar = (props) => {
  const [sidebar, setSidebar] = useState("");
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const toggleSubMenu = (e) => {
    setSubMenuOpen((prev) => !prev);
    const menuArrow = document.querySelector('#menu-item1');

      if(subMenuOpen) {menuArrow.classList.remove('subdrop') } else{ menuArrow.classList.add('subdrop');}
      console.log(subMenuOpen)

  };
  const handlesidebar = () => {
    document.body.classList.toggle("mini-sidebar");
  };

  const handlesidebarmobilemenu = () => {
    document.body.classList.toggle("slide-nav");
    document.getElementsByTagName("html")[0].classList.toggle("menu-opened");
    /*document
      .getElementsByClassName("sidebar-overlay")[0]
      .classList.toggle("opened");*/
  };
  const handleClick = (e, item, itemClass) => {
    const div = document.querySelector(`#${item}`);
    const ulDiv = document.querySelector(`.${itemClass}`);
    ulDiv.style.display = ulDiv.style.display === 'block' ? 'none' : 'block';
    div.classList.toggle('subdrop');
  };

  
  const expandMenu = () => {
    document.body.classList.remove("expand-menu");
  };

  const expandMenuOpen = () => {
    document.body.classList.add("expand-menu");
  };

  return (
    <div className="sidebar" id="sidebar">
      <Scrollbars
        autoHide
        autoHideTimeout={1000}
        autoHideDuration={200}
        autoHeight
        autoHeightMin={0}
        autoHeightMax="95vh"
        thumbMinSize={30}
        universal={false}
        hideTracksWhenNotNeeded={true}
      >
        <div className="sidebar-inner slimscroll">
          <div
            id="sidebar-menu"
            className="sidebar-menu"
            onMouseLeave={expandMenu}
            onMouseOver={expandMenuOpen}
          >
            <ul>
            <Link href="#" id="toggle_btn" onClick={handlesidebar}>
                <Image src={baricon} alt="" />
              </Link>
              <Link
                href="#"
                id="mobile_btn"
                className="mobile_btn float-start"
                onClick={handlesidebarmobilemenu}
              >
                <Image src={baricon1} alt="" />
              </Link>
              <li className="menu-title">Menu</li>
              <li className="submenu">
                <Link
                  className={
                    props?.activeClassName === "dashboard" ? "active" : ""
                  }
                  href="/"
                >
                  <span className="menu-side">
                    <Image src={dashboard} alt="" />
                  </span>{" "}
                  <span> Page d'accueil </span>
                </Link>
              </li>
              <li className="submenu">
                <Link
                  className={
                    props?.activeClassName === "chat" ? "active" : ""
                  }
                  href="/MonProfil"
                >
                  <span className="menu-side">
                    <Image src={doctor} alt="" />
                  </span>{" "}
                  <span> Mon Profil </span>
                </Link>
              </li>
              <li className="submenu">
                <Link
                  className={
                    props?.activeClassName === "chat" ? "active" : ""
                  }
                  href="/ModifierProfil"
                >
                  <span className="menu-side">
                    <Image src={doctor} alt="" />
                  </span>{" "}
                  <span> Modifier profil </span>
                </Link>
              </li>
              <li className="submenu">
                <Link
                  className={
                    props?.activeClassName === "doctors" ? "active" : ""
                  }
                  href="/MesPatients"
                >
                  <span className="menu-side">
                    <Image src={menuicon08} alt="" />
                  </span>{" "}
                  <span> Mes Patients </span>
                </Link>
              </li>
              <li className="submenu">
                <Link
                  className={
                    props?.activeClassName === "doctors" ? "active" : ""
                  }
                  href="/Chat"
                >
                  <span className="menu-side">
                    <box-icon type='solid' name='bot' color='gray'></box-icon>
                  </span>{" "}
                  <span> Chat Bot</span>
                </Link>
              </li>
              <li className="submenu">
                <Link
                  className={
                    props?.activeClassName === "chat" ? "active" : ""
                  }
                  href="/MonProfil"
                >
                  <span className="menu-side">
                    <Image src={doctor} alt="" />
                  </span>{" "}
                  <span> IES </span>
                </Link>
              </li>
              <li className="submenu">
                <Link
                  className={
                    props?.activeClassName === "doctors" ? "active" : ""
                  }
                  href="/Télé"
                >
                  <span className="menu-side">
                    <box-icon name='tv' color='gray'></box-icon>
                  </span>{" "}
                  <span> Télé-Expértise </span>
                </Link>
              </li>
              <li>
                <Link
                  className={
                    props?.activeClassName === "parametres" ? "active" : ""
                  }
                  href="/"
                >
                  <span className="menu-side">
                    <Image src={logout} alt="" />
                  </span>{" "}
                  <span>Se Déconnecter</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Scrollbars>
    </div>
  );
};

export default Sidebar;
