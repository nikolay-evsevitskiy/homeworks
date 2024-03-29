import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearTimeout(timerId)// stop
    }
    const start = () => {
        stop()
        const id: number = +setInterval(() => {
            const date = new Date()
            setDate(date)// setDate
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)// show
    }
    const onMouseLeave = () => {
        setShow(false)// close
    }

    const stringTime = date.toLocaleTimeString() ? date.toLocaleTimeString() : <br/>
    //     `${date.getHours() < 10 ? '0' + date.getHours() : date.getHours()} :
    // ${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()} :
    // ${date.getSeconds()}` // fix with date
    const stringDate = date.toDateString() ? date.toDateString() : <br/>
    // `${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}.
    // ${date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth()}.
    // ${date.getFullYear()}` // fix with date

    return (
        <div>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show ?
                <div>
                    {stringDate}
                </div>
                : <br/>}

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
