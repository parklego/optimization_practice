import { useInfiniteQuery } from "react-query";
import ListRow from "../shared/ListRow";
import { getCards } from "../../remote/card";
import { flatten } from "lodash";
import InfiniteScroll from "react-infinite-scroll-component";
import { useCallback } from "react";

const CardList = () => {
  const {
    data,
    hasNextPage = false,
    isFetching,
    fetchNextPage,
  } = useInfiniteQuery(
    ["cards"],
    ({ pageParam }) => {
      return getCards(pageParam);
    },
    {
      getNextPageParam: (snapshot) => {
        return snapshot.isLastPage ? undefined : snapshot.lastVisible;
      },
    }
  );

  const cards = flatten(data?.pages.map(({ items }) => items));

  const loadMore = useCallback(() => {
    if (hasNextPage === false || isFetching) return;
    fetchNextPage();
  }, [hasNextPage, isFetching, fetchNextPage]);

  if (!data) {
    return null;
  }

  return (
    <div>
      {/* content height > container height 일때 작동함. */}
      <InfiniteScroll
        dataLength={cards?.length}
        hasMore={hasNextPage}
        loader={<></>}
        next={loadMore}
        height={325}
      >
        {cards.map((card, idx) => {
          return (
            <ListRow
              key={card.id}
              contents={
                <ListRow.Texts title={`${idx + 1}위`} subTitle={card.name} />
              }
              right={<>{card.payback ? <>{card.payback}</> : null}</>}
              withArrow
            />
          );
        })}
      </InfiniteScroll>
    </div>
  );
};

export default CardList;
