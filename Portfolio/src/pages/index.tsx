import * as React from "react";
import { useStaticQuery, type HeadFC, type PageProps, graphql } from "gatsby";
import Layout from "../components/layout/Layout";
import ProjectShowcase from "../components/projects/ProjectShowcase";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";

const IndexPage: React.FC<PageProps> = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiHero {
        nodes {
          Title
        }
      }
    }
  `);

  return (
    <Layout>
      {/* <div>
        <h2>Hero Banner</h2>
      </div>
      <div>
        <h2>About Me</h2>
      </div>
      <div>
        <h2>Education</h2>
      </div>
      <div>
        <h2>Experience</h2>
      </div>
      <div>
        <h2>Skills</h2>
      </div>
      <div>
        <h2>
          Projects<ProjectShowcase></ProjectShowcase>
        </h2>
      </div>
      <div>
        <h2>Contact</h2>
      </div> */}

      <div>
        <AccessAlarmIcon />
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
