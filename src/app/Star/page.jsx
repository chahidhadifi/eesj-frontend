
"use client";
import "@assets/css/style.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import Sidebar from "@components/Sidebar";
import { morning_img_02, bu, gp, tv, cb } from "@components/imagepath";
import { useRouter } from "next/navigation";
import { Card } from "antd";
import "boxicons/css/boxicons.min.css";
import * as bootstrap from "bootstrap";

const Star = ()=>{
    return(
        <input class="star" type="checkbox" />
    )
}
export default Star