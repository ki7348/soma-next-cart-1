import Image from "next/image";
import { HeartIcon } from "@heroicons/react/outline";
import { useSetRecoilState } from "recoil";
import likedListState from "../recoil/liked-list";

interface ProductCardProps {
  id: string;
  imgSrc: string;
  price: number;
  liked: boolean;
}

function ProductCard({ id, imgSrc, price, liked }: ProductCardProps) {
  const setLikedListState = useSetRecoilState(likedListState);

  return (
    <article className="relative w-60">
      <button
        className="absolute top-2 right-2 z-10 h-8 w-8"
        onClick={() =>
          setLikedListState((old) =>
            !liked
              ? [...old, { id, price, imgSrc }]
              : old.filter((x) => x.id !== id)
          )
        }
      >
        <HeartIcon
          className={`stroke-red-500 ${liked ? "fill-red-500" : ""}`}
        />
      </button>
      <div className="relative aspect-square w-full">
        <Image src={imgSrc} alt="image" layout="fill"></Image>
      </div>
      <div className="flex justify-end p-2">
        <div className="mx-auto">{price}원</div>
        <button>장바구니</button>
      </div>
    </article>
  );
}

export default ProductCard;
