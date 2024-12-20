import { ICategory } from "./Category"

export interface IRoutine{
    id: string
    title: string
    categories: ICategory[]
    sets: ISet[]
}

interface ISet{
    name: string
    restTimeSecond: number
    exercices: IExercice[]
    categories: ICategory[]
}

interface IExercice{
    name: string
    categories: ICategory[]
    additionalWeight: number
    repetitions: number
}