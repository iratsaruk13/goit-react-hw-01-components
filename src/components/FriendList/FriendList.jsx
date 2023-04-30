import PropTypes from "prop-types";
import { FriendItem } from "./FriendItem";
import { FriendsList } from "./FriendList.styled";

export const FriendList = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
      ))}
    </FriendsList>
  );
};

FriendList.prototype = {
  friends: PropTypes.array,
};
