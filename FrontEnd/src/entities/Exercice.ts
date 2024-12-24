import { ICategory } from "./Category"

export type typeExercice = 'IsometricExercice' | 'DynamicExercice' | 'DistanceExercice' 

export interface IExercice{
    name: string
    categories: ICategory[]
    additionalWeight: number
    type: typeExercice
}

export interface IIsometricExercice extends IExercice{
    type: 'IsometricExercice'
    durationTimeSecond: number
}

export interface IDynamicExercice extends IExercice{
    type: 'DynamicExercice'
    repetitions: number
}


export interface IDistanceExercice extends IExercice{
    type: 'DistanceExercice'
    distanceKm: number
    durationTimeSecond: number
}