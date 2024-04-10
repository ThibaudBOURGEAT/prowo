import React, { FC } from 'react'
import './LeftSideMenu.scss'

interface IProps{
    
}

export const LeftSideMenu: FC<IProps> = ({}: IProps) => {
    return (
        <div className='left-side-menu'>
            <div>Exercices</div>
            <div>Seances</div>
        </div>
    )
}