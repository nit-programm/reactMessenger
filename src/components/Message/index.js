import './styles.css';

export const Message = ({text, onMessageClick}) => {
    console.log(text);
    return <h3 className="header" onClick={onMessageClick}>
        Message text, {text}
    </h3>
} 
