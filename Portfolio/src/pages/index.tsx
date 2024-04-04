import * as React from "react";
import { useStaticQuery, type HeadFC, type PageProps, graphql } from "gatsby";
import Layout from "../components/layout/Layout";
import ProjectShowcase from "../components/projects/ProjectShowcase";
import Skills from "../components/skills/Skills";
import AboutMe from "../components/about/AboutMe";
import Experience from "../components/experience/Experience";
import Section from "../components/layout/Section";
import Education from "../components/education/Education";
import Contact from "../components/contact/ContactForm";

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
      <Section title="Hero Banner">
        <div>
          <h2>{data.allStrapiHero.nodes[0].Title}</h2>
        </div>
      </Section>
      <Section title="Education">
        <Education />
      </Section>
      <Section title="Contact">
        <Contact />
      </Section>

      <Section title="Experience">
        <Experience />
      </Section>
      <Section title="About Me">
        <AboutMe />
      </Section>
      <Section title="Projects">
        <ProjectShowcase />
      </Section>
      <Section title="Skills">
        <Skills />
      </Section>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
