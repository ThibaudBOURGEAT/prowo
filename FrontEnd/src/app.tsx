import React, { FC } from "react"
import './app.scss'
import { LeftSideMenu } from "./components/LeftSideMenu/LeftSideMenu"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export const App: FC = () => {
    return (
        <div className="app">
            <Router>
                <Route path="/" element={<LeftSideMenu />}>
                    
                </Route>
            </Router>
            
        </div>
    )
}