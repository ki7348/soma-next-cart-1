import { fetchCoins } from "../apis";
import styled from "styled-components";
import { ICoinData } from "../types/Coin";
import { NextPage } from "next";
import CoinItem from "../components/Coin/CoinItem";
import Link from "next/link";
import Button from "../components/UI/Button";

const HomePage: NextPage<{ coinData: ICoinData[] }> = ({ coinData }) => {
  return (
    <Wrapper>
      <Header>
        <Title>Coin Tracker</Title>
      </Header>
      <ButtonWrapper>
        <Button backgroundColor="#2d3436" height="30px" width="fit-content">
          <Link href="/wish-list">
            <WishListLink>찜 목록</WishListLink>
          </Link>
        </Button>
        <Button backgroundColor="#2d3436" height="30px" width="fit-content">
          <Link href="/cart-list">
            <WishListLink>장바구니</WishListLink>
          </Link>
        </Button>
      </ButtonWrapper>
      <CoinBody>
        {coinData.map((coin: ICoinData) => (
          <CoinItem key={coin.id} id={coin.id} name={coin.name} />
        ))}
      </CoinBody>
    </Wrapper>
  );
};

export const getStaticProps = async () => {
  const originCoinData: ICoinData[] = await fetchCoins();

  if (!originCoinData) {
    return { notfound: true };
  }

  const coinData = originCoinData.slice(0, 50);

  return {
    props: {
      coinData,
    },
  };
};

export default HomePage;

const Wrapper = styled.div`
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

const ButtonWrapper = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 20px;
  margin-bottom: 10px;
`;

const CoinBody = styled.div`
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.mixin.flexCenter()};
`;

const WishListLink = styled.a`
  ${({ theme }) => theme.mixin.fontSize(16, theme.color.main)};
`;
