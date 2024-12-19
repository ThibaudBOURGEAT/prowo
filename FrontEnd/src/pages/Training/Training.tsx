import React, { FC, useEffect, useState } from 'react'
import { BiPlusCircle } from 'react-icons/bi'
import './Training.scss'
import { SearchBar } from '../../components/SearchBar/SearchBar'
import { IRoutine } from '../../entities/Routine'
import { WorkoutTile } from './components/WorkoutTile/WorkoutTile'
import { ICategory, categories } from '../../entities/Category'
import { Category } from './components/Category/Category'

interface IProps {

}

const routine: IRoutine = {
    id: 'pouet',
    title: 'Front lever',
    categories: [categories[0], categories[2], categories[4]]
}

export const Training: FC<IProps> = ({ }: IProps) => {
    const [routines, setRoutines] = useState<IRoutine[]>([])
    const [categoryFilters, setCategoryFilters] = useState<ICategory[]>([categories[1], categories[0]])
    const [selectedRoutine, setSelectedRoutine] = useState<IRoutine | null>(null)

    const fecthRoutines = async () => {
        var fecthedRoutines: IRoutine[] = []
        for (let i = 0; i < 30; i++) fecthedRoutines.push(routine)
        filterRoutinesByCategories(fecthedRoutines)
    }

    const filterRoutinesByCategories = (routinesToFilter: IRoutine[]) => {
        console.log('categories filter', categoryFilters)
        let newState = [...routinesToFilter]
        if (categoryFilters.length > 0) {
            newState = newState.filter(r => {
                let result = false
                for (const category of categoryFilters) result = r.categories.includes(category)
                return result
            })
        }
        setRoutines(newState);
    }

    const removeCategory = (category: ICategory) => {
        setCategoryFilters(prev => [...prev].filter(c => c !== category))
    }

    useEffect(() => { fecthRoutines() }, [categoryFilters, setCategoryFilters])

    return (
        <div className='training'>
            <div className='training-page'>
                <div className='search-bar-container'>
                    <SearchBar placeholder='Recherche...' size={600} />
                </div>
                <div className='main-container'>
                    <div className='categories-container'>
                        Catégories :
                        {categoryFilters.map((cf, i) =>
                            <Category key={cf.name + i.toString()} category={cf} removeCategory={removeCategory} />
                        )}
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