import { faMinusCircle, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEvent, Dispatch, SetStateAction, useEffect } from "react";
import styled from "styled-components";
import Button from "../UI/Button";

type CartOptionProps = {
  quantity: string;
  setQuantity: Dispatch<SetStateAction<string>>;
};

const CartOption = (props: CartOptionProps) => {
  const { quantity, setQuantity } = props;

  useEffect(() => {
    if (quantity.length > 0 && +quantity < 1) {
      setQuantity("1");
      return;
    } else if (+quantity > 100) {
      setQuantity("100");
      return;
    }
  }, [quantity, setQuantity]);

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
