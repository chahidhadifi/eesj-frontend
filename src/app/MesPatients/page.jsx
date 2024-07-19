"use client";
import "@assets/css/style.css";
import { useMemo, useEffect, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import Sidebar from "@components/Sidebar";
import { Table, Drawer } from 'antd';
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import "@assets/css/font-awesome.min.css";
import moment from 'moment';

import {
  refreshicon,
  searchnormal,
} from "../../components/imagepath";
import { render } from "@fullcalendar/core/preact";

const MyPatients = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [searchText, setSearchText] = useState("");
  const ageRanges = Array.from({ length: 16 }, (_, index) => index + 10);

  const datasource = [
    {
      id: 1,
      Name: "Aya Aya",
      Gender: "Féminin",
      Age: 13,
      Disease: "Grippe",
      Mobile: "+212 6 12345678",
      dossier: "Dossier Médical",
      Date: "23-06-2023",
    },
    {
      id: 2,
      Name: "Omar Omar",
      Gender: "Masculin",
      Age: 21,
      Disease: "Rhume",
      Mobile: "+212 6 23456789",
      dossier: "Dossier Médical",
      Date: "24-06-2023",
    },
    {
      id: 3,
      Name: "Sara Sara",
      Gender: "Féminin",
      Age: 17,
      Disease: "Diabète",
      Mobile: "+212 6 34567890",
      dossier: "Dossier Médical",
      Date: "23-06-2024",
    },
    {
      id: 4,
      Name: "Ahmed Ahmed",
      Gender: "Masculin",
      Age: 25,
      Disease: "Hypertension",
      Mobile: "+212 6 45678901",
      dossier: "Dossier Médical",
      Date: "03-07-2023",
    },
    {
      id: 5,
      Name: "Fatima Fatima",
      Gender: "Féminin",
      Age: 20,
      Disease: "Asthme",
      Mobile: "+212 6 56789012",
      dossier: "Dossier Médical",
      Date: "27-06-2023",
    },
    {
      id: 6,
      Name: "Mohamed Mohamed",
      Gender: "Masculin",
      Age: 22,
      Disease: "Anémie",
      Mobile: "+212 6 67890123",
      dossier: "Dossier Médical",
      Date: "01-03-2023",
    },
    {
      id: 7,
      Name: "Imane Imane",
      Gender: "Féminin",
      Age: 19,
      Disease: "Allergie",
      Mobile: "+212 6 78901234",
      dossier: "Dossier Médical",
      Date: "22-11-2023",
    },
    {
      id: 8,
      Name: "Youssef Youssef",
      Gender: "Masculin",
      Age: 23,
      Disease: "Migraine",
      Mobile: "+212 6 89012345",
      dossier: "Dossier Médical",
      Date: "23-06-2023",
    },
    {
      id: 9,
      Name: "Khadija Khadija",
      Gender: "Féminin",
      Age: 14,
      Disease: "Otite",
      Mobile: "+212 6 90123456",
      dossier: "Dossier Médical",
      Date: "24-12-2023",
    },
    {
      id: 10,
      Name: "Rachid Rachid",
      Gender: "Masculin",
      Age: 18,
      Disease: "Bronchite",
      Mobile: "+212 6 01234567",
      dossier: "Dossier Médical",
      Date: "12-09-2024",
    }
  ];
  const filteredData = useMemo(() => {
    return datasource.filter((item) =>
      item.Name.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [searchText, datasource]);

  const columns = [
    {
        title : " ",
        width : 40,
        render : () => <input className="star" type="checkbox" />
    },
   
    {
        title: <span style={{ marginLeft : '30px' }}>Nom</span>,
        dataIndex: "Name",
        width: 200,
        render: (text) => <span style={{ whiteSpace: 'pre-wrap', marginLeft: '0px'  }}>{text}</span>,
        sorter: (a, b) => a.Name.localeCompare(b.Name)
    },
    {
        title: <span style={{ marginLeft: '20px' }}>Sexe</span>,
        dataIndex: "Gender",
        width: 200,
        render: (text) => <span style={{ whiteSpace: 'pre-wrap', marginLeft: '25px' }}>{text}</span>,
    },
    {
        title: "Age",
        dataIndex: "Age",
        sorter: (a, b) => a.Age - b.Age,
        width: 150,
        render: (text) => <span style={{ whiteSpace: 'pre-wrap' }}>{text} ans </span>,
    },
    {
        title: "Maladie",
        dataIndex: "Disease",
        ellipsis: true,
        width: 150,
        render: (text) => <span style={{ whiteSpace: 'pre-wrap' }}>{text}</span>,
    },
    {
        title: "Dossier Médical",
        dataIndex: "dossier",
        ellipsis: true,
        width: 200,
        render: (text, record) => (
            <>
                <Link href="#">{record.dossier}</Link>
            </>
        )
    },
    {
        title: "Téléphone",
        dataIndex: "Mobile",
        width: 150,
        render: (text) => <span style={{ whiteSpace: 'pre-wrap' }}>{text}</span>,
    },
    {
        title: "Date de consultation",
        dataIndex: "Date",
        sorter: (a, b) => moment(a.Date, "DD-MM-YYYY").unix() - moment(b.Date, "DD-MM-YYYY").unix(),
        width: 200,
        render: (text) => <span>{text}</span>,
    },
];

const openDrawer = () => {
    setDrawerVisible(true);
};

const closeDrawer = () => {
    setDrawerVisible(false);
};

const applySearch = () => {
    const filteredData = datasource.filter(patient => {
        // Check if the patient's Name, Gender, or Disease includes the searchText
        return (
            patient.Name.toLowerCase().includes(searchText.toLowerCase()) ||
            patient.Gender.toLowerCase().includes(searchText.toLowerCase()) ||
            patient.Disease.toLowerCase().includes(searchText.toLowerCase())
        );
    });

    return filteredData;
};

const handleSearchInputChange = (e) => {
    setSearchText(e.target.value);
};

return (
    <>
        <Sidebar id='menu-item1' id1='menu-items1' activeClassName='doctor-list' />
        <div className="page-wrapper">
            <div className="content">
                {/* Page Header */}
                <div className="page-header">
                    <div className="row">
                        <div className="col-sm-12">
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link href="#"> Mes Patients</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* /Page Header */}
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card card-table show-entire">
                            <div className="card-body">
                                {/* Table Header */}
                                <div className="page-table-header mb-2">
                                    <div className="row align-items-center">
                                        <div className="col">
                                            <div className="doctor-table-blk">
                                                <h3 style={{ marginRight: "20px" }}>Mes Patients</h3>
                                                <div className="doctor-search-blk">
                                                <div className="top-nav-search table-search-blk">
                                                <form>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Search here"
                                                    value={searchText}
                                                    onChange={handleSearchInputChange}
                                                />
                                                <Link className="btn" href="#">
                                                   <img
                                                     src={searchnormal.src}
                                                     alt="#"
                                                    />
                                                </Link>
                                                 </form>                                                                                
                                                    </div>
                                                    <div className="add-group">
                                                        <Link
                                                            href="#"
                                                            className="btn btn-primary doctor-refresh ms-2"
                                                        >
                                                            <img src={refreshicon.src} alt="#" />
                                                        </Link>
                                                        <Link
                                                            href="#"
                                                            className="filterr"
                                                            onClick={openDrawer}
                                                        >
                                                            Filtrer
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* /Table Header */}
                                <div className="table-responsive doctor-list">
                                    <Table
                                        pagination={{
                                            patients_number: datasource.length,
                                            showTotal: (patients_number, range) =>
                                                <span style={{ fontWeight: 'bold', fontSize: '16px' , fontFamily:'Poppins'}}>
                                            Nombre total des patients : {patients_number} patients
                                            </span>
                                            
                                        }}
                                        columns={columns}
                                        dataSource={applySearch()}
                                        rowKey={(record) => record.id}
                                        style={{
                                            // backgroundColor: '#f2f2f2', // Replace with your desired background color for the table
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Drawer
        title="Filtrer les Patients"
        placement="right"
        onClose={closeDrawer}
        visible={drawerVisible}
      >
        <div className="filte-div" >
        <p className="titre">Filtrer les patients </p>
        <div className="checkbox">
        
        <h5 className="sous-titre">Sexe :</h5>
        <label className="custom-checkbox-label">
             <input type="checkbox" /> Masculin
        </label>
        <label className="custom-checkbox-label">
             <input type="checkbox" /> Féminin
        </label>
        <h5 className="sous-titre">Maladie :</h5>
        <label className="custom-checkbox-label">
             <input type="checkbox" /> Rhume
        </label>
        <label className="custom-checkbox-label">
             <input type="checkbox" /> Grippe
        </label>
        <label className="custom-checkbox-label">
             <input type="checkbox" /> Anémie
        </label>
        <label className="custom-checkbox-label">
             <input type="checkbox" /> Cancer
        </label>
        <label className="custom-checkbox-label">
             <input type="checkbox" /> Asthme
        </label>
        <label className="custom-checkbox-label">
             <input type="checkbox" /> Hypertension
        </label>
        </div>
        <button className="apply">Appliquer</button>
        </div>
        {/* Add your filter form or options here */}
      </Drawer>
    </>
);
};

export default MyPatients;