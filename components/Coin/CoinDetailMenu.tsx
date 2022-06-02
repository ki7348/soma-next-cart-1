import styled from "styled-components";

type CoinDetailMenuPropsType = {
  title: string;
  content: string | number;
};

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.color.dark};
  padding: 10px;
  text-align: center;
  border-radius: 10px;
`;
const Title = styled.h1`
  ${({ theme }) => theme.mixin.fontSize(18, theme.color.main)};
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
