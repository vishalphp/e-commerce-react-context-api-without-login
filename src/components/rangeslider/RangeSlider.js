import React, { useEffect, useState } from 'react';
import './rangeslider.scss';

export default function RangeSlider(props) {

    const {filterPrice} = props;
    const initPosStae = {minimumvalue: 0, maximumValue: 0};
    const [sliderPosition, setSliderPosition] = useState(initPosStae); 

    function controlFromInput(fromSlider, fromInput, toInput, controlSlider) {
        const [from, to] = getParsed(fromInput, toInput);
        fillSlider(fromInput, toInput, '#C6C6C6', '#25daa5', controlSlider);
        if (from > to) {
            fromSlider.value = to;
            fromInput.value = to;
        } else {
            fromSlider.value = from;
        }
    }
        
    function controlToInput(toSlider, fromInput, toInput, controlSlider) {
        const [from, to] = getParsed(fromInput, toInput);
        fillSlider(fromInput, toInput, '#C6C6C6', '#25daa5', controlSlider);
        setToggleAccessible(toInput);
        if (from <= to) {
            toSlider.value = to;
            toInput.value = to;
        } else {
            toInput.value = from;
        }
    }
    
    function controlFromSlider(fromSlider, toSlider, fromInput) {
      const [from, to] = getParsed(fromSlider, toSlider);
      fillSlider(fromSlider, toSlider, '#C6C6C6', '#25daa5', toSlider);
      if (from > to) {
        fromSlider.value = to;
        fromInput.value = to;
      } else {
        fromInput.value = from;
      }
    }
    
    function controlToSlider(fromSlider, toSlider, toInput) {
      const [from, to] = getParsed(fromSlider, toSlider);
      fillSlider(fromSlider, toSlider, '#C6C6C6', '#25daa5', toSlider);
      setToggleAccessible(toSlider);
      if (from <= to) {
        toSlider.value = to;
        toInput.value = to;
      } else {
        toInput.value = from;
        toSlider.value = from;
      }
    }
    
    function getParsed(currentFrom, currentTo) {
      const from = parseInt(currentFrom.value, 10);
      const to = parseInt(currentTo.value, 10);
      return [from, to];
    }
    
    function fillSlider(from, to, sliderColor, rangeColor, controlSlider) {
        const rangeDistance = to.max-to.min;
        const fromPosition = from.value - to.min;
        const toPosition = to.value - to.min;
        controlSlider.style.background = `linear-gradient(
          to right,
          ${sliderColor} 0%,
          ${sliderColor} ${(fromPosition)/(rangeDistance)*100}%,
          ${rangeColor} ${((fromPosition)/(rangeDistance))*100}%,
          ${rangeColor} ${(toPosition)/(rangeDistance)*100}%, 
          ${sliderColor} ${(toPosition)/(rangeDistance)*100}%, 
          ${sliderColor} 100%)`;
    }
    
    function setToggleAccessible(currentTarget) {
      const toSlider = document.querySelector('#toSlider');
      if (Number(currentTarget.value) <= 0 ) {
        toSlider.style.zIndex = 2;
      } else {
        toSlider.style.zIndex = 0;
      }
    }

    const sortVal = filterPrice.sort((a, b) => a.value > b.value ? 1 : -1);
    const valueMap = filterPrice.map((a) => a.value);
    const minValue = Math.min(...valueMap);
    const maxValue = Math.max(...valueMap); 
 
    
    useEffect(()=>{
        const fromSlider = document.querySelector('#fromSlider');
        const toSlider = document.querySelector('#toSlider');
        const fromInput = document.querySelector('#fromInput');
        const toInput = document.querySelector('#toInput');
        fillSlider(fromSlider, toSlider, '#C6C6C6', '#25daa5', toSlider);
        setToggleAccessible(toSlider);

        fromSlider.oninput = () => controlFromSlider(fromSlider, toSlider, fromInput);
        toSlider.oninput = () => controlToSlider(fromSlider, toSlider, toInput);
        fromInput.oninput = () => controlFromInput(fromSlider, fromInput, toInput, toSlider);
        toInput.oninput = () => controlToInput(toSlider, fromInput, toInput, toSlider);
         setSliderPosition((prev)=>{
            return {minimumvalue: minValue, maximumValue: maxValue}
        });
    },[]);
 
    const checkFromSliderInputHandel = (e) =>{
      const fromSlider = document.querySelector('#fromSlider');
      const toSlider = document.querySelector('#toSlider');
      const fromInput = document.querySelector('#fromInput');  
      fillSlider(fromSlider, toSlider, '#C6C6C6', '#25daa5', toSlider);
      setToggleAccessible(toSlider);
      controlFromSlider(fromSlider, toSlider, fromInput);
      setSliderPosition((prev)=>{
        return {...prev, minimumvalue: fromSlider.value}
      });

      props.sliderMinMaxValues(sliderPosition);

    }

    const checkToSliderInputHandel = (e) =>{
      const fromSlider = document.querySelector('#fromSlider');
      const toSlider = document.querySelector('#toSlider'); 
      const toInput = document.querySelector('#toInput');
      fillSlider(fromSlider, toSlider, '#C6C6C6', '#25daa5', toSlider);
      setToggleAccessible(toSlider);
      controlToSlider(fromSlider, toSlider, toInput);
       setSliderPosition((prev)=>{
        return {...prev, maximumValue: toSlider.value}
      });

      props.sliderMinMaxValues(sliderPosition);
    }

    const checkFromInputHandler = () =>{
      const fromSlider = document.querySelector('#fromSlider');
      const toSlider = document.querySelector('#toSlider'); 
      const fromInput = document.querySelector('#fromInput');
      const toInput = document.querySelector('#toInput');
      fillSlider(fromSlider, toSlider, '#C6C6C6', '#25daa5', toSlider);
      setToggleAccessible(toSlider);
      controlFromInput(fromSlider, fromInput, toInput, toSlider);
      props.sliderMinMaxValues(sliderPosition);
    }

    const checkToInputHandler = () =>{
      const fromSlider = document.querySelector('#fromSlider');
      const toSlider = document.querySelector('#toSlider'); 
      const fromInput = document.querySelector('#fromInput');
      const toInput = document.querySelector('#toInput');
      fillSlider(fromSlider, toSlider, '#C6C6C6', '#25daa5', toSlider);
      setToggleAccessible(toSlider);
      controlToInput(toSlider, fromInput, toInput, toSlider);
      props.sliderMinMaxValues(sliderPosition);
    }
  
  
  return (
    <>
      
      <div className="range_container">
    <div className="sliders_control">
        <input id="fromSlider" type="range" value={sliderPosition.minimumvalue} min="0" max={maxValue} onInput={checkFromSliderInputHandel}/>
        <input id="toSlider" type="range"  value={sliderPosition.maximumValue} min="0" max={maxValue} onInput={checkToSliderInputHandel}/>
    </div>
    <div className="form_control">
        <span className='labelprice rd-range-title'>Price: $</span>
        <div className="form_control_container">
            <div className="form_control_container__time">Min</div>
            <input className="form_control_container__time__input rd-range-input" type="number" id="fromInput" onInput={checkFromInputHandler}  value={sliderPosition.minimumvalue} min={minValue} max={maxValue}/>
        </div>
        <span className='linesp'>-</span>
        <div className="form_control_container">
            <div className="form_control_container__time">Max</div>
            <input className="form_control_container__time__input rd-range-input" type="number" id="toInput" onInput={checkToInputHandler}  value={sliderPosition.maximumValue} min={minValue} max={maxValue}/>
        </div>
    </div>
</div>

    </>
  )
}
