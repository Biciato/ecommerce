import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboard`;

const getBillboard = async (id: string): Promise<Billboard> => {
  // const res = await fetch(`${URL}/${id}`);Billboard

  // return res.json();
  return {
    id: "1",
    label: "Billboard Test",
    imageUrl: "imageUrl",
  };
};

export default getBillboard;
