import { fetchCoins } from "../apis";
import styled from "styled-components";
import { ICoinData } from "../types/Coin";
import { NextPage } from "next";
import CoinItem from "../components/Coin/CoinItem";

const Container = styled.div`
  margin: auto;
  max-width: 480px;
`;

const Header = styled.header`
  height: 10vh;
  ${({ theme }) => theme.mixin.flexCenter()};
`;

const Title = styled.h1`
  ${({ theme }) => theme.mixin.titleStyle()};
`;

const CoinBody = styled.div`
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.mixin.flexCenter()};
`;

const HomePage: NextPage<{ coinData: ICoinData[] }> = ({ coinData }) => {
  return (
    <Container>
      <Header>
        <Title>Coin Tracker</Title>
      </Header>
      <CoinBody>
        {coinData.map((coin: ICoinData) => (
          <CoinItem key={coin.id} id={coin.id} name={coin.name} />
        ))}
      </CoinBody>
    </Container>
  );
};

export const getStaticProps = async () => {
  const originCoinData: ICoinData[] = await fetchCoins();

  if (!originCoinData) {
    return { notfound: true };
  }

  const coinData: ICoinData[] = originCoinData.slice(0, 50);

  return {
    props: {
      coinData,
    },
  };
};

export default HomePage;
