import { Media } from "@strapi/strapi";

export interface SocialLink {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date;
  Name: string;
  Link: string;
  Icon: Media;
}
