import { css } from "styled-components";

const fontSize = (size: number = 10, color: string = "#ffffff") => css`
  font-family: "Noto Sans KR", sans-serif;
  font-size: ${size}px;
  color: ${color};
`;

const setTextEllipsis = () => css`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const flexCenter = () => css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const titleStyle = () => css`
  font-size: 2em;
  position: relative;
  left: -10px;
  margin-left: 10px;
  color: rgb(85, 239, 196);
`;

const buttonTextStyle = () => css`
  color: #ffffff;
  font-size: 12px;
`;

const scrollStyle = (
  scrollbarWidth: number,
  scrollbarHeight: number,
  thumbRadius: number
) => {
  return css`
    &::placeholder {
      color: var(--element_disable);
    }
    &::-webkit-scrollbar {
      display: initial;
      width: ${scrollbarWidth}px;
      height: ${scrollbarHeight}px;
      cursor: pointer;
    }
    &::-webkit-scrollbar-track {
      background-color: var(--gray_deep);
    }
    &::-webkit-scrollbar-thumb {
      border-radius: ${thumbRadius}px;
      background-color: var(--sub_element_default);
    }
    &::-webkit-scrollbar-button {
      width: 0;
      height: 0;
    }
  `;
};

export { fontSize, setTextEllipsis, titleStyle, flexCenter, scrollStyle };
