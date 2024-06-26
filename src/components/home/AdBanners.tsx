import { useQuery } from "react-query";
import { getBanners } from "../../remote/banner";
import Flex from "../shared/Flex";
import Text from "../shared/Text";
import { css } from "@emotion/react";
import { colors } from "../../styles/colors";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const AdBanners = () => {
  const { data } = useQuery(["AdBanners"], () => getBanners());

  return (
    <Container>
      <Swiper spaceBetween={8}>
        {data?.map((banner) => (
          <SwiperSlide key={banner.id}>
            <Link to={banner.link}>
              <Flex direction="column" css={bannerContainerStyles}>
                <Text bold>{banner.title}</Text>
                <Text typograph="t7">{banner.description}</Text>
              </Flex>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

const Container = styled.div`
  padding: 24px;
`;

const bannerContainerStyles = css`
  padding: 16px;
  background-color: ${colors.gray};
  border-radius: 4px;
`;

export default AdBanners;
