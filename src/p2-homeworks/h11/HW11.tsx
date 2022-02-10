import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import style from './hw11.module.css'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)
    const onChangeRangeCallBack = (e: number) => setValue1(e)
    const SuperDoubleRangeCallBack = (value: [ number,number]) => {
        setValue1(value[0])
        setValue2(value[1])
    }

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span>{value1}</span>
                <SuperRange
                    onChangeRange={onChangeRangeCallBack}
                    value={value1}// сделать так чтоб value1 изменялось
                />
            </div>

            <div className={style.superDoubleRangeContainer}>
                <div>{value1}</div>
                <SuperDoubleRange
                    onChangeRange={SuperDoubleRangeCallBack}
                    value={[value1, value2]}// сделать так чтоб value1 и value2 изменялось
                />
                <div>{value2}</div>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
