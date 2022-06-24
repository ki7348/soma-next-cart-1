import { atom } from "recoil";
import { ICartList } from "../types/Cart";
import { recoilKey } from "./constants";

export const cartListState = atom<ICartList[]>({
  key: recoilKey.cartListState,
  default: [],
});
