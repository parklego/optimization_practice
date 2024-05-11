import { useInfiniteQuery } from "react-query";
import ListRow from "../shared/ListRow";
import { getCards } from "../../remote/card";
import { flatten } from "lodash";
import Flex from "../shared/Flex";

const CardList = () => {
  const { data, hasNextPage, fetchNextPage } = useInfiniteQuery(
    ["cards"],
    ({ pageParam }) => {
      //   console.log("pageParam", pageParam);
      return getCards(pageParam);
    },
    {
      getNextPageParam: (snapshot) => {
        // console.log("snapshot", snapshot);
        return snapshot.isLastPage ? undefined : snapshot.lastVisible;
      },
    }
  );

  const cards = flatten(data?.pages.map(({ items }) => items));

  if (!data) {
    return null;
  }

  return (
    <ul>
      {cards.map((card, idx) => {
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
      <Flex justify="center">
        {hasNextPage && <button onClick={() => fetchNextPage()}>더보기</button>}
      </Flex>
    </ul>
  );
};

export default CardList;
