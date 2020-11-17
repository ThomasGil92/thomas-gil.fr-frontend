import { gql } from 'apollo-boost'
import { SITE_DATA } from './fragments'

export const GET_ALL_SITES = gql`
query {
    allSites{
    ...siteData
    }
}
${SITE_DATA}
`
export const SINGLE_SITE = gql`
query singleSite($siteId:ID!){
    singleSite(siteId:$siteId){
    ...siteData
    }
}
${SITE_DATA}
`