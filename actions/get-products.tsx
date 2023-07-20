import qs from "query-string";

import { Product } from "@/types";

const URL = `${process.env.NEXT_PULIC_API_URL}/product`;

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

const getProducts = async (query?: Query): Promise<Product[]> => {
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
  return [
    {
      id: "1",
      category: {
        id: "1",
        name: "category test",
        billboard: {
          id: "1",
          label: "billboard test",
          imageUrl: "imageUrl",
        },
      },
      name: "Product Test",
      price: "10.00",
      isFeatured: true,
      size: { id: "1", name: "Large", value: "100" },
      color: { id: "1", name: "Blue", value: "blue" },
      images: [
        {
          id: "1",
          url: "https://img.etimg.com/thumb/msid-100299251,width-300,height-225,imgsize-58252,,resizemode-75/the-top-7-skills-every-product-manager-needs-to-succeed.jpg",
        },
      ],
    },
    {
      id: "2",
      category: {
        id: "2",
        name: "category test 2",
        billboard: {
          id: "2",
          label: "billboard test 2",
          imageUrl: "imageUrl 2",
        },
      },
      name: "Product Test 2",
      price: "10.00",
      isFeatured: true,
      size: { id: "1", name: "Small", value: "10" },
      color: { id: "1", name: "Black", value: "black" },
      images: [
        {
          id: "1",
          url: "https://img.etimg.com/thumb/msid-100299251,width-300,height-225,imgsize-58252,,resizemode-75/the-top-7-skills-every-product-manager-needs-to-succeed.jpg",
        },
      ],
    },
  ];
};

export default getProducts;
