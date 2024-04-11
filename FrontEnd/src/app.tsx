import React, { FC } from "react"
import './app.scss'
import { BiLeftArrowCircle, BiRightArrowCircle } from 'react-icons/bi'
import { Menu } from "./components/Menu/Menu"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Calendar } from './pages/Calendar/Calendar'
import { Stats } from './pages/Stats/Stats'
import { Training } from './pages/Training/Training'

export const App: FC = () => {
    return (
        <div className="app">
            <Router>
                <div className="header-container">
                    <div className="logo-container">Prowo</div>
                    <div className="menu-container"><Menu /></div>
                </div>
                <div className="body-container">
                    <div className="page-container">
                        <Routes>
                            <Route path="/" element={<Training />} />
                            <Route path="/calendar" element={<Calendar />} />
                            <Route path="/stats" element={<Stats />} />
                        </Routes>
                    </div>
                    <div className="infos-container">

                    </div>
                </div>
            </Router>
        </div>
    )
}