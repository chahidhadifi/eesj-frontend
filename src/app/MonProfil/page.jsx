"use client";

import { useEffect, useState } from "react";
import axios from 'axios';

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

import "@assets/css/style.css";
import Sidebar from "@components/Sidebar1";

import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import { morning_img_02 ,doctor_dashboard_01,
  doctor_dashboard_02,
  doctor_dashboard_03,
  doctor_dashboard_04,  
  iconsocial02} from "@components/imagepath";

import * as bootstrap from 'bootstrap';

const Home = () => {
  const router = useRouter();
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [news, setNews] = useState(null);

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

  const getAllHealthNews = () => {
    //pub_48777307746a1c7481b2890da6fa8dd3e3f8a
    axios.get("https://newsdata.io/api/1/latest?country=ma&category=health&apikey=API_KEY")
    .then(res => {
      setNews(res.data.results);
    })
    .catch(err => {
      console.log(err);
    })
  }

  useEffect(() => {
    window.bootstrap = bootstrap;
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
    getAllHealthNews();
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
              <div className="col-md-6 position-blk">
                <div className="morning-img">
                  <Image src={morning_img_02} width={190} height={190}  alt="" />
                </div>
              </div>
            </div>
          </div>
          )}
          <div className="doctor-list-blk" style={{width: '100%'}}>
              <div className="row">
                <div className="col-xl-3 col-md-6">
                  <div className="doctor-widget border-right-bg">
                    <div className="doctor-box-icon flex-shrink-0">
                      <img src={doctor_dashboard_02.src} alt="" />
                    </div>
                    <div className="doctor-content dash-count flex-grow-1">
                      <h4>
                        <span className="">125</span>
                        <span className=""></span>
                      </h4>
                      <h5>Patients</h5>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6">
                  <div className="doctor-widget border-right-bg">
                    <div className="doctor-box-icon flex-shrink-0">
                      <img src={doctor_dashboard_01.src} alt="" />
                    </div>
                    <div className="doctor-content dash-count flex-grow-1">
                      <h4>
                        <span className="">3/Jour</span>
                        <span className=""></span>
                      </h4>
                      <h5>Consultations</h5>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6">
                  <div className="doctor-widget">
                    <div className="doctor-box-icon flex-shrink-0">
                      <img src={doctor_dashboard_04.src} alt="" />
                    </div>
                    <div className="doctor-content dash-count flex-grow-1">
                      <h4>
                        <span className="counter-up">3/5</span>
                        <span className="status-green" style={{cursor: 'default'}} data-bs-toggle="tooltip" data-bs-title="Si votre évaluation est faible, complétez toutes les informations de votre profil.">
                        Remarque
                        </span>
                      </h4>
                      <h5>Evaluation</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          {/* Section Discussion */}
          <h3 className="text-lg mb-4 mt-5" style={{fontWeight: 'bold'}}>Dernières nouvelles sur la santé</h3>
          <div class="row row-cols-1 row-cols-md-3 g-4">
            {
              news && news.map((item, i) => (
                <div class="col" key={i}>
                  <div class="card">
                    <img src={item.image_url} class="card-img-top"/>
                    <div class="card-body">
                      <h5 class="card-title">{item.title}</h5>
                      <h6 style={{marginTop: '-15px', marginBottom: '20px', fontSize: '10px'}}>{item.pubDate}</h6>
                      <h6 style={{marginTop: '-10px'}}>
                        <img src={item.source_icon} alt="" style={{marginRight: '3px', width: '20px'}} />
                        <a href={item.source_url} style={{color: '#333448', textTransform: 'capitalize'}}>{item.source_id}</a>
                      </h6>
                      <p class="card-text" style={{fontSize: '11px', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}>{item.description}</p>
                    </div>
                    <div class="card-body" style={{marginTop: '-20px'}}>
                      <a href={item.link} class="btn btn-primary">Consulter la page</a>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
         
          {/* Section Discussion */}
        </div>
      </div>

    </div>
  );
};

export default Home;