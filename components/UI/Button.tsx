import styled from "styled-components";

type ButtonPropsType = {
  backgroundColor?: string;
  children: React.ReactNode;
  height: string;
  onClick?: () => void;
  radius?: string;
  width?: string;
};

const Button = styled.button<ButtonPropsType>`
  ${({ theme }) => theme.mixin.flexCenter()};
  background-color: ${(props) => props.backgroundColor};
  border-radius: ${(props) => props.radius};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  &:hover {
    cursor: pointer;
  }
`;

const ButtonView = (props: ButtonPropsType) => {
  const { onClick, backgroundColor, radius, height, width, children } = props;
  return (
    <Button
      onClick={onClick}
      backgroundColor={backgroundColor}
      radius={radius}
      height={height}
      width={width}
    >
      {children}
    </Button>
  );
};

export default ButtonView;
