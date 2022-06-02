import { atom } from "recoil";
import { IWishList } from "../types/WishList";

export const wishListState = atom<IWishList[]>({
  key: "wishListState",
  default: [],
});
