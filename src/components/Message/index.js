import './styles.css';

export const Message = ({text, author}) => {
    console.log(text);
    return <div>
        <h3 className="header" >
            Message text: {text}
        </h3>
        <span>Author: {author}</span>
    </div>
}
