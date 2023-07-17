import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {
  // const res = await fetch(URL);

  // return res.json();
  return [
    {
      id: "1",
      name: "Category 1",
      billboard: {
        id: "1",
        label: "Billboard 1",
        imageUrl: "billboardImgUrl1",
      },
    },
    {
      id: "2",
      name: "Category 2",
      billboard: {
        id: "2",
        label: "Billboard 2",
        imageUrl: "billboardImgUrl1",
      },
    },
  ];
};

export default getCategories;
