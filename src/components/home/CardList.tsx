import { useQuery } from "react-query";
import ListRow from "../shared/ListRow";
import { getCards } from "../../remote/card";

const CardList = () => {
  const { data } = useQuery(["CardList"], () => getCards());

  if (!data) {
    return null;
  }

  return (
    <ul>
      {data.map((card, idx) => {
        return (
          <ListRow
            key={card.id}
            // left={<></>}
            contents={
              <ListRow.Texts title={`${idx + 1}위`} subTitle={card.name} />
            }
            right={<>{card.payback ? <>{card.payback}</> : null}</>}
            withArrow
          />
        );
      })}
    </ul>
  );
};

export default CardList;
