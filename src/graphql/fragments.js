import { gql } from 'apollo-boost'

//Graphql Fragment


export const SITE_DATA = gql`
 fragment siteData on Site{
    _id
    title
    description
    url
    github
    missions
    technos
    image{
       url
       public_id
    }
    postedBy{
       _id
       name
       email
    }
 }
`;
