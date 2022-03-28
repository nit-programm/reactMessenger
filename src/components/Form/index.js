import { useEffect, useRef, useState } from "react"
import './styles.css'

export const Form = ({onSubmit}) => {
    const[text,setText] = useState('');
    const textField = useRef();

    const handleChangeValue = (e) => {
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(text);
        setText("");
    }

    useEffect(() => {
        textField.current?.focus();

    }, []);

    return <form onSubmit={handleSubmit}>
        <label htmlFor="msgText">
            Type Message:
            <input ref={textField} id="msgText" value={text} onChange={handleChangeValue} type="text"/>
        </label>
        <input className="button" type="submit"/>
    </form>
}