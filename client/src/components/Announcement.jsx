import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: 600;
`;

const Announcement = () => {
  return <Container>FREE SHIPPING ON ORDERS OVER $100!</Container>;
};

export default Announcement;
