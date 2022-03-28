import { PropTypes } from 'prop-types';
import './styles.css';

export const Chat = ({name}) => {
    return name
}

Chat.propTypes = {
    name: PropTypes.string.isRequired,
}