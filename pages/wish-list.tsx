import { NextPage } from "next";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import CoinItem from "../components/Coin/CoinItem";
import { wishListState } from "../stores/wish";
import { IWishList } from "../types/WishList";

const Wrapper = styled.div`
  margin: auto;
  max-width: 480px;
`;

const Title = styled.h1`
  height: 10vh;
  ${({ theme }) => theme.mixin.titleStyle()};
  ${({ theme }) => theme.mixin.flexCenter()};
`;

const WishList: NextPage = () => {
  const wishList = useRecoilValue(wishListState);

  if (wishList.length === 0) {
    return (
      <Wrapper>
        <Title>찜 목록이 비었습니다.</Title>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <Title>내 찜 목록</Title>
      {wishList.map((wish: IWishList) => {
        return <CoinItem key={wish.id} id={wish.id} name={wish.name} />;
      })}
    </Wrapper>
  );
};

export default WishList;
