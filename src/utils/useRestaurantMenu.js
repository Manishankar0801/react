import { useEffect } from "react";
import { MENU_API_URL } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  //fetch data
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API_URL + resId);
    const json = await data.json();
    //const restaurantInfo = json?.data?.cards[2]?.card?.card?.info
    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
