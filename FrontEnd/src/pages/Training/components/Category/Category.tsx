import React, { FC } from "react"
import './Category.scss'
import { ICategory } from "../../../../entities/Category"
import { BiX } from "react-icons/bi"

interface IProps {
    category: ICategory
    removeCategory: (category: ICategory) => void
}

export const Category: FC<IProps> = ({ category, removeCategory }: IProps) => {
    return (
        <div className='category' style={{ backgroundColor: category.color }}>
            <div className='category-name'>{category.name}</div>
            <div className='category-exit' onClick={() => removeCategory(category)}><BiX /></div>
        </div>
    )
}