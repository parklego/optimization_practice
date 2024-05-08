import { collection, getDocs } from "firebase/firestore";
import { store } from "./firebase";
import { COLLECTIONS } from "../constants";
import { Banner } from "../models/card";

export const getBanners = async () => {
  const bannerSnapshot = await getDocs(collection(store, COLLECTIONS.ADBANNER));

  return bannerSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Banner),
  }));
};
