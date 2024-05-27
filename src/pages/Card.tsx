import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getCard } from "../remote/card";
import Top from "../components/shared/Top";
import ListRow from "../components/shared/ListRow";
import FixBottomButton from "../components/shared/FixBottomButton";
import Flex from "../components/shared/Flex";
import Text from "../components/shared/Text";
import { css } from "@emotion/react";

const Card = () => {
  const { id = "" } = useParams();
  const { data } = useQuery(["card", id], () => getCard(id), {
    enabled: id !== "", // id가 빈 값이 아닐때만 호출한다.
  });

  if (!data) {
    return null;
  }

  const { name, corpName, promotion, tags, benefit } = data;
  const subTitle = promotion ? promotion.title : tags.join(",");

  function removeHtmlTags(text: string): string {
    // HTML 태그를 제거하는 정규식
    const regex = /(<([^>]+)>)/gi;

    // 정규식을 사용하여 HTML 태그를 제거
    return text.replace(regex, "");
  }

  return (
    <div>
      <Top title={`${corpName} ${name}`} subTitle={removeHtmlTags(subTitle)} />
      <ul>
        {benefit.map((item, index) => {
          return (
            <ListRow
              key={index}
              left={<IconCheck />}
              contents={
                <ListRow.Texts title={`혜택 ${index + 1}`} subTitle={item} />
              }
            />
          );
        })}
      </ul>
      {promotion ? (
        <Flex direction="column" css={TermsStyles}>
          <Text bold>유의사항</Text>
          <Text typograph="t7">{removeHtmlTags(promotion.terms)}</Text>
        </Flex>
      ) : null}
      <FixBottomButton label="신청하기" />
    </div>
  );
};

const IconCheck = () => {
  return (
    <svg viewBox="0 0 24 24" width={25} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.72,8.79l-4.29,4.3L8.78,11.44a1,1,0,1,0-1.41,1.41l2.35,2.36a1,1,0,0,0,.71.29,1,1,0,0,0,.7-.29l5-5a1,1,0,0,0,0-1.42A1,1,0,0,0,14.72,8.79ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
        fill="#6563ff"
      />
    </svg>
  );
};

const TermsStyles = css`
  margin-top: 80px;
  padding: 0 24px 80px 24px;
`;

export default Card;
