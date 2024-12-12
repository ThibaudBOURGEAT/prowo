import React, { FC } from "react"
import './WorkoutTile.scss'
import { IRoutine } from "../../../../entities/Routine"

interface IProps {
    routine: IRoutine
}

export const WorkoutTile: FC<IProps> = ({ routine }: IProps) => {
    return (
        <div className='workout-tile'>
            <h3 className='workout-tile-title'>
                {routine.title}
            </h3>
            {routine.categories.length > 0 && <div className='workout-tile-categories-container'>
                Categories : {routine.categories.map(c => c.name).join(', ')}
            </div>}
        </div>
    )
}