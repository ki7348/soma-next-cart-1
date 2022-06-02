import { faCoins, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { wishListState } from "../../stores/wish";
import { ICoinData } from "../../types/Coin";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 480px;
`;

const TitleWrapper = styled.div`
  display: flex;
  position: relative;
  cursor: pointer;
  background-color: rgb(245, 246, 250);
  color: rgb(45, 52, 54);
  margin: 5px 10px 5px 0px;
  border-radius: 8px;
  width: 440px;
  height: 50px;
  padding: 10px;
  &:hover {
    p {
      transition: color 0.3s ease-in;
      color: red;
    }
  }
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

const CoinHeart = styled(FontAwesomeIcon)<{ selected: boolean }>`
  cursor: pointer;
  color: ${(props) => (props.selected ? "#FF5D5D" : "#ffffff")};
`;

const CoinItem = (props: ICoinData) => {
  const { id, name } = props;
  const [isSelected, setIsSelected] = useState(false);
  const [wishList, setWishList] = useRecoilState(wishListState);

  useEffect(() => {
    if (wishList.find((element) => id === element.id)) {
      setIsSelected(true);
    }
  }, []);

  const handleWishList = (id: string, name: string) => {
    const index = wishList.findIndex((element) => id === element.id);
    if (index !== -1) {
      setWishList([...wishList.slice(0, index), ...wishList.slice(index + 1)]);
      setIsSelected(false);
    } else {
      setWishList((prevList) => [...prevList, { id, name }]);
      setIsSelected(true);
    }
  };

  return (
    <Wrapper>
      <Link href={`/${props.id}`}>
        <TitleWrapper>
          <CoinImage icon={faCoins} />
          <CoinName>{name}</CoinName>
        </TitleWrapper>
      </Link>
      <CoinHeart
        icon={faHeart}
        selected={isSelected}
        onClick={() => handleWishList(id, name)}
      />
    </Wrapper>
  );
};

export default CoinItem;
