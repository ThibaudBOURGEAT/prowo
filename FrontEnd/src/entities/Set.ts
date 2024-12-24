import { IExercice } from "./Exercice"

export interface ISet{
    name: string
    restTimeSecond: number
    exercices: IExercice[]
}