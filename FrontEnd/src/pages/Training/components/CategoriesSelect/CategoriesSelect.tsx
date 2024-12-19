import React, { FC, useEffect, useState } from 'react'
import './CategoriesSelect.scss'
import { ICategory } from '../../../../entities/Category'
import { BiCheck } from 'react-icons/bi'

interface IProps {
    categories: ICategory[]
}

interface ICategoryOption extends ICategory { seleted: boolean }

export const CategoriesSelect: FC<IProps> = ({ categories }: IProps) => {
    const [categoriesOptions, setCategoriesOptions] = useState<ICategoryOption[]>([])

    const initCategoriesOptions = () => {
        setCategoriesOptions(categories.map(c => {
            return { ...c, seleted: false }
        }))
    }

    const onClickCategory = (categoryOption: ICategoryOption) => categoryOption.seleted = true

    useEffect(() => { initCategoriesOptions() }, [categories])

    return (
        <div className='categories-select-containeur'>
            <div className='categories-select'>
                {categoriesOptions.map((c, i) =>
                    <div className='category-option' key={'select' + c.name + i.toString()} onClick={() => onClickCategory(c)}>
                        <label className='category-name'>{c.name}</label>
                        {c.seleted && <BiCheck />}
                    </div>
                )}
            </div>
        </div>
    )
}