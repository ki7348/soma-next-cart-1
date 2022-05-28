import styled from "styled-components";

const Container = styled.div`
  background-color: rgb(245, 246, 250);
  color: rgb(45, 52, 54);
  margin-bottom: 10px;
  border-radius: 8px;
`;

const Wrapper = styled.span``;

const CoinImage = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

const CoinName = styled.p``;

const CoinItem = (props: any) => {
  return (
    <Container>
      <Wrapper>
        <CoinImage />
        <CoinName>{props.name}</CoinName>
      </Wrapper>
    </Container>
  );
};

export default CoinItem;
