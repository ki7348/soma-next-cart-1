import { atom } from "recoil";
import { IWishList } from "../types/Wish";
import { recoilKey } from "./constants";

export const wishListState = atom<IWishList[]>({
  key: recoilKey.wishListState,
  default: [],
});
