import { fetchCoins } from "../apis";
import styled from "styled-components";
import { CoinData } from "../types/Coin";
import CoinItem from "../components/CoinItem";
import { GetStaticProps, InferGetStaticPropsType } from "next";

const Header = styled.header`
  height: 10vh;
  ${({ theme }) => theme.mixin.flexCenter()};
`;

const Title = styled.h1`
  font-size: 2em;
  position: relative;
  left: -10px;
  padding-left: 10px;
`;

const CoinBody = styled.div``;

const HomePage = ({ coinData }: { coinData: CoinData[] }) => {
  console.log(coinData);
  return (
    <>
      <Header>
        <Title>Coin Tracker</Title>
      </Header>
      <CoinBody>
        {coinData.map((coin: CoinData) => (
          <CoinItem key={coin.id} name={coin.name} />
        ))}
      </CoinBody>
    </>
  );
};

export const getStaticProps = async () => {
  const originCoinData: CoinData[] = await fetchCoins();

  if (!originCoinData) {
    return { notfound: true };
  }

  const coinData: CoinData[] = originCoinData.slice(0, 50);

  return {
    props: {
      coinData,
    },
  };
};

export default HomePage;
