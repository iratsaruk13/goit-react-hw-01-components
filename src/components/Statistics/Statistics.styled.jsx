import styled from "styled-components";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const Statistic = styled.section`
  margin: 20px auto;
  max-width: 600px;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: box-shadow 250ms cubic-bezier(0.42, 0, 0.58, 1);
  :hover {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.2);
  }
`

const Title = styled.h2`
  font-size: 24px;
  font-weight: 500;
  text-align: center;
`

const StatsList = styled.ul`
  list-style: none;
  display: flex;
  gap: 10px;
  margin: 0px;
  padding: 8px;
`

const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: calc(100% / 3);
  width: 100px;
  background-color: ${getRandomHexColor};
  border-radius: 10px;
  transition: box-shadow 250ms cubic-bezier(0.42, 0, 0.58, 1);
  :hover {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.2);
  }
`

const StatsLabel = styled.span`
  font-size: 20px;
  font-weight: 500;
  color: ${getRandomHexColor};
`

const StatsPer = styled.span`
  font-size: 32px;
  font-weight: 700;
  color: rgb(50, 50, 50);
`

export { Statistic, Title, StatsList, StatsItem, StatsLabel, StatsPer }
