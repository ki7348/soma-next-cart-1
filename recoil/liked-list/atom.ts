import { atom } from "recoil";

interface Product {
  id: string;
  price: number;
  imgSrc: string;
}

const likedListState = atom<Product[]>({
  key: "likedListState",
  default: [],
});

export default likedListState;
