import { ITEM_URL } from "../utils/constant.jsx";

export const fatchData = async () => {
  
  try {
    const data = await fetch(ITEM_URL);
    const jsonData = await data.json();
    return [jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants, "success"];
  } catch (error) {
    return ["Its from our Side, Plz Reload"]
  }
};
