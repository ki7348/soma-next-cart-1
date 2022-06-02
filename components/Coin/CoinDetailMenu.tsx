import styled from "styled-components";

type CoinDetailMenuPropsType = {
  title: string;
  content: string | number;
};

const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  padding: 10px;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 10px;
`;
const Title = styled.h1`
  ${({ theme }) => theme.mixin.fontSize(18, "rgb(85, 239, 196)")};
  margin-bottom: 10px;
`;
const Content = styled.p`
  ${({ theme }) => theme.mixin.fontSize(14)};
`;

const CoinDetailMenu = (props: CoinDetailMenuPropsType) => {
  const { title, content } = props;
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Content>{content}</Content>
    </Wrapper>
  );
};

export default CoinDetailMenu;
