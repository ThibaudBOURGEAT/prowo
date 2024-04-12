import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import './NavButton.scss'

interface IProps {
    icon?: JSX.Element
    text?: string
    to: string
}

export const NavButton: FC<IProps> = ({ icon, text, to }: IProps) => {
    function handleClickNavigation(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        if (event.currentTarget.classList.contains("selected")) event.preventDefault()
    }

    return (<NavLink onClick={handleClickNavigation} className={(navData) => {
        let selected = navData.isActive ? 'selected' : ''
        return `nav-button ${selected}`
    }} to={to}>
        <div className="icon">{icon}</div>
        <div className='text-hover'>{text}</div>
    </NavLink>)
}