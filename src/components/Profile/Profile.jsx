import PropTypes from "prop-types";
import {
  Container,
  UserProfile,
  Avatar,
  UserName,
  UserTag,
  Location,
  StatsList,
  StatsItem,
  StatsLabel,
  StatsQuantity,
} from "./Profile.styled";

export const Profile = ({ username, avatar, tag, location, stats }) => {
  return (
    <Container key={username}>
      <UserProfile>
        <Avatar src={avatar} alt={username} />
        <UserName>{username}</UserName>
        <UserTag>@{tag}</UserTag>
        <Location>{location}</Location>

        <StatsList>
          <StatsItem>
            <StatsLabel>Followers</StatsLabel>
            <StatsQuantity>{stats.followers}</StatsQuantity>
          </StatsItem>
          <StatsItem>
            <StatsLabel>Views</StatsLabel>
            <StatsQuantity>{stats.views}</StatsQuantity>
          </StatsItem>
          <StatsItem>
            <StatsLabel>Likes</StatsLabel>
            <StatsQuantity>{stats.likes}</StatsQuantity>
          </StatsItem>
        </StatsList>
      </UserProfile>
    </Container>
  );
};

Profile.prototype = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number.isRequired),
};
