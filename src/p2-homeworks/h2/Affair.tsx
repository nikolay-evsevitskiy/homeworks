import React from 'react'
import {AffairPriorityType, defaultAffairsType} from "./HW2";
import s from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: defaultAffairsType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix
    const changeColor = (value: AffairPriorityType) => {
        if (value === 'high') {
            return s.nameTask + ' ' + s.high
        } else if (value === 'middle') {
            return s.nameTask + ' ' + s.middle
        } else if (value === 'low') {
            return s.nameTask + ' ' + s.low
        } else {
            return s.nameTask
        }
    }

    return (
        <div className={s.someClass}>
            <div className={s.nameTaskContainer}><span className={s.nameTask}>{props.affair.name}</span></div>
            <div className={s.changeColorContainer}><span
                className={changeColor(props.affair.priority)}> {props.affair.priority} </span></div>
            <div className={s.deleteContainer}>
                <button onClick={deleteCallback} className={s.x}>X</button>
            </div>

        </div>
    )
}

export default Affair
