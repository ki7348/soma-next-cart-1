import { NextPage } from "next";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import CoinItem from "../components/Coin/CoinItem";
import { cartListState } from "../stores/cart";
import { ICartList } from "../types/Cart";

const Wrapper = styled.div`
  margin: auto;
  max-width: 480px;
`;

const Title = styled.h1`
  height: 10vh;
  ${({ theme }) => theme.mixin.titleStyle()};
  ${({ theme }) => theme.mixin.flexCenter()};
`;

const CartList: NextPage = () => {
  const cartList = useRecoilValue(cartListState);

  if (cartList.length === 0) {
    return (
      <Wrapper>
        <Title>장바구니가 비었습니다.</Title>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <Title>내 장바구니</Title>
      {cartList.map((cart: ICartList) => {
        return <CoinItem key={cart.id} id={cart.id} name={cart.name} />;
      })}
    </Wrapper>
  );
};

export default CartList;
