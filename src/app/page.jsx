"use client";
import "@assets/css/style.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import Sidebar from "../components/Sidebar";
// import CountUp from "react-countup";
import { morning_img_02 ,doctor_dashboard_01,
  doctor_dashboard_02,
  doctor_dashboard_03,
  doctor_dashboard_04  } from "@components/imagepath";
import { useRouter } from "next/navigation";

import * as bootstrap from 'bootstrap';

const Home = () => {
  const router = useRouter();
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // const handleCreateDiscussion = () => {
  //   router.push("/Formulaire");
  // };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    window.bootstrap = bootstrap;
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
  }, []) 

  return (
    <div id="root">
      <Sidebar activeClassName="/" />
      <div className="page-wrapper">
        <div className="content">
          {/* En-tête de la page */}
          <div
            className="page-header"
            style={isSmallScreen ? { marginBottom: "70px" } : {}}
          >
            <div className="row">
              <div className="col-sm-12">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">Page d'accueil </Link>
                  </li>
                  <li className="breadcrumb-item">
                    <FeatherIcon icon="chevron-right" />
                  </li>
                  <li className="breadcrumb-item active">tableau de bord</li>
                </ul>
              </div>
            </div>
          </div>
          {/* En-tête de la page */}

          <div className="topSection">
            

            {/* Section Bonjour */}
            {!isSmallScreen && ( <div className="good-morning-blk">
              <div className="row">
                <div className="col-md-6">
                  <div className="morning-user">
                    <h2>
                      Bonjour, <span>Khalid Amine</span>
                    </h2>
                    <p>Bienvenue sur votre tableau de bord</p>
                  </div>
                </div>
                <div className="col-md-6 position-blk">
                  <div className="morning-img">
                    <Image src={morning_img_02} width={190} height={190} style={{marginLeft:'91px'}} alt="" />
                  </div>
                </div>
              </div>
            </div>)}
            {/* Section Bonjour */}
          </div>

          {isSmallScreen && (
            <div className="good-morning-blk">
            <div className="row">
              <div className="col-md-6">
                <div className="morning-user">
                  <h2>
                    Bonjour, <span>Khalid Amine</span>
                  </h2>
                  <p>Bienvenue sur votre tableau de bord</p>
                </div>
              </div>
            </div>
          </div>
          )}

          {/* Section Discussion */}
         
          {/* Section Discussion */}
        </div>
      </div>

    </div>
  );
};

export default Home;