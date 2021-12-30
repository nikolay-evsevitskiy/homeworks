import React from 'react'
import Affair from './Affair'
import {AffairType, defaultAffairsType, FilterType} from './HW2'
import s from './Affairs.module.css'

type AffairsPropsType = { // need to fix any
    data: AffairType
    setFilter: (filter: FilterType) => void //Dispatch<SetStateAction<FilterType>>
    deleteAffairCallback: (_id: number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: defaultAffairsType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter('all')
    } // need to fix
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter('low')
    }

    return (
        <div>

            {mappedAffairs}

            <button className={props.filter === "all" ? s.allButton : s.buttonStyle} onClick={setAll}>All</button>
            <button className={props.filter === "high" ? s.highButton : s.buttonStyle} onClick={setHigh}>High</button>
            <button className={props.filter === "middle" ? s.middleButton : s.buttonStyle} onClick={setMiddle}>Middle</button>
            <button className={props.filter === "low" ? s.lowButton : s.buttonStyle} onClick={setLow}>Low</button>
        </div>
    )
}

export default Affairs
