import { useState } from "react"
import './styles.css'

export const Form = ({onSubmit}) => {
    const[text,setText] = useState('');
    const[author,setAuthor] = useState('');

    const handleChangeValue = (e) => {
        setText(e.target.value);
    }

    const handleChangeAuthor = (e) => {
        setAuthor(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({text,author});
    }
    return <form onSubmit={handleSubmit}>
        <label htmlFor="msgText">
            Type Message:
            <input id="msgText" value={text} onChange={handleChangeValue} type="text"/>
        </label>
        <label htmlFor="msgAuthor">
            Type Author:
            <input value={author} onChange={handleChangeAuthor} type="text"/>
        </label>
        <input className="button" type="submit"/>
    </form>
}