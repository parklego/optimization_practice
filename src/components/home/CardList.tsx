import { useInfiniteQuery } from "react-query";
import ListRow from "../shared/ListRow";
import { getCards } from "../../remote/card";
import { flatten } from "lodash";
import InfiniteScroll from "react-infinite-scroll-component";
import { useCallback } from "react";
import Badge from "../shared/Badge";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

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
        scrollThreshold={"100px"}
      >
        <ul>
          {cards.map((card, idx) => {
            return (
              <ListRow
                key={card.id}
                contents={
                  <ListRow.Texts title={`${idx + 1}위`} subTitle={card.name} />
                }
                right={
                  <>{card.payback ? <Badge label={card.payback} /> : null}</>
                }
                withArrow
                onClick={() => navigate(`/card/${card.id}`)}
              />
            );
          })}
        </ul>
      </InfiniteScroll>
    </div>
  );
};

export default CardList;
