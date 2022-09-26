import React from 'react'

export default function SliderChanges({ min, max, value, handleChange}) {
  return (
    <div className="slider-containerGT">
      <input
        type="range"
        className="sliderGT"
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
      />
    </div>
  )
}