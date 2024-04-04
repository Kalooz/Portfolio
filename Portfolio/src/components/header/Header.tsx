import { Link, graphql, useStaticQuery } from "gatsby";
import React, { useEffect } from "react";
import { SocialLink } from "./types";
import Partition from "../layout/Partition";

// Material UI Icons
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import PersonIcon from "@mui/icons-material/Person";
import CodeIcon from "@mui/icons-material/Code";
import WebIcon from "@mui/icons-material/Web";
import EmailIcon from "@mui/icons-material/Email";

const Header: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiSocialLink {
        nodes {
          Name
          Link
          Icon {
            url
          }
        }
      }
    }
  `);

  const socialLinks = data.allStrapiSocialLink.nodes;

  return (
    <header className="flex flex-col row-span-7 col-span-2">
      <ul className="flex justify-between items-center mb-4">
        <Link to="/">
          <h2 className="text-4xl  mt-1">Michal Kaluzny</h2>
        </Link>
        {socialLinks.map(
          (socialLink: SocialLink, index: React.Key | null | undefined) => (
            <li key={index}>
              <a href={socialLink.Link} className="hover:text-gray-300">
                <img
                  src={`http://localhost:1337${socialLink.Icon.url}`}
                  className="w-8"
                />

                <span className="sr-only">{socialLink.Name}</span>
              </a>
            </li>
          )
        )}
      </ul>

      <Partition className="h-full">
        <nav>
          <ul className="flex flex-col">
            <li>
              <a href="#about-me" className="hover:text-blue-500">
                <PersonIcon />
                About Me
              </a>
            </li>
            <li>
              <a href="#education">
                <SchoolIcon />
                <span>Education</span>
              </a>
            </li>
            <li>
              <a href="#experience">
                <WorkIcon />
                Experience
              </a>
            </li>
            <li>
              <a href="#skills">
                <CodeIcon />
                Skills
              </a>
            </li>
            <li>
              <a href="#projects">
                <WebIcon />
                Projects
              </a>
            </li>
            <li>
              <a href="#contact">
                <EmailIcon />
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </Partition>
    </header>
  );
};

export default Header;
