import React, { FC } from 'react'
import './SearchBar.scss'
import { BiSearchAlt2 } from 'react-icons/bi'

interface IProps{
    placeholder?:string
    setSearchText: React.Dispatch<React.SetStateAction<string>>
    size: number
}

export const SearchBar: FC<IProps> = ({ placeholder, size }: IProps) => {
    return (<div className='search-bar' style={{ width: `${size}px` }}>
        <BiSearchAlt2 />
        <input placeholder={placeholder}></input>
    </div>)
}

