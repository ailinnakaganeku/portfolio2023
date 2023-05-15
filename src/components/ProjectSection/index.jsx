import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ProjectCard from "./ProjectCard";
import Title from "../Title";
import { useMobile } from "../../hooks/useMobile";

export const ProjectSection = ({ items, onItemClick }) => {
  const isMobile = useMobile();

  return (
    <section className="container mx-auto p-4 pt-8 md:pt-8 md:pr-8 md:pl-8 bg-white dark:bg-gray-900 shadow-lg dark:shadow-none">
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
                <ProjectCard item={item} onItemClick={onItemClick} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </section>
  );
};

export default ProjectSection;
