// Interface automatically generated by schemas-to-ts

import { Media } from '../../../../common/schemas-to-ts/Media';
import { SkillType } from '../../../skill-type/content-types/skill-type/skill-type';
import { SkillType_Plain } from '../../../skill-type/content-types/skill-type/skill-type';
import { AdminPanelRelationPropertyModification } from '../../../../common/schemas-to-ts/AdminPanelRelationPropertyModification';

export interface Skill {
  id: number;
  attributes: {
    createdAt: Date;    updatedAt: Date;    publishedAt?: Date;    Skill?: string;
    Icon?: { data: Media };
    skill_type?: { data: SkillType };
  };
}
export interface Skill_Plain {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  Skill?: string;
  Icon?: Media;
  skill_type?: SkillType_Plain;
}

export interface Skill_NoRelations {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  Skill?: string;
  Icon?: number;
  skill_type?: number;
}

export interface Skill_AdminPanelLifeCycle {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  Skill?: string;
  Icon?: AdminPanelRelationPropertyModification<Media>;
  skill_type?: AdminPanelRelationPropertyModification<SkillType_Plain>;
}
