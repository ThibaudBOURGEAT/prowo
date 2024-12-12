import React, { FC, useState } from 'react'
import { BiPlusCircle, BiX } from 'react-icons/bi'
import './Training.scss'
import { SearchBar } from '../../components/SearchBar/SearchBar'
import { IRoutine } from '../../entities/Routine'
import { WorkoutTile } from './components/WorkoutTile/WorkoutTile'

interface IProps {

}

const routine: IRoutine = {
    id: 'pouet',
    title: 'Front lever',
    categories: [{ name: 'dos', color: 'blue' }, { name: 'pull', color: 'blue' }, { name: 'statique', color: 'blue' }]
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
                    <WorkoutTile routine={routine} />
                    <WorkoutTile routine={routine} />
                    <WorkoutTile routine={routine} />
                    <WorkoutTile routine={routine} />
                    <WorkoutTile routine={routine} />
                    <WorkoutTile routine={routine} />
                    <WorkoutTile routine={routine} />
                    <WorkoutTile routine={routine} />
                    <WorkoutTile routine={routine} />
                    <WorkoutTile routine={routine} />
                    <WorkoutTile routine={routine} />
                    <WorkoutTile routine={routine} />
                    <WorkoutTile routine={routine} />
                    <WorkoutTile routine={routine} />
                    <WorkoutTile routine={routine} />
                    <WorkoutTile routine={routine} />
                    <WorkoutTile routine={routine} />
                    <WorkoutTile routine={routine} />
                    <WorkoutTile routine={routine} />
                    <WorkoutTile routine={routine} />
                    <WorkoutTile routine={routine} />
                    <WorkoutTile routine={routine} />
                    <WorkoutTile routine={routine} />
                    <WorkoutTile routine={routine} />
                    <WorkoutTile routine={routine} />
                    <WorkoutTile routine={routine} />
                    <WorkoutTile routine={routine} />
                    <WorkoutTile routine={routine} />
                    <WorkoutTile routine={routine} />
                    <WorkoutTile routine={routine} />
                    <WorkoutTile routine={routine} />
                    <WorkoutTile routine={routine} />
                    <WorkoutTile routine={routine} />
                    <WorkoutTile routine={routine} />
                    <WorkoutTile routine={routine} />
                    <WorkoutTile routine={routine} />
                    <WorkoutTile routine={routine} />
                    <WorkoutTile routine={routine} />
                    <WorkoutTile routine={routine} />
                    <WorkoutTile routine={routine} />
                    <WorkoutTile routine={routine} />
                    <WorkoutTile routine={routine} />
                </div>                
            </div>
        </div>)
}