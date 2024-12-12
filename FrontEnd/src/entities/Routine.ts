import { ICategory } from "./Category"

export interface IRoutine{
    id: string
    title: string
    categories: ICategory[]
}