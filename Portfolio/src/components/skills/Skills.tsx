import { useStaticQuery, graphql } from "gatsby";
import React from "react";
import { SkillType } from "./types";

const Skills: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiSkillType {
        nodes {
          Name
          skills {
            Skill
            Icon {
              url
            }
          }
        }
      }
    }
  `);

  const skills = data.allStrapiSkillType.nodes;

  return (
    <div>
      {skills.map((skillType: SkillType) => (
        <div key={skillType.Name}>
          <h3>{skillType.Name}</h3>
          <ul>
            {skillType.skills.map((skill) => (
              <li key={skill.Skill}>
                <img
                  src={`http://localhost:1337${skill.Icon.url}`}
                  alt={skill.Skill}
                  style={{ width: "20px" }}
                />
                {skill.Skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Skills;
