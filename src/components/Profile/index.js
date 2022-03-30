import './styles.css';

export const Profile = ({src}) => {
    return(
        <div className="profile__block">
            <img src={src} className="profile__image"/>
            <h2 className="profile__name">Name</h2>
        </div>
    )
}