import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NextPage } from "next";
import styled from "styled-components";
import { fetchInfo, fetchCoins, fetchTickers } from "../apis";
import { ICoinData, ICoinInfo, ITickers } from "../types/Coin";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Button from "../components/UI/Button";
import { useState } from "react";
import CoinDetailMenu from "../components/Coin/CoinDetailMenu";
import CoinChart from "../components/Coin/CoinChart";

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

const HomeImage = styled(FontAwesomeIcon)`
  color: #ffffff;
  cursor: pointer;
  margin-right: 10px;
`;

const DetailWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 10px 20px;
  height: 51px;
  border-radius: 10px;
`;

const DetailStyle = styled.span`
  flex-direction: column;
  ${({ theme }) => theme.mixin.flexCenter()};
`;

const DetailTitle = styled.p`
  ${({ theme }) => theme.mixin.fontSize(10)};
`;

const DetailContent = styled.p`
  ${({ theme }) => theme.mixin.fontSize(16)};
`;

const Description = styled.p`
  ${({ theme }) => theme.mixin.fontSize(16)};
  margin: 20px 0px;
`;

const ButtonWrapper = styled.span`
  display: flex;
  justify-content: space-between;
  margin: 25px 0px;
`;

const ButtonText = styled.p`
  ${({ theme }) => theme.mixin.fontSize(12)};
`;

const HiddenDetailWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;

const CoinDetailPage: NextPage<{
  coinInfo: ICoinInfo;
  coinTickers: ITickers;
}> = ({ coinInfo, coinTickers }) => {
  const [selectedMenu, setSelectedMenu] = useState<string>("");
  return (
    <Container>
      <Header>
        <Link href="/">
          <a>
            <HomeImage icon={faHome} />
          </a>
        </Link>
        <Title>{coinInfo.name}</Title>
      </Header>
      <DetailWrapper>
        <DetailStyle>
          <DetailTitle>RANK</DetailTitle>
          <DetailContent>{coinInfo.rank}</DetailContent>
        </DetailStyle>
        <DetailStyle>
          <DetailTitle>SYMBOL</DetailTitle>
          <DetailContent>{coinInfo.symbol}</DetailContent>
        </DetailStyle>
        <DetailStyle>
          <DetailTitle>PRICE</DetailTitle>
          <DetailContent>
            {"$" + coinTickers.quotes.USD.price.toFixed(3)}
          </DetailContent>
        </DetailStyle>
      </DetailWrapper>
      <Description>{coinInfo.description}</Description>
      <DetailWrapper>
        <DetailStyle>
          <DetailTitle>TOTAL SUPPLY</DetailTitle>
          <DetailContent>{coinTickers.total_supply}</DetailContent>
        </DetailStyle>
        <DetailStyle>
          <DetailTitle>MAX SUPPLY</DetailTitle>
          <DetailContent>{coinTickers.max_supply}</DetailContent>
        </DetailStyle>
      </DetailWrapper>
      <ButtonWrapper>
        <Button
          onClick={() => setSelectedMenu("PRICE")}
          radius="10px"
          backgroundColor="rgba(0, 0, 0, 0.2)"
          height="26px"
          width="235px"
        >
          <ButtonText>PRICE</ButtonText>
        </Button>
        <Button
          onClick={() => setSelectedMenu("CHART")}
          radius="10px"
          backgroundColor="rgba(0, 0, 0, 0.2)"
          height="26px"
          width="235px"
        >
          <ButtonText>CHART</ButtonText>
        </Button>
      </ButtonWrapper>
      {selectedMenu === "PRICE" && (
        <HiddenDetailWrapper>
          <CoinDetailMenu
            title={"Market capitalization"}
            content={coinTickers.quotes.USD.market_cap.toLocaleString("ko-KR")}
          />
          <CoinDetailMenu
            title={"All Time High"}
            content={coinTickers.quotes.USD.ath_price.toFixed(3)}
          />
          <CoinDetailMenu
            title={"All Time High date"}
            content={coinTickers.quotes.USD.ath_date.split("T")[0]}
          />
          <CoinDetailMenu
            title={"Change rate (last 24h)"}
            content={coinTickers.quotes.USD.percent_change_24h}
          />
        </HiddenDetailWrapper>
      )}
      {selectedMenu === "CHART" && <CoinChart coinId={coinInfo.id} />}
    </Container>
  );
};

type NextGetStaticPropsCtx = {
  params: {
    coin: string;
  };
  preview?: boolean;
  previewDate?: any;
};

export const getStaticProps = async (context: NextGetStaticPropsCtx) => {
  const { params } = context;

  const coinInfo: ICoinInfo = await fetchInfo(params.coin);
  const coinTickers: ITickers = await fetchTickers(params.coin);

  return {
    props: {
      coinInfo,
      coinTickers,
    },
  };
};

export const getStaticPaths = async () => {
  const coins = await fetchCoins();

  const paths = coins.slice(0, 50).map((coin: ICoinData) => ({
    params: { coin: coin.id },
  }));

  return {
    paths,
    fallback: true,
  };
};

export default CoinDetailPage;
