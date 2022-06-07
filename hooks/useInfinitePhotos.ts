import { RefCallback, useCallback } from "react";
import { useInfiniteQuery } from "react-query";
import { fetchPhotoListByPage } from "../utils";

function useInfinitePhotos() {
  const { fetchNextPage, ...rest } = useInfiniteQuery(
    "photos",
    ({ pageParam = 1 }) => fetchPhotoListByPage(pageParam),
    {
      getNextPageParam: (lastPage) =>
        !lastPage.isLast ? lastPage.nextPage : undefined,
    }
  );

  const refCallback = useCallback<RefCallback<HTMLDivElement>>(
    (ref) => {
      if (!ref) return;
      new IntersectionObserver(
        ([entry]) => entry.isIntersecting && fetchNextPage()
      ).observe(ref);
    },
    [fetchNextPage]
  );

  return { ...rest, refCallback };
}

export default useInfinitePhotos;
