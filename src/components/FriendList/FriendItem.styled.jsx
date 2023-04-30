import styled from "styled-components";

const FriendsItem = styled.li`
display: flex;
align-items: center;

width: 300px; 
background-color: honeydew;
border-radius: 10px;
transition: box-shadow 250ms cubic-bezier(.42, 0, .58, 1);
  :hover {
    box-shadow: 0 2px 5px rgba(0,0,0,0.2), 0 4px 6px rgba(0,0,0,0.2);
;
`;

const OnlineStatus = styled.span`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  margin-left: 40px;
  background-color: ${(props) => (props.status ? "green" : "red")};
`;

const FriendsAvatar = styled.img`
  margin-right: 20px;
  margin-left: 20px;
`;

const FriendName = styled.p`
  font-size: 28px;
  font-weight: 500;
  color: rgb(50, 50, 50);
`;

export { FriendsItem, FriendsAvatar, FriendName, OnlineStatus };
