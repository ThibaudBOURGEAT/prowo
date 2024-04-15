import React, { FC, useState } from 'react'
import { BiPlusCircle, BiX } from 'react-icons/bi'
import './Training.scss'
import { SearchBar } from '../../components/SearchBar/SearchBar'

interface IProps {

}

export const Training: FC<IProps> = ({ }: IProps) => {
    const [selected, setSelected] = useState<'Exercices' | 'Sessions'>('Sessions')

    return (
        <div className='training-page'>
            <div className='search-bar-container'>
                <SearchBar placeholder='Recherche...' size={600} />
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
                <div className='workout-tiles-container'>
                    <div className='workout-tile'>
                        <div className='workout-picture'>
                            <img src='https://www.lesdessousdusport.fr/wp-content/uploads/2022/10/Exercice-front-lever.jpg' />
                        </div>
                        <h3 className='workout-title'>
                            Dos Front
                        </h3>
                        <div className='workout-type'>Type : Session</div>
                    </div>
                </div>
            </div>
        </div>)
}