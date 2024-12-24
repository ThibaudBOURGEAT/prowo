import React, { FC } from 'react'
import './UpdateRoutineModal.scss'
import { IRoutine } from '../../../../entities/Routine'

interface IProps{
    routine: IRoutine
}

export const UpdateRoutineModal: FC<IProps> = ({ routine }: IProps) => {
    return (
        <div className='update-routine-modal'>
            <div className='update-routine-modal-header'>
                <h1>{routine.title}</h1>
            </div>
        </div>
    )
}