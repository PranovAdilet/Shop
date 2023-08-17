import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import {useDispatch, useSelector} from "react-redux";
import {changePriceFrom, changePriceTo} from "../../redux/cards";
import {useEffect} from "react";

function valuetext(value) {
    return `${value}°C`;
}

const minDistance = 10;

export default function MinimumDistanceSlider({setValueFromPrice, setValueToPrice}) {
    const dispatch = useDispatch()
    const {filter} = useSelector(s => s.reducer.cards)
    const [value, setValue] = React.useState([filter.price.from || 0, filter.price.to || 100])
    const rangeChange = (event, newValue) => {
        setValue(newValue)

    }


    useEffect(() => {
        setValue([filter.price.from, value[1]])
    }, [filter.price.from])

    useEffect(() => {
        setValue([ value[0],filter.price.to])
    }, [filter.price.to])


    useEffect(() => {
        setValueFromPrice(value[0])
    },[value[0]])

    useEffect(() => {
        setValueToPrice(value[1])
    }, [value[1]])



    const handleChange2 = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (newValue[1] - newValue[0] < minDistance) {
            if (activeThumb === 0) {
                const clamped = Math.min(newValue[0], 100 - minDistance);
                setValue([clamped, clamped + minDistance]);
                dispatch(changePriceFrom(newValue[0]))
                dispatch(changePriceTo(newValue[1]))

            } else {
                const clamped = Math.max(newValue[1], minDistance);
                setValue([clamped - minDistance, clamped]);
                dispatch(changePriceFrom(newValue[0]))
                dispatch(changePriceTo(newValue[1]))
            }
        } else {
            setValue(newValue);
            dispatch(changePriceFrom(newValue[0]))
            dispatch(changePriceTo(newValue[1]))
        }
    };

    return (
        <Box sx={{  }}>
            <Slider
                getAriaLabel={() => 'Minimum distance shift'}
                value={value}
                onChange={handleChange2}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                disableSwap
            />
        </Box>
    );
}
