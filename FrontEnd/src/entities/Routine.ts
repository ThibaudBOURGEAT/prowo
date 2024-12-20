import { ICategory } from "./Category"

export interface IRoutine{
    id: string
    title: string
    categories: ICategory[]

}

interface ISet{
    nbSeries: number
    restTimeSecond: number
    exercices: IExercice[]
}

interface IExercice{

}