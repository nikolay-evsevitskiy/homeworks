import React from 'react';
import 'antd/dist/antd.css';
import {Slider} from 'antd';
import style from './SuperDoubleRange.module.css';

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    min?: number
    max?: number
    step?: number | null
    disable?: boolean
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value, min,
        max, step, disable
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки

    return (
        <div className={style.item}>
            <Slider range={{draggableTrack: true}}

                    defaultValue={value}
                    onChange={onChangeRange}
                    value={value}
                    min={min}
                    max={max}
                    step={step}
                    disabled={disable}
            />
        </div>
    )
}

export default SuperDoubleRange
