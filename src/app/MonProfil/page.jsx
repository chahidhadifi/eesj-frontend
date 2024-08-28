"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import FeatherIcon from "feather-icons-react";
import Sidebar from "@components/Sidebar1";
import { getMedecinById } from "../../services/medecinService";
import { Profileuser, cameraicon } from "../../components/imagepath";
import "../../assets/css/style.css";

const Page = () => {
  const [medecin, setMedecin] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    const fetchMedecin = async () => {
      try {
        const medecinData = await getMedecinById(46);
        setMedecin(medecinData);
      } catch (error) {
        console.error("Failed to fetch medecin data", error);
      }
    };

    fetchMedecin();
  }, []);

  if (!medecin) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Sidebar
        id="menu-item1"
        id1="menu-items1"
        activeClassName="doctorprofile"
      />
      <div className="page-wrapper">
        <div className="content">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="doctors.html">Medecins </Link>
                  </li>
                  <li className="breadcrumb-item">
                    <i className="feather-chevron-right">
                      <FeatherIcon icon="chevron-right" />
                    </i>
                  </li>
                  <li className="breadcrumb-item active">Profil Medecin</li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="about-info">
                        <h4>
                          Profil du Docteur{" "}
                          <span>
                            <Link href="#">
                              <i className="feather-more-vertical">
                                <FeatherIcon icon="more-vertical" />
                              </i>
                            </Link>
                          </span>
                        </h4>
                      </div>
                      <div className="doctor-profile-head">
                        <div className="row">
                          <div className="profile-user-box">
                            <div className="profile-user-img">
                              <img
                                src={previewUrl || Profileuser.src}
                                alt="Profile"
                              />
                              <div className="form-group doctor-up-files profile-edit-icon mb-0">
                                <div className="uplod d-flex">
                                  <label className="file-upload profile-upbtn mb-0">
                                    <img src={cameraicon.src} alt="Profile" />
                                    <input
                                      type="file"
                                      onChange={handleFileChange}
                                    />
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="names-profiles">
                              <h4>
                                {medecin.nom} {medecin.prenom}
                              </h4>
                              <h5>{medecin.specialite}</h5>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                gap: "15px",
                                justifyContent: "flex-end",
                                width: "100%",
                              }}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  gap: "10px",
                                  justifyContent: "flex-end",
                                }}
                              >
                                {/* LinkedIn Link */}
                                <a
                                  className="btn"
                                  href={medecin.linkedin}
                                  style={{
                                    borderColor: "transparent",
                                    color: "black",
                                    padding: "6px 12px",
                                    fontSize: "14px",
                                    backgroundColor: "transparent",
                                    display: "flex",
                                    alignItems: "center",
                                    textDecoration: "none",
                                  }}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <div
                                    className="personal-icons"
                                    style={{ marginRight: "8px" }}
                                  >
                                    <FontAwesomeIcon
                                      icon={faLinkedin}
                                      style={{
                                        color: "#0077B5",
                                        fontSize: "24px",
                                      }}
                                    />
                                  </div>
                                </a>
                                {/* Twitter Link */}
                                <a
                                  className="btn"
                                  href={medecin.twitter}
                                  style={{
                                    borderColor: "transparent",
                                    color: "grey",
                                    padding: "6px 12px",
                                    fontSize: "14px",
                                    backgroundColor: "transparent",
                                    display: "flex",
                                    alignItems: "center",
                                    textDecoration: "none",
                                  }}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <div
                                    className="personal-icons"
                                    style={{ marginRight: "8px" }}
                                  >
                                    <FontAwesomeIcon
                                      icon={faXTwitter}
                                      style={{
                                        color: "#000000",
                                        fontSize: "24px",
                                      }}
                                    />
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="doctor-personals-grp">
                  <div className="card">
                    <div className="card-body mt-1">
                      <div className="personal-list-out">
                        <div className="row">
                          <div className="card-body">
                            <div className="heading-detail">
                              <h4 className="mb-3">À propos de moi</h4>
                              <p>{medecin.about}</p>
                            </div>
                          </div>
                          <div className="grey-br" />
                          <div className="col-xl-3 col-md-6">
                            <div className="detail-personal">
                              <h2>Nom complet</h2>
                              <h3>
                                {medecin.prenom}&nbsp;{medecin.nom}
                              </h3>
                            </div>
                          </div>
                          <div className="col-xl-3 col-md-6">
                            <div className="detail-personal">
                              <h2>Spécialité</h2>
                              <h3>{medecin.specialite}</h3>
                            </div>
                          </div>
                          <div className="col-xl-3 col-md-6 ">
                            <div className="detail-personal">
                              <h2>Sexe</h2>
                              <h3>{medecin.sexe}</h3>
                            </div>
                          </div>
                          <div className="col-xl-3 col-md-6">
                            <div className="detail-personal">
                              <h2>Email</h2>
                              <h3>{medecin.mail}</h3>
                            </div>
                          </div>
                          <div className="col-xl-3 col-md-6 mt-3">
                            <div className="detail-personal">
                              <h2>Généraliste ?</h2>
                              <h3>{medecin.estGeneraliste ? "Oui" : "Non"}</h3>
                            </div>
                          </div>
                          <div className="col-xl-3 col-md-6 mt-3">
                            <div className="detail-personal">
                              <h2>Médecin ESJ ?</h2>
                              <h3>{medecin.estMedcinESJ ? "Oui" : "Non"}</h3>
                            </div>
                          </div>
                          <div className="col-xl-3 col-md-6 mt-3">
                            <div className="detail-personal">
                              <h2>CIN</h2>
                              <h3>{medecin.cin}</h3>
                            </div>
                          </div>
                          <div className="col-xl-3 col-md-6 mt-3">
                            <div className="detail-personal">
                              <h2>PPR</h2>
                              <h3>{medecin.ppr}</h3>
                            </div>
                          </div>
                          <div className="col-xl-3 col-md-6 mt-3">
                            <div className="detail-personal">
                              <h2>INPE</h2>
                              <h3>{medecin.inpe}</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="hello-park">
                        <h5>Éducation</h5>
                        <div className="table-responsive">
                          <table className="table mb-0 border-0 custom-table profile-table">
                            <thead>
                              <tr>
                                <th>Année</th>
                                <th>Diplôme</th>
                                <th>Institut</th>
                              </tr>
                            </thead>
                            <tbody>
                              {medecin.education &&
                                medecin.education.map((edu, index) => (
                                  <tr key={index}>
                                    <td>{edu.year}</td>
                                    <td>{edu.diploma}</td>
                                    <td>{edu.institut}</td>
                                  </tr>
                                ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="hello-park mb-2">
                        <h5>Expérience</h5>
                        <div className="table-responsive">
                          <table className="table mb-0 border-0 custom-table profile-table">
                            <thead>
                              <tr>
                                <th>Année</th>
                                <th>Poste</th>
                                <th>Hôpital</th>
                              </tr>
                            </thead>
                            <tbody>
                              {medecin.experience &&
                                medecin.experience.map((exp, index) => (
                                  <tr key={index}>
                                    <td>{exp.year}</td>
                                    <td>{exp.position}</td>
                                    <td>{exp.hospital}</td>
                                  </tr>
                                ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;