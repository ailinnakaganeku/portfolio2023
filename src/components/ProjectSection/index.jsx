import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ProjectCard from "../ProjectCard";
import Title from "../Title";
import { useMobile } from "../../hooks/useMobile";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const ProjectSection = ({ items, onItemClick }) => {
  const isMobile = useMobile();

  return (
    <section
      id="experience"
      className="p-4 md:p-8 bg-white dark:bg-gray-900 shadow-lg dark:shadow-none "
    >
      <Title title="Projects" />
      {!isMobile ? (
        <div className="mt-4 sm:mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items?.map((item) => (
            <ProjectCard key={item.id} item={item} onItemClick={onItemClick} />
          ))}
        </div>
      ) : (
        <div className="mt-4 sm:mt-8 relative">
          <Swiper
            spaceBetween={16}
            slidesPerView={1}
            navigation // Add the navigation prop
            pagination={{ clickable: true }}
            breakpoints={{
              // For screen sizes > 640px
              640: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              // For screen sizes > 768px
              768: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            // ...
          >
            {items?.map((item) => (
              <SwiperSlide key={item.id}>
                <ProjectCard item={item} onItemClick={onItemClick} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="absolute top-1/2 transform -translate-y-1/2 left-0 z-50">
            <div className="bg-white p-2 rounded-full">
              <button className="text-gray-900 dark:text-gray-900 text-2xl focus:outline-none">
                <FaChevronLeft />
              </button>
            </div>
          </div>
          <div className="absolute top-1/2 transform -translate-y-1/2 right-0 z-50">
            <div className="bg-white p-2 rounded-full">
              <button className="text-gray-900 dark:text-gray-900 text-2xl focus:outline-none">
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectSection;
