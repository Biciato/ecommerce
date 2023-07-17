import { Size } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

const getSizes = async (): Promise<Size[]> => {
  // const res = await fetch(URL);

  // return res.json();
  return [
    {
      id: "1",
      name: "Large",
      value: "100",
    },
    {
      id: "2",
      name: "Small",
      value: "10",
    },
  ];
};

export default getSizes;
