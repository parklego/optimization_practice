import AdBanners from "../components/home/AdBanners";
import Top from "../components/shared/Top";

const Home = () => {
  return (
    <>
      <Top
        title="혜택 좋은 카드"
        subTitle="회원님을 위한 혜택 좋은 카드를 골라봤어요."
      />
      <AdBanners />
    </>
  );
};

export default Home;
