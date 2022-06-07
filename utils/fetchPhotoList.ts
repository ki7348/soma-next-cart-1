interface PhotoDto {
  id: string;
  urls: { small: string };
  likes: number;
}

export async function fetchPhotoListByPage(
  pageIdx: number
): Promise<{ photos: PhotoDto[]; nextPage: number; isLast: boolean }> {
  const res = await fetch(
    `https://api.unsplash.com/photos?client_id=${process.env["NEXT_PUBLIC_UNSPLASH_ACCESS_KEY"]}&page=${pageIdx}&per_page=16`
  );
  return {
    photos: await res.json(),
    nextPage: pageIdx + 1,
    isLast: pageIdx === 38,
  };
}
