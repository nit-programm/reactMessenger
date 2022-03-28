import { Button, TextField } from "@mui/material";
import { useState } from "react"
import './styles.css'

export const FormMui = ({onSubmit}) => {
    const[text,setText] = useState('');

    const handleChangeValue = (e) => {
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(text);
        setText("");
    }
    return <form onSubmit={handleSubmit}>
        <label htmlFor="msgText">
            Type Message:
            <TextField id="msgText" value={text} onChange={handleChangeValue} type="text"/>
        </label>
        <Button className="button" type="submit">send</Button>
    </form>
}