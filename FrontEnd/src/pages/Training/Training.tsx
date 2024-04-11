import React, { FC } from 'react'
import { BiPlusCircle, BiX } from 'react-icons/bi'
import './Training.scss'

interface IProps {

}

export const Training: FC<IProps> = ({ }: IProps) => {
    return (
        <div className='training-page'>
            <div className='tabs'>
                <div className='tab '>Sessions</div>
                <div className='tab selected'>Exercices</div>
            </div>
            <div className='main-container'>
                <div className='categories-container'>
                    Catégories :
                    <div className='category'>
                        <div className='category-name'>Dos</div>
                        <div className='category-exit'><BiX /></div>
                    </div>
                    <div className='category'>
                        <div className='category-name'>Epaules</div>
                        <div className='category-exit'><BiX /></div>
                    </div>
                    <div className='add-category'>
                        <BiPlusCircle />
                    </div>
                </div>
            </div>
        </div>)
}