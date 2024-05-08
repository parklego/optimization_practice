import { useEffect } from "react";
import Top from "../components/shared/Top";
import { getCards } from "../remote/card";
import { getBanners } from "../remote/banner";

const Home = () => {
  useEffect(() => {
    getCards().then((res) => console.log(res));
    getBanners().then((res) => console.log(res));
  }, []);

  return (
    <>
      <Top
        title="혜택 좋은 카드"
        subTitle="회원님을 위한 혜택 좋은 카드를 골라봤어요."
      />
    </>
  );
};

export default Home;
