import { ICategory } from "./Category"
import { ISet } from "./Set"

export interface IRoutine{
    id: string
    title: string
    categories: ICategory[]
    sets: ISet[]
}