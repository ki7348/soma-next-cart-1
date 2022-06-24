import { faMinusCircle, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEvent, Dispatch, SetStateAction, useEffect } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { cartListState } from "../../stores/cart";
import Button from "../UI/Button";

type CartOptionProps = {
  id: string;
  quantity: string;
  name: string;
  setQuantity: Dispatch<SetStateAction<string>>;
};

const CartOption = (props: CartOptionProps) => {
  const { quantity, setQuantity, id, name } = props;
  const [cartList, setCartList] = useRecoilState(cartListState);

  useEffect(() => {
    if (quantity.length > 0 && +quantity < 1) {
      setQuantity("1");
      return;
    } else if (+quantity > 100) {
      setQuantity("100");
      return;
    }
  }, [quantity, setQuantity]);

  const handlePutCart = (id: string, name: string) => {
    const index = cartList.findIndex((element) => id === element.id);
    if (index !== -1) {
      setCartList([
        ...cartList.slice(0, index),
        { id, count: cartList[index].count + +quantity, name },
        ...cartList.slice(index + 1),
      ]);
    } else {
      setCartList([...cartList, { id, count: +quantity, name }]);
    }
  };

  return (
    <Wrapper>
      <SelectWrapper>
        <MinusButton
          icon={faMinusCircle}
          onClick={() => setQuantity((+quantity - 1).toString())}
        />
        <QuantityInput
          value={quantity || ""}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setQuantity(event.target.value)
          }
        />
        <PlusButton
          icon={faPlusCircle}
          onClick={() => setQuantity((+quantity + 1).toString())}
        />
      </SelectWrapper>
      <Button
        radius="10px"
        backgroundColor="#5F7161"
        height="26px"
        width="235px"
        onClick={() => handlePutCart(id, name)}
      >
        <ButtonText>장바구니 담기</ButtonText>
      </Button>
    </Wrapper>
  );
};

export default CartOption;

const Wrapper = styled.div`
  ${({ theme }) => theme.mixin.flexCenter()};
  background-color: ${({ theme }) => theme.color.dark};
  flex-direction: column;
  border-radius: 10px;
  height: 120px;
`;

const SelectWrapper = styled.span`
  ${({ theme }) => theme.mixin.flexCenter()};
  margin-bottom: 20px;
`;

const MinusButton = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.color.light};
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const PlusButton = styled(FontAwesomeIcon)`
  width: 20px;
  height: 20px;
  color: ${({ theme }) => theme.color.light};
  cursor: pointer;
`;

const QuantityInput = styled.input.attrs({
  type: "text",
})`
  width: 30px;
  height: 30px;
  margin: 0px 20px;
  border: none;
  font-size: ${({ theme }) => theme.mixin.fontSize(16, theme.color.black)};
  text-align: center;
`;

const ButtonText = styled.p`
  ${({ theme }) => theme.mixin.fontSize(12)};
`;
