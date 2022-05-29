import { fetchCoins } from "../apis";
import styled from "styled-components";
import { CoinData } from "../types/Coin";
import CoinItem from "../components/CoinItem";

const Header = styled.header`
  height: 10vh;
  ${({ theme }) => theme.mixin.flexCenter()};
`;

const Title = styled.h1`
  font-size: 2em;
  position: relative;
  left: -10px;
  padding-left: 10px;
  color: rgb(85, 239, 196);
`;

const CoinBody = styled.div`
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.mixin.flexCenter()};
`;

const HomePage = ({ coinData }: { coinData: CoinData[] }) => {
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
