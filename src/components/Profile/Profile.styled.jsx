import styled from "styled-components";

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  background-color: honeydew;
`;

const UserProfile = styled.div`
  text-align: center;
  background-color: #fff;
  max-width: 500px;
  margin: 0px auto;
  border-radius: 16px;
  transition: box-shadow 250ms cubic-bezier(0.42, 0, 0.58, 1);
  :hover {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.2);
  }
`;

const Avatar = styled.img`
  max-width: 150px;
  border-radius: 50%;
  background-color: honeydew;
  transition: box-shadow 250ms cubic-bezier(0.42, 0, 0.58, 1);
  :hover {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.2);
`;
const UserName = styled.p`
  font-size: 28px;
  font-weight: 700;
`;

const UserTag = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: rgb(78, 77, 77);
`;
const Location = styled.p`
  font-size: 20px;
  font-weight: 400;
  color: rgb(78, 77, 77);
`;
const StatsList = styled.ul`
list-style: none;
display: flex;
gap: 10px;
margin: 0px;
padding: 8px;
 }`;

const StatsItem = styled.li`
display: flex;
flex-direction: column;
flex-basis: calc(100% / 3);
background-color: honeydew;
border-radius: 16px;
transition: box-shadow 250ms cubic-bezier(.42, 0, .58, 1);
  :hover {
    box-shadow: 0 2px 5px rgba(0,0,0,0.2), 0 4px 6px rgba(0,0,0,0.2);
`;

const StatsLabel = styled.span`
  font-size: 20px;
  font-weight: 500;
  color: rgb(78, 77, 77);
`;
const StatsQuantity = styled.span`
  font-size: 32px;
  font-weight: 700;
  color: rgb(78, 77, 77);
`;

export {
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
};
