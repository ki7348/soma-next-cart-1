import { faCoins, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { CoinData } from "../types/Coin";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background-color: rgb(245, 246, 250);
  color: rgb(45, 52, 54);
  margin-bottom: 10px;
  border-radius: 8px;
  width: 480px;
  height: 50px;
  padding: 10px;
  &:hover {
    p {
      transition: color 0.3s ease-in;
      color: red;
    }
  }
`;

const TitleWrapper = styled.span`
  display: flex;
  align-items: center;
`;

const CoinImage = styled(FontAwesomeIcon)`
  color: #fbcb0a;
  margin-right: 10px;
`;

const CoinName = styled.p`
  font-size: 18px;
`;

const CoinHeart = styled(FontAwesomeIcon)``;

const CoinItem = (props: Partial<CoinData>) => {
  return (
    <Wrapper>
      <TitleWrapper>
        <CoinImage icon={faCoins} />
        <CoinName>{props.name}</CoinName>
      </TitleWrapper>
      <CoinHeart icon={faHeart} />
    </Wrapper>
  );
};

export default CoinItem;
