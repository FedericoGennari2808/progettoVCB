import React, { useState } from 'react';
import SidebarItem from './SidebarItem';
import SliderChanges from './SliderChanges';
import './Editor.css'



const DEFAULT_OPTIONS = [
    {
        name: 'Brightness',
        property: 'brightness',
        value: 100,
        range: {
            min: 0,
            max: 200
        },
        unit: '%'
    },
    {
        name: 'Contrast',
        property: 'contrast',
        value: 100,
        range: {
            min: 0,
            max: 200
        },
        unit: '%'
    },
    {
        name: 'Saturation',
        property: 'saturate',
        value: 100,
        range: {
            min: 0,
            max: 200
        },
        unit: '%'
    },
    {
        name: 'Grayscale',
        property: 'grayscale',
        value: 0,
        range: {
            min: 0,
            max: 100
        },
        unit: '%'
    },
    {
        name: 'Sepia',
        property: 'sepia',
        value: 0,
        range: {
            min: 0,
            max: 100
        },
        unit: '%'
    },
    {
        name: 'Hue Rotate',
        property: 'hue-rotate',
        value: 0,
        range: {
            min: 0,
            max: 360
        },
        unit: 'deg'
    },
    {
        name: 'Blur',
        property: 'blur',
        value: 0,
        range: {
            min: 0,
            max: 20
        },
        unit: 'px'
    }
]



const Editor = () => {

    const [selectedOptionIndex, setSelectedOptionIndex] = useState(0)
    const [options, setOptions] = useState(DEFAULT_OPTIONS)
    const selectedOption = options[selectedOptionIndex]

    function handleSliderChange({ target }) {
        setOptions(imageData => {
            return imageData.map((option, index) => {
                if (index !== selectedOptionIndex) return option
                return { ...option, value: target.value }
            })
        })
    }

    function getImageStyle() {
        const filters = options.map(option => {
            return `${option.property}(${option.value}${option.unit})`
        })

        return { filter: filters.join(' ') }
    }

    console.log(getImageStyle())

    return (
        <div className="containerGT">
            <div className="main-image" style={getImageStyle()}>
                
            </div>
            <div className="sidebar">
                {options.map((option, index) => {
                    return (
                        <SidebarItem
                            key={index}
                            name={option.name}
                            active={index === selectedOptionIndex}
                            handleClick={() => setSelectedOptionIndex(index)}
                        />
                    )
                })}
            </div>
            <SliderChanges
                min={selectedOption.range.min}
                max={selectedOption.range.max}
                value={selectedOption.value}
                handleChange={handleSliderChange}
            />
        </div>
    )
}

export default Editor