import PropTypes from "prop-types";
import {
  FriendsItem,
  FriendsAvatar,
  FriendName,
  OnlineStatus,
} from "./FriendItem.styled";

export const FriendItem = ({ avatar, name, isOnline, id }) => {
  return (
    <FriendsItem key={id}>
      <OnlineStatus status={isOnline}></OnlineStatus>
      <FriendsAvatar src={avatar} alt="User avatar" width="64" />
      <FriendName>{name}</FriendName>
    </FriendsItem>
  );
};

FriendItem.prototype = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};
