import React, {useState, useRef, useEffect, useImperativeHandle, forwardRef} from 'react';


const Input = forwardRef((props, refProp) =>{

    const clasNm = props.type === 'submit' ? 'button button-lg button-primary button-zakaria' : `${props.className} ${props.readonly ? 'disabled' : ''}  form-input-input`;

    const [inputChange, setInputChange] = useState(props.value);
    const inputRef = useRef();

    const inputChangeHandler =(e) =>{
        setInputChange(e.target.value);
    }

    useEffect(()=>{
        //inputRef.current.focus();
    },[]);

    useImperativeHandle( refProp, ()=>{
        return { 
            focusOutside : activeFocus,
            inputChangeValue : inputChange,
            cleanCurrentInputState: cleanCurrentInputState,
            setInputValueFromOutside: setInputValueFromOutside 
         }
    })

    const activeFocus = () =>{
        inputRef.current.focus();
    }

    const setInputValueFromOutside = (value) =>{
        setInputChange(value);
    }
   
    const cleanCurrentInputState = () =>{
        setInputChange('');
    }

  return (
    <>
    <div className='form-wrap-input'>
    { props.type === 'submit'? '' : <label className='labelfield form-label-input' htmlFor={props.id} >{props.label}</label> }
     <input type={props.type} readonly={props.readonly ? props.readonly : false } ref={inputRef} id={props.id} name={props.name} value={inputChange} className={clasNm} onChange={inputChangeHandler} />
     </div>
    </>
  )
});


export default Input;