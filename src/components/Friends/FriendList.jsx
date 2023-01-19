import PropTypes from "prop-types";
import css from './friendsList.module.css';
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => {
    const elements = friends.map(({ id, avatar, name, isOnline }) => <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />);

    return (<ul className={css.friend_list}>
               {elements}
            </ul>)
}

FriendList.defaultProps = {
    friends: [],
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    }))
}

export default FriendList;