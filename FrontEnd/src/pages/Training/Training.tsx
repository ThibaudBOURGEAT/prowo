import React, { FC, useState } from 'react'
import { BiPlusCircle, BiX } from 'react-icons/bi'
import './Training.scss'

interface IProps {

}

export const Training: FC<IProps> = ({ }: IProps) => {
    const [selected, setSelected] = useState<'Exercices' | 'Sessions'>('Sessions')

    return (
        <div className='training-page'>
            <div className='tabs'>
                <div className='tab selected'><h2>{selected}</h2></div>
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