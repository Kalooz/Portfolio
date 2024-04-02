import * as React from "react";
import {
  useStaticQuery,
  type HeadFC,
  type PageProps,
  graphql,
  Link,
} from "gatsby";
import { ApiHeroHero } from "../contentTypes";

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

  const articles = data.allStrapiHero.nodes;

  return (
    <>
      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link className="text-2xl font-bold" to="/">
            My Portfolio
          </Link>

          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#about" className="hover:text-gray-300">
                  About
                </a>

                <Link className="hover:text-gray-300" to="Projects">
                  Projects
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-300" to="Projects">
                  Projects
                </Link>
              </li>
              <li>
                <a href="#contact" className="hover:text-gray-300">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        {articles.map(
          (article: ApiHeroHero["attributes"]["Title"], index: React.Key) => (
            <div key={index} className="bg-gray-100 p-4">
              <h2 className="text-2xl font-bold">{article.Title}</h2>
            </div>
          )
        )}
      </main>

      <div>
        <div>
          <a
            href="http://localhost:1337/uploads/Project_Play2_Learn_Complete_Website_Project_Webucator_a89d20b2ac.pdf"
            download
          >
            <button>Download PDF</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
