import { Media } from "@strapi/strapi";

export interface SocialLink {
  id: number;
  attributes: {
    createdAt: Date;
    updatedAt: Date;
    publishedAt?: Date;
    Name: string;
    Link: string;
    Icon: { data: Media; url: string };
  };
}
