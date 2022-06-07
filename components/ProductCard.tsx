import Image from "next/image";
import { HeartIcon } from "@heroicons/react/outline";

interface ProductCardProps {
  imgSrc: string;
  price: number;
  liked: boolean;
}

function ProductCard({ imgSrc, price, liked }: ProductCardProps) {
  return (
    <article className="relative w-60">
      <button className="absolute top-2 right-2 z-10 h-8 w-8">
        <HeartIcon
          className={`stroke-red-500 ${
            liked ? "fill-red-500 hover:fill-transparent" : "hover:fill-red-500"
          }`}
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
