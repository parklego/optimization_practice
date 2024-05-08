import Button from "../shared/Button";
import { adBanners } from "../../mock/data";
import { store } from "../../remote/firebase";
import { collection, doc, writeBatch } from "firebase/firestore";
import { COLLECTIONS } from "../../constants";
import { Banner } from "../../models/card";

// 관심사의 분리
const BannerListAddButton = () => {
  const handleAddButton = async () => {
    const batch = writeBatch(store);

    adBanners.forEach((banner: Banner) => {
      const docRef = doc(collection(store, COLLECTIONS.ADBANNER));

      batch.set(docRef, banner);
    });

    await batch.commit();

    alert("배너리스트 추가 완료");
  };

  return (
    <div>
      <Button onClick={handleAddButton}>배너 리스트 추가하기</Button>
    </div>
  );
};

export default BannerListAddButton;
