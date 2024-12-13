import React, { FC } from "react"
import './app.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { BiCalendar, BiDumbbell, BiTrendingUp } from "react-icons/bi"
import { NavButton } from "./components/NavButton/NavButton"
import { Training } from "./pages/Training/Training"
import { Calendar } from "./pages/Calendar/Calendar"
import { Stats } from "./pages/Stats/Stats"

export const App: FC = () => {
    return (
        <div className="app">
            <Router>
                <div className="menu-container">
                    <NavButton icon={<BiDumbbell />} to={'/'} text={'Training'} />
                    <NavButton icon={<BiCalendar />} to={'/calendar'} text={'Calendar'} />
                    <NavButton icon={<BiTrendingUp />} to={'/stats'} text={'Stats'} />
                </div>
                <div className="page-container">
                    <Routes>
                        <Route path="/" element={<Training />} />
                        <Route path="/calendar" element={<Calendar />} />
                        <Route path="/stats" element={<Stats />} />
                    </Routes>
                </div>
            </Router>
        </div>
    )
}