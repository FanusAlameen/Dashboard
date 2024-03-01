import { FaChartPie } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaMoneyBill } from "react-icons/fa";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { ImArrowUp, ImArrowDown } from "react-icons/im";
import React from "react";
import Dashboard from "../components/Dashboard";
import Reports from "../components/Reports";
import Clients from "../components/Clients";
import Bills from "../components/Bills";

export const links = [
    {
        id: 1,
        icon: React.createElement(MdOutlineDashboardCustomize),
        content: 'Dashboard',
        component:<Dashboard/>,
        to: "/"
    },
    {
        id: 2,
        icon: React.createElement(FaChartPie),
        content: 'Reports',
        component:<Reports/>,
        to: "/reports"
    },
    {
        id: 3,
        icon: React.createElement(FaUser),
        content: 'Clients',
        component:<Clients/>,
        to: "/clients"
    }, 
    {
        id: 4,
        icon: React.createElement(FaMoneyBill),
        content: 'Bills',
        component:<Bills/>,
        to: "/bills"
    }
]

export const cards = [
    {
        id: 1,
        title: 'Campaign Sets',
        content: '8,321',
        percentage: '38.5%',
        profit: true,
    },
    {
        id: 2,
        title: 'Sales',
        content: '80.5%',
        percentage: '32%',
        profit: true,
    },
    {
        id: 3,
        title: 'Revenue',
        content: '-10%',
        percentage: '28%',
        profit: false
    }
]