import { useState, useEffect } from "react";
// import { FETCH_MENU_URL } from "../constants";
import useGeoLocation from "../components/useGeoLocation";

const useRestaurant = (resId) => {
  const [restaurant, setRestauraunt] = useState(null);
  // const location = useGeoLocation();
  // let lat = 12.971599;
  // let lng= 77.594566;
  //  lat = location?.coordinates?.lat;
  //  lng = location?.coordinates?.lng;
  //  if(!location?.coordinates?.lat){ lat =12.971599 }
  //  if(!location?.coordinates?.lng){ lng =77.594566}

  // const FETCH_MENU_URL = "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat="+lat+"&lng="+lng+"&restaurantId="

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const FETCH_MENU_URL = `https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=`;

    const data = await fetch(FETCH_MENU_URL + resId);
    const json = await data.json();
    setRestauraunt(json.data);
  }

  return restaurant;
};

export default useRestaurant;
