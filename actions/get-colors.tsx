import { Color } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

const getColors = async (): Promise<Color[]> => {
  // const res = await fetch(URL);

  // return res.json();
  return [
    {
      id: "1",
      name: "Black",
      value: "black",
    },
    {
      id: "2",
      name: "Blue",
      value: "blue",
    },
  ];
};

export default getColors;
