"use client";
import "@assets/css/style.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import Sidebar from "../components/Sidebar";
import { morning_img_02 } from "@components/imagepath";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div id="root">
      <Sidebar activeClassName="dashboard" />
      <div className="page-wrapper">
        <div className="content">
          {/* Page Header */}
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
          {/* Page Header */}

          <div className="topSection">
            {/* Bonjour Section */}
            <div className="good-morning-blk">
              <div className="row">
                <div className="col-md-6">
                  <div className="morning-user">
                    <h2>
                      Bonjour, <span>Dr. Khalid Amine </span>
                    </h2>
                    <p>Bonne journée au travail</p>
                  </div>
                </div>
                <div className="col-md-6 position-blk">
                  <div className="morning-img z-index-0">
                    <Image src={morning_img_02} alt="" />
                  </div>
                </div>
              </div>
            </div>
            {/* Bonjour Section */}
          </div>

          {isSmallScreen && (
            <div className="buttons-section text-center mb-4">
              <button
                type="button"
                className="btn btn-primary button-creation"
                style={{
                  borderColor: "#2F38A3",
                  backgroundColor: "#2F38A3",
                  borderRadius: "20px",
                }}
              >
                Créer une discussion
              </button>
            </div>
          )}

          
        </div>
      </div>
    </div>
  );
};

export default Home;
