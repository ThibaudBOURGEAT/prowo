import React, { FC } from 'react'
import { BiCalendar, BiDumbbell, BiTrendingUp } from 'react-icons/bi'
import './Menu.scss'
import { NavLink } from 'react-router-dom'

interface IProps {

}

export const Menu: FC<IProps> = ({ }: IProps) => {
    function handleClickNavigation(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>){
        if (event.currentTarget.classList.contains("selected")) event.preventDefault()
    }

    return (
        <div className='menu'>
            <NavLink onClick={handleClickNavigation} className={(navData) => {
                let selected = navData.isActive ? 'selected' : ''
                return `item-menu ${selected}`
            }} to='' data-description='training'>
                <div className="icon"><BiDumbbell /></div>
            </NavLink>
            <NavLink onClick={handleClickNavigation} className={(navData) => {
                let selected = navData.isActive ? 'selected' : ''
                return `item-menu ${selected}`
            }} to='calendar' data-description='calendar'>
                <div className="icon"><BiCalendar /></div>
            </NavLink>
            <NavLink onClick={handleClickNavigation} className={(navData) => {
                let selected = navData.isActive ? 'selected' : ''
                return `item-menu ${selected}`
            }} to='stats' data-description='stats'>
                <div className="icon"><BiTrendingUp /></div>
            </NavLink>
        </div>
    )
}