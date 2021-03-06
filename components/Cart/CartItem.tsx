import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import styled from "styled-components";
import { ICartList } from "../../types/Cart";

const CartItem = (props: ICartList) => {
  const { name, count } = props;
  return (
    <Wrapper>
      <Link href={`/${props.id}`}>
        <TitleWrapper>
          <CoinImage icon={faCoins} />
          <CoinName>{name}</CoinName>
        </TitleWrapper>
      </Link>
      <CoinQuantity>{count}개</CoinQuantity>
    </Wrapper>
  );
};

export default CartItem;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 480px;
`;

const TitleWrapper = styled.div`
  display: flex;
  position: relative;
  cursor: pointer;
  background-color: ${({ theme }) => theme.color.light};
  margin: 5px 10px 5px 0px;
  border-radius: 8px;
  width: 400px;
  height: 50px;
  padding: 10px;
  &:hover {
    p {
      transition: color 0.3s ease-in;
      color: ${({ theme }) => theme.color.main};
    }
  }
  display: flex;
  align-items: center;
`;

const CoinImage = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.color.yellow};
  margin-right: 10px;
`;

const CoinName = styled.p`
  font-size: 18px;
`;

const CoinQuantity = styled.p`
  ${({ theme }) => theme.mixin.fontSize(14)};
`;
