import React, { FC, useEffect, useRef, useState } from 'react'
import './CategoriesSelect.scss'
import { ICategory } from '../../../../entities/Category'

interface IProps {
    categories: ICategory[]
    setCategoryFilters: React.Dispatch<React.SetStateAction<ICategory[]>>
    parentRef: React.RefObject<HTMLDivElement>
}

export const CategoriesSelect: FC<IProps> = ({ categories, setCategoryFilters, parentRef }: IProps) => {
    const [categoriesOptions, setCategoriesOptions] = useState<ICategory[]>([])
    let selfRef = React.createRef<HTMLDivElement>()
    
    const calculatePosition = () => {
        if(parentRef.current && selfRef.current){
            let left, top = 0
            const spacing = 10 

            const parentProps = parentRef.current.getBoundingClientRect()
            const selfProps = selfRef.current.getBoundingClientRect()

            top = parentProps.top
            left = parentProps.right + spacing

            selfRef.current.style.left = `${left}px`
            selfRef.current.style.top = `${top}px`
        }
    }

    const initCategoriesOptions = () => setCategoriesOptions(categories)

    const onClickCategory = (category: ICategory) => setCategoryFilters(prev => [...prev, category])

    useEffect(() => { 
        initCategoriesOptions()
        calculatePosition()
    }, [categories])

    return (
        <div className='categories-select' ref={selfRef}>
            {categoriesOptions.map((c, i) =>
                <div className='category-option' key={'select' + c.name + i.toString()} onClick={() => onClickCategory(c)}>
                    <label className='category-name'>{c.name}</label>
                </div>
            )}
        </div>
    )
}