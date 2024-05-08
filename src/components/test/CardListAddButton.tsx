import Button from "../shared/Button";
import { card_list } from "../../mock/data";
import { store } from "../../remote/firebase";
import { collection, doc, writeBatch } from "firebase/firestore";
import { COLLECTIONS } from "../../constants";
import { Card } from "../../models/card";

// 관심사의 분리
const CardListAddButton = () => {
  const handleAddButton = async () => {
    const batch = writeBatch(store);

    card_list.forEach((card: Card) => {
      const docRef = doc(collection(store, COLLECTIONS.CARD));

      batch.set(docRef, card);
    });

    await batch.commit();

    alert("카드리스트 추가 완료");
  };

  return (
    <div>
      <Button onClick={handleAddButton}>카드 리스트 추가하기</Button>
    </div>
  );
};

export default CardListAddButton;
