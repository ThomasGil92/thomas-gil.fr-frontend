import {gql} from 'apollo-boost'
import {SITE_DATA} from './fragments'

export const SITE_CREATE=gql`
mutation siteCreate($input:SiteInput!){
    siteCreate(input:$input){
        ...siteData
    }
}
${SITE_DATA}
`

export const SITE_UPDATE=gql`
    mutation siteUpdate($input:SiteUpdateInput!){
        siteUpdate(input:$input){
            ...siteData
        }
        
    }
    ${SITE_DATA}
`

export const SITE_DELETE=gql`
    mutation siteDelete($siteId:String!){
        siteDelete(siteId:$siteId){
            _id
            title
        }  
    }
`