import qs from "query-string";

import { Category } from "@/types";

const URL = `${process.env.NEXT_PULIC_API_URL}/product`;

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

const getCategory = async (id: string): Promise<Category> => {
  /* const url = qs.stringifyUrl({
    url: URL,
    query: {
      colorId: query.colorId,
      sizeId: query.sizeId,
      categoryId: query.categoryId,
      isFeatured: query.isFeatured
    }
  })
  const res = await fetch(`${URL}/${id}`);Billboard

  return res.json(); */
  return {
    id: "1",
    name: "Category 1",
    billboard: {
      id: "1",
      label: "Billboard 1",
      imageUrl: "billboardImgUrl1",
    },
  };
};

export default getCategory;
