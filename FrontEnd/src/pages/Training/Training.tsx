import React, { FC, useEffect, useState } from 'react'
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
    const [routines, setRoutines] = useState<IRoutine[]>([])
    const [selectedRoutine, setSelectedRoutine] = useState<IRoutine | null>(null)

    const fecthRoutines = async () => {
        var fecthedRoutines: IRoutine[] = []
        for (let i = 0; i < 30; i++) fecthedRoutines.push(routine)
        setRoutines(fecthedRoutines)
    }

    useEffect(() => { fecthRoutines() })

    return (
        <div className='training'>
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
                        {routines.map((r, i) => (
                            <WorkoutTile key={r.id + i.toString()} routine={r} onClick={() => setSelectedRoutine(r)} />
                        ))}
                    </div>
                </div>
            </div>
            {selectedRoutine && <div className="training-infos-container"></div>}
        </div>
    )
}