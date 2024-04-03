import { Link, graphql, useStaticQuery } from "gatsby";
import React from "react";
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
          (
            socialLink: SocialLink["attributes"],
            index: React.Key | null | undefined
          ) => (
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
              <a href="">Hero Banner</a>
            </li>
            <li>
              <a href="" className="hover:text-blue-500">
                <PersonIcon />
                About Me
              </a>
            </li>
            <li>
              <a href="">
                <SchoolIcon />
                <span>Education</span>
              </a>
            </li>
            <li>
              <a href="">
                <WorkIcon />
                Experience
              </a>
            </li>
            <li>
              <a href="">
                <CodeIcon />
                Skills
              </a>
            </li>
            <li>
              <a href="">
                <WebIcon />
                Projects
              </a>
            </li>
            <li>
              <a href="">
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
