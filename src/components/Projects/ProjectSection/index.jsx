import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Pagination } from "swiper";
import ProjectCard from "./ProjectCard";
import Title from "../../Title";
import { useMobile } from "../../../hooks/useMobile";
import Layout from "../../Layout";

SwiperCore.use([Pagination]);

export const ProjectSection = ({ items, onItemClick }) => {
  const isMobile = useMobile();

  return (
    <Layout>
      <Title title="Projects" />
      {!isMobile ? (
        <div className="mt-4 sm:mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items?.map((item) => (
            <ProjectCard key={item.id} item={item} onItemClick={onItemClick} />
          ))}
        </div>
      ) : (
        <div className="mt-4 sm:mt-6 relative">
          <Swiper
            spaceBetween={16}
            slidesPerView={1}
            navigation
            modules={[Pagination]}
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
          >
            {items?.map((item) => (
              <SwiperSlide key={item.name}>
                <ProjectCard
                  key={item.id}
                  item={item}
                  onItemClick={onItemClick}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </Layout>
  );
};

export default ProjectSection;
