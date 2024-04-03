// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import React, { useCallback, useRef } from "react";
import { useStaticQuery, graphql } from "gatsby";

import { Project as ProjectDetails } from "./types";
import { SwiperNavButtons } from "../carousel/SwiperNavButtons";

interface Project {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}

interface ProjectShowcaseProps {
  projects: Project[];
}

const ProjectShowcase: React.FC = ({}) => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiProject {
        nodes {
          Title
        }
      }
    }
  `);

  const projects = data.allStrapiProject.nodes;

  const swiper = useSwiper();

  return (
    <div>
      <Swiper modules={[Navigation, A11y]} spaceBetween={50} slidesPerView={3}>
        {projects.map(
          (
            project: ProjectDetails["attributes"],
            index: React.Key | null | undefined
          ) => {
            return (
              <SwiperSlide key={index}>
                <div className="p-2 bg-black">
                  <h1>{project.Title}</h1>
                </div>
              </SwiperSlide>
            );
          }
        )}
        <SwiperNavButtons />
      </Swiper>
    </div>
  );
};

export default ProjectShowcase;
