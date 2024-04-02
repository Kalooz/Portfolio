import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

export default function Projects(props: {
  data: { allProduct: any[]; fields: { sku: any } };
  params: { name: any };
}) {
  const data = useStaticQuery(graphql`
    query {
      allStrapiProject {
        nodes {
          Title
          productPath: gatsbyPath(filePath: "/projects/{strapiProject.Title}")
        }
      }
    }
  `);

  return (
    <ul>
      {data.allStrapiProject.nodes.map((project: any) => (
        <li key={project.Title}>
          <Link to={project.productPath}>{project.Title}</Link>
        </li>
      ))}
    </ul>
  );
}
