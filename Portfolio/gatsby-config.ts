import type { GatsbyConfig } from "gatsby";
import dotenv from "dotenv";
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Portfolio`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    `gatsby-plugin-sass`,
    // "gatsby-plugin-google-gtag",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.STRAPI_API_URL,
        accessToken: process.env.STRAPI_TOKEN,
        collectionTypes: ["hero", "project"],
        singleTypes: [],
        maxParallelRequests: 5, // (Optional) Default: Number.POSITIVE_INFINITY
        remoteFileHeaders: {
          /**
           * Customized request headers
           * For http request with a image or other files need authorization
           * For expamle: Fetch a CDN file which has a security config when gatsby building needs
           */
          // Referer: "https://your-site-domain/",
          // Authorization: "Bearer eyJhabcdefg_replace_it_with_your_own_token",
        },
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-remark",
  ],
};

export default config;
