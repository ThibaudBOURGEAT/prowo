import React, { FC } from "react"
import './WorkoutTile.scss'
import { IRoutine } from "../../../../entities/Routine"

interface IProps {
    routine: IRoutine
    onClick: React.MouseEventHandler<HTMLDivElement> | undefined
}

export const WorkoutTile: FC<IProps> = ({ routine, onClick }: IProps) => {
    return (
        <div className='workout-tile' onClick={onClick}>
            <h3 className='workout-tile-title'>
                {routine.title}
            </h3>
            {routine.categories.length > 0 && <div className='workout-tile-categories-container'>
                Categories : {routine.categories.map(c => c.name).join(', ')}
            </div>}
        </div>
    )
}