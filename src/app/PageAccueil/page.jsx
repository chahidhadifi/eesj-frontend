"use client";
import "@assets/css/style.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from 'axios';
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import Sidebar from '@components/Sidebar';
import { morning_img_02, bu, gp, tv, cb } from "@components/imagepath";
import { useRouter } from "next/navigation";
import { Card } from "antd";
import 'boxicons/css/boxicons.min.css';
import * as bootstrap from 'bootstrap';


const appointments = [
  { day: 'Monday', hour: '10:00 AM', patient: 'John Doe' },
  { day: 'Wednesday', hour: '2:00 PM', patient: 'Jane Smith' },
  { day: 'Friday', hour: '1:00 PM', patient: 'Bob Johnson' },
];

  const Home = () => {
  const router = useRouter();
  const [rating, setRating] = useState(3); // Suppose we fetch this from the database
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    window.bootstrap = bootstrap;
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
    getAllHealthNews();
  }, []) 

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
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<i key={i} className='bx bxs-star' style={{ color: 'yellow', fontSize: '24px', marginTop:'20px' }}></i>);
      } else {
        stars.push(<i key={i} className='bx bxs-star' style={{ color: 'grey', fontSize: '24px' }}></i>);
      }
    }
    return stars;
  };

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
                    <Link href="/">Page d'accueil</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <FeatherIcon icon="chevron-right" />
                  </li>
                  <li className="breadcrumb-item active">Page d'accueil</li>
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
                    <div className="star-rating" style={{display:'inline-block'}}>
                        
                      {renderStars(rating)}
                    </div>
                    <div style={{display:'inline-block', marginTop:'-4px'}}>
                    <div className="container-exclamation align-up" style={{marginLeft:"10px",display:'flex'}}>
                    <span className="status-greeny" style={{cursor: 'default'}} data-bs-toggle="tooltip" data-bs-title="Si votre évaluation est faible, complétez toutes les informations de votre profil.">
                        !
                    </span>
                    </div>
                    </div>
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
          <p>Accès Rapide</p>
          <div className="doctor-list-blk" style={{ width: '100%' }}>
            <div className="row">
              <div className="col-xl-3 col-md-6">
                <div className="doctor-widget border-right-bg">
                  <div className="doctor-box-icon flex-shrink-0">
                    <img src={bu.src} alt="" />
                  </div>
                  <div className="doctor-content dash-count flex-grow-1">
                    <Link href="/MonProfil">
                    <h4 style={{ color: "black", fontSize: "23px", marginLeft: "20px", fontWeight: "300" }}>Mon Profil</h4>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="doctor-widget border-right-bg">
                  <div className="doctor-box-icon flex-shrink-0">
                    <img src={gp.src} alt="" />
                  </div>
                  <div className="doctor-content dash-count flex-grow-1">
                  <Link href="/MesPatients">
                    <h4 style={{ color: "black", fontSize: "23px", marginLeft: "20px", fontWeight: "300" }}>Mes Patients</h4>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="doctor-widget">
                  <div className="doctor-box-icon flex-shrink-0">
                    <img src={cb.src} alt="" />
                  </div>
                  <div className="doctor-content dash-count flex-grow-1">
                  <Link href="/ChatBot">
                    <h4 style={{ color: "black", fontSize: "23px", marginLeft: "20px", fontWeight: "300" }}>Chat Bot</h4>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="doctor-widget">
                  <div className="doctor-box-icon flex-shrink-0">
                    <img src={tv.src} alt="" />
                  </div>
                  <div className="doctor-content dash-count flex-grow-1">
                  <Link href="/TéléExpertise">
                    <h4 style={{ color: "black", fontSize: "23px", marginLeft: "20px", fontWeight: "300" }}>Télé-Expertise</h4>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p style={{ marginTop: "3rem" }}>Rendez-vous</p>
          <Card className="custom-card">
            <div className="card-bodyy">
              <h5 className="card-title">À venir</h5>
              {appointments.map((appointment, index) => (
                <div key={index} className="appointment">
                  <p className="appointment-details">
                    <span><strong>Jour:</strong> {appointment.day}</span>
                    <span><strong>Heure:</strong> {appointment.hour}</span>
                    <span><strong>Nom du patient:</strong> {appointment.patient}</span>
                  </p>
                </div>
              ))}
            </div>
          </Card>
          <Card className="custom-card">
            <div className="card-bodyy">
              <h5 className="card-title">Dernières consultations</h5>
              {appointments.map((appointment, index) => (
                <div key={index} className="appointment">
                  <p className="appointment-details">
                    <span><strong>Jour:</strong> {appointment.day}</span>
                    <span><strong>Heure:</strong> {appointment.hour}</span>
                    <span><strong>Nom du patient:</strong> {appointment.patient}</span>
                  </p>
                </div>
              ))}
            </div>
          </Card>
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
